"use strict";
const program   = require('commander');
const babel     = require('babel-core');
const _         = require('lodash');
const fs        = require('fs');

const dir       = __dirname + '/lib';

/*console.log("DIRNAME", dir);
fs.readdir(dir, (err, files)=>{
    console.log(files, err);

    files.forEach((file, index)=>{
        if(~file.indexOf('.jsx')){

        }
        else if(fs.statSync(dir+'/'+file).isDirectory()){

        }

    });
});*/

class Babelize{
    constructor(){

        program
            .version('0.0.1')
            .option('-i, --input-directory <directory>', 'the relative path to the directory for babelize to iterate through')
            .option('-o, --output-directory <directory>', 'the relative path to the directory for babelize to output files to')
            .parse(process.argv);

        var options = {
            inputDir: program.inputDirectory || null,
            outputDir: program.outputDirectory || null
        };

        //TODO add input flag validation
        //TODO check to see if output dir exists, if not create it.
        this.constructor.parse(options);

    }

    static parse(options){
        const inputDir  = __dirname + '/' + options.inputDir;
        const outputDir = __dirname + '/' + options.outpuDir;

        this.findDirectory(inputDir, (err, files)=>{
            if(err) throw new Error(err);

            files.forEach((file, index)=>{
                if((~file.indexOf('.jsx')) || (~file.indexOf('.js'))){
                    var outputFilename;
                    //transform file and output to new dir.
                    if(~file.indexOf('.jsx')){
                        outputFilename = file.split('.jsx', 1) + '.js';
                    }
                    else{
                        outputFilename = file;
                    }

                    babel.transformFile(options.inputDir + '/' + file, (err, result)=>{
                        if(err) throw new Error(err);

                        return fs.writeFileSync(options.outputDir + '/' + outputFilename, result.code);
                    });
                }
                /*else if(~file.indexOf('.js')){

                }*/
                else if(fs.statSync(inputDir + '/' + file).isDirectory()){
                    var newOptions = _.clone(options, true);
                    newOptions.inputDir += '/' + file;
                    newOptions.outputDir += '/' + file;

                    //TODO: check if dir exists, if not, create it.
                    //copy directory to output section.
                    fs.mkdirSync(newOptions.outputDir);

                    this.parse(newOptions);
                }

            });
        });

    }

    static findDirectory(inputDir, callback){
        fs.readdir(inputDir, (err, files)=>{
            callback(err, files);
        });
    }

};

exports = new Babelize();

