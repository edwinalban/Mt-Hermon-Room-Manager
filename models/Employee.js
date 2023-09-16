const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const EmployeeSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
            createIndexes: { unique: true },
        },
        password: {
            type: String,
            required: true,
        },
        permissions: {
            type: String,
            required: true,
        },
    },
);

EmployeeSchema.pre('save', async function (next) {
    const employee = this;

    if (!employee.isModified('password'))
        return next();

    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (e) {
        return next(e);
    }
});

EmployeeSchema.methods.validatePassword = async function validatePassword(employeePassword) {
    return bcrypt.compare(employeePassword, this.password);
};

module.exports = mongoose.model('employee', EmployeeSchema);