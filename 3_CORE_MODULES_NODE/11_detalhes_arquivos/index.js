const fs = require("fs");

fs.stat("new_archive.txt", (err, stats) => {
    if(err) {
        console.log(err)
        return;
    }

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.ctime);
    console.log(stats.size);
})

