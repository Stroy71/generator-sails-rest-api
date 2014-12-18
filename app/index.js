var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay');

/**
 * List of questions
 * @type {Array}
 * @private
 */
var QUESTIONS_LIST = [{
    type: 'input',
    name: 'projectName',
    message: 'Type your project name',
    default: 'sails-rest-api'
}, {
    type: 'input',
    name: 'databaseName',
    message: 'Type your database name',
    default: 'sails-rest-api'
}];

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));

        this.prompt(QUESTIONS_LIST, function (answers) {
            this.answers = answers;
            done();
        }.bind(this));
    },

    configuring: function () {
        // TODO: maybe implement
    },

    writing: function () {
        this.directory(
            this.sourceRoot(),
            this.destinationRoot(),
            this.answers
        )
    },

    conflicts: function () {
        // TODO: maybe implement
    },

    install: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },

    end: function () {
        // TODO: maybe implement
    }
});
