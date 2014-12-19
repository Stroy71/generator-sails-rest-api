var IMPLEMENT_MESSAGE = "This method need to implement";

function BaseAuth() {
}

BaseAuth.prototype = Object.create({
    constructor: BaseAuth,

    hashPassword: function () {
        throw new Error(IMPLEMENT_MESSAGE);
    },

    hashPasswordSync: function () {
        throw new Error(IMPLEMENT_MESSAGE);
    },

    comparePassword: function () {
        throw new Error(IMPLEMENT_MESSAGE);
    },

    comparePasswordSync: function () {
        throw new Error(IMPLEMENT_MESSAGE);
    }
});

module.exports = BaseAuth;
