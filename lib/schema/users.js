export const UserSchema = new SimpleSchema({
    emails: {
        optional: true,
        type: Array
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        regEx: SimpleSchema.RegEx.Email,
        type: String
    },
    "emails.$.verified": {
        type: Boolean
    },
    profile: {
        blackbox: true,
        optional: true,
        type: Object
    },
    roles: {
        blackbox: true,
        optional: true,
        type: Object
    },
    services: {
        blackbox: true,
        optional: true,
        type: Object
    },
    username: {
        optional: true,
        type: String
    }
});
