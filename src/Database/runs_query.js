var mysql = require('mysql');

exports.result = function(query){
    var con = mysql.createConnection({
        host: "localhost",
        user: "lab",                                    //Account on local system
        password: "password",                           //Password of account on local system
        database: "SCA"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        con.query(query, function(err,rows,fields){
          if (err) throw err;
          if(rows!=undefined)
          {
            for(i=0;i<rows.length;i++)
                console.log(rows[i]);
          }
          else
          {
            console.log("Query executed");
          }
        });
      
        con.end(function(err){
            if(err) throw err;
            console.log("Connection terminated");
          });
      });

}