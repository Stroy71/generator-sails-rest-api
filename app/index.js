var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        this.log(yosay(
            'Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'project-name',
            message: 'Type project name',
            default: 'sails-rest-api'
        }, {
            type: 'input',
            name: 'database-name',
            message: 'Type database name',
            default: 'sails-rest-api'
        }, {
            type: 'list',
            name: 'database-adapter',
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
            name: 'private-api',
            message: 'Allow requests to API for anybody?',
            default: false
        }, {
            type: 'confirm',
            name: 'jwt',
            message: 'Do you want to use JSON Web Token strategy?',
            default: true
        }, {
            type: 'checkbox',
            name: 'login-methods',
            message: "Choose user's login methods",
            choices: [
                'Local',
                'Facebook',
                'Twitter'
            ],
            default: [
                'Local'
            ]
        }];

        this.prompt(prompts, function (answers) {
            this.log(answers);
            done();
        }.bind(this));
    },

    configuring: function () {
        this.log('configuring');
    },

    writing: function () {
        this.log('writing');
    },

    conflicts: function () {
        this.log('conflicts');
    },

    install: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },

    end: function () {
        this.log('end');
    }
});
