var path = require('path'),
    assert = require('yeoman-generator').assert,
    helpers = require('yeoman-generator').test,
    os = require('os');

describe('sails-rest-api:app', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({'skip-install': true})
            .withPrompt({
                someOption: true
            })
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'package.json',
            '.editorconfig',
            '.jshintrc'
        ]);
    });
});
