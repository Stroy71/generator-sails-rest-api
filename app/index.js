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
            name: 'name',
            message: 'Type your project name',
            default: this.appname
        }, {
            type: 'checkbox',
            name: 'authorization',
            message: 'Select auth methods',
            choices: [
                'Facebook',
                'Twitter'
            ],
            default: [
                'Facebook',
                'Twitter'
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
