module.exports = {
    schema: true,

    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true
        },

        password: {
            type: 'string'
        },

        email: {
            type: 'string',
            email: true,
            unique: true
        },

        firstName: {
            type: 'string',
            defaultsTo: ''
        },

        lastName: {
            type: 'string',
            defaultsTo: ''
        },

        gender: {
            type: 'string',
            enum: ['female', 'male']
        },

        phoneNumber: {
            type: 'string',
            defaultsTo: ''
        },

        avatarUrl: {
            type: 'url',
            defaultsTo: ''
        },

        toJSON: function () {
            var obj = this.toObject();

            delete obj.password;

            return obj;
        }
    },

    beforeUpdate: function (values, next) {
        if (values.password) {
            values.password = AuthService.hashPasswordSync(values.password);
        }

        next();
    },

    beforeCreate: function (values, next) {
        if (values.password) {
            values.password = AuthService.hashPasswordSync(values.password);
        }

        next();
    }
};
