const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory');

db.run('INSERT INTO AUTH_CODE VALUES(?,?)', ['email', 'code'], function(err) {
    if (err) {
        return console.log(err.message);
      }

        // get the last insert id
    console.log(`A row has been inserted with rowid ${this.email}`);

});

 // close the database connection
 db.close();