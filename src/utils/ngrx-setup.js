const os = require('os');
const shell = require('shelljs');

var name = process.argv[2];

console.log('Building ' + name + 'ngrx files')

shell.exec('ng g module ' + name + ' --routing --flat', function (code, stdout, stderr) {

    shell.exec('ng g en ' + name, function (code, stdout, stderr) {

        shell.exec('ng g r ' + name + ' --group --module ' + name + ' --reducers ../reducers.ts', function (code, stdout, stderr) {

            shell.exec('ng g ef ' + name + ' --module ' + name + ' --group', function (code, stdout, stderr) {

            })
        })

    })

})


