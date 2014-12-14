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
}, {
    type: 'list',
    name: 'databaseAdapter',
    message: 'Choose database adapter',
    choices: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Redis',
        'Memory',
        'Disk'
    ],
    default: 2
}, {
    type: 'confirm',
    name: 'isPublicApi',
    message: 'Allow public requests to API? ',
    default: false
}, {
    type: 'confirm',
    name: 'isJwtAuth',
    message: 'Do you want to use JSON Web Token strategy?',
    default: true
}, {
    type: 'checkbox',
    name: 'authMethods',
    message: "Choose user's login methods",
    choices: [
        'Local',
        'Facebook',
        'Twitter',
        'Bitbucket',
        'Dropbox',
        'Flickr',
        'Foursquare',
        'GitHub',
        'Google',
        'Instagram',
        'LinkedIn',
        'Mail.Ru',
        'oDesk',
        'reddit',
        'Steam',
        'Stripe',
        'Trello',
        'Twitch',
        'VKontakte'
    ],
    default: [
        'Local'
    ]
}];

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));

        this.prompt(QUESTIONS_LIST, function (answers) {
            this.answersList = answers;
            done();
        }.bind(this));
    },

    configuring: function () {
        // TODO: maybe implement
    },

    writing: {
        package: function () {
            this.fs.copyTpl(
                this.templatePath('package.json'),
                this.destinationPath('package.json'),
                this.answersList
            )
        }
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
