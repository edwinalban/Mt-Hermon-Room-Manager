import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
    mutation AddEmployee($username: String!, $password: String!) {
        addEmployee(username: $username, password: $password) {
            employee {
                _id
                username
            }
            token
        }
    }
  `;

export const UPDATE_EMPLOYEE_PERMISSIONS = gql`
    mutation UpdateEmployeePermissions($id: ID, $permissions: String) {
        updateEmployeePermissions(_id: $id, permissions: $permissions) {
            _id
            permissions
            username
        }
    }
`;

export const DELETE_EMPLOYEE = gql`
    mutation DeleteEmployee($id: ID!) {
        deleteEmployee(_id: $id) {
            _id
            username
        }
    }
`;

export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            employee {
                _id
                permissions
                username
            }
            token
        }
    }
`;

export const EMPLOYEE_UPDATE_ROOM = gql`
    mutation EmployeeUpdateRoom($id: ID, $clean: Boolean, $notes: String, $employeeId: ID) {
        employeeUpdateRoom(_id: $id, clean: $clean, notes: $notes, employeeId: $employeeId) {
            _id
            building
            floor
            roomNumber
            clean
            notes
            lastUpdated
            updatedBy {
                _id
                username
            }
        }
    }
`;

export const ADMIN_UPDATE_ROOM = gql`
    mutation AdminUpdateRoom($id: ID, $inspected: Boolean, $nextCleaningDate: String, $notes: String, $employeeId: ID) {
        adminUpdateRoom(_id: $id, inspected: $inspected, nextCleaningDate: $nextCleaningDate, notes: $notes, employeeId: $employeeId) {
            _id
            building
            floor
            roomNumber
            clean
            notes
            lastUpdated
            updatedBy {
                _id
                username
            }
        }
    }
`;

export const ASSIGN_EMPLOYEE = gql`
    mutation AssignEmployee($id: ID, $employeeIds: [ID]) {
        assignEmployee(_id: $id, employeeIds: $employeeIds) {
            room {
                _id
                building
                floor
                roomNumber
            }
            assignedTo {
                _id
            }
        }
    }
`;

export const UNASSIGN_EMPLOYEE = gql`
    mutation UnassignEmployee($id: ID, $employeeId: ID) {
        unassignEmployee(_id: $id, employeeId: $employeeId) {
            room {
                _id
                building
                floor
                roomNumber
            }
            assignedTo {
                _id
            }
        }
    }
  `

export const ADD_GROUP = gql`
    mutation AddGroup($name: String!, $currentRoom: ID!, $size: Int, $arriving: String, $departing: String, $midweek: Boolean, $weekend: Boolean, $amenities: String) {
        addGroup(name: $name, currentRoom: $currentRoom, size: $size, arriving: $arriving, departing: $departing, midweek: $midweek, weekend: $weekend, amenities: $amenities) {
            _id
            name
            size
            arriving
            departing
            midweek
            weekend
            currentRoom {
                _id
                building
                floor
                roomNumber
            }
            amenities
        }
    }
`;

export const UPDATE_GROUP = gql`
    mutation UpdateGroup($name: String!, $currentRoom: ID!, $id: ID, $size: Int, $arriving: String, $departing: String, $midweek: Boolean, $weekend: Boolean, $previousRoom: [ID], $amenities: String) {
        updateGroup(name: $name, currentRoom: $currentRoom, _id: $id, size: $size, arriving: $arriving, departing: $departing, midweek: $midweek, weekend: $weekend, previousRoom: $previousRoom, amenities: $amenities) {
            _id
            name
            size
            arriving
            departing
            midweek
            weekend
            currentRoom {
                _id
                building
                floor
                roomNumber
            }
            previousRoom {
                _id
            }
            amenities
        }
    }
`;

export const ADD_SCHEDULE = gql`
    mutation AddSchedule($room: ID, $assignedTo: [AssignedToInput], $date: String) {
        addSchedule(room: $room, assignedTo: $assignedTo, date: $date) {
            room {
                _id
                building
                floor
                roomNumber
            }
            assignedTo {
                _id
                username
            }
            date
        }
    }
`;
