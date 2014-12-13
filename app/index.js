var generator = require('yeoman-generator');

module.exports = generator.Base.extend({
    constructor: function () {
        generator.Base.apply(this, arguments);
        this.option('coffee');
    },

    someStuff: function () {
        this.log('test');
    }
});
