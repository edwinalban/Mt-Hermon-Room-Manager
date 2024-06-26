const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate');
const Group = require('./Group');

const RoomSchema = new Schema(
    {
        building: {
            type: String,
            required: true,
        },
        floor: {
            type: Number,
            required: true,
        },
        roomNumber: {
            type: String,
            required: true,
        },
        assignedTo: [
            {
                type: Schema.Types.ObjectId,
                ref: 'employee',
            },
        ],
        clean: {
            type: Boolean,
        },
        inspected: {
            type: Boolean,
        },
        nextCleaningDate: [
            {
                type: Date,
                get: (date) => (formatDate(date)),
            },
        ],
        midweekFluff: {
            type: Boolean,
            default: false,
        },
        weekendFluff: {
            type: Boolean,
            default: false,
        },
        notes: {
            type: String,
        },
        masterDeluxe: {
            type: Boolean,
        },
        lastUpdated: {
            type: Date,
            default: Date.now,
            get: (date) => (formatDate(date)),
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'employee',
        },
        ada: {
            type: Boolean,
        },
        group: [
            {
                type: Schema.Types.ObjectId,
                ref: 'group',
            }
        ],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);

const Room = model('room', RoomSchema);

module.exports = Room;