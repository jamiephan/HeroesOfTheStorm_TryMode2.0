const fs = require("fs");
const xml2js = require('xml2js');

const MainXMLPath = "./(10)trymemode.stormmap/base.stormdata/GameData.xml";
const ModDir = "./(10)trymemode.stormmap/base.stormdata/Mods";
const DataDir = "./(10)trymemode.stormmap/base.stormdata";

// Funny Recursive file function: https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    if (file.toLowerCase().endsWith(".xml")) {
                        results.push(file);
                    } else {
                        console.log("WARNING: " + file + " is not end with .xml")
                        console.log("")
                    }
                    next();
                }
            });
        })();
    });
};

// Override current XML file for rebuild
fs.writeFile(MainXMLPath, "", function (err) {
    if (err) {
        console.log(err);
    }
})

// Get all XML files under ModDir
walk(ModDir, function (err, results) {
    if (err) throw err;
    if (results.length == 0) return console.log("Cannot find any XML files.")


    // Generate XML file
    var MainObj = {
        Includes: {
            Catalog: []
        }
    };
    for (let i = 0; i < results.length; i++) {
        var filepath = results[i].replace(DataDir + "/", "")
        let pathObj = {
            $: {
                path: filepath
            }
        }
        MainObj.Includes.Catalog.push(pathObj)
    }
    let builder = new xml2js.Builder();
    let xml = builder.buildObject(MainObj);

    // Write to mainXML
    fs.writeFile(MainXMLPath, xml, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Successfully generate XML file: " + MainXMLPath)
        console.log("===================")
        console.log(xml)
    })

});
