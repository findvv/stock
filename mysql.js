let SMysql = require('sm-mysql');

let db = {  
  "host"     : "121.42.166.253",  
  "user"     : "root",  
  "password" : "ZZX$137623",  
  "port"     : "3306"
}


function createSql(name) {
    return new Promise((resolve,reject)=>{
        let sMysql = new SMysql(db);

        sMysql.createSql(name).end((data)=>{
            console.log(data[0]);
            resolve(name);
        });
    })
}
function controlTable(sqlName, tableName) {
    return new Promise((resolve,reject)=>{
        let sMysql = new SMysql(db,sqlName);

        sMysql
            .createTable(tableName,{
                'date' : {
                    type: 'VARCHAR',
                    length: 30,
                    isNull: false
                },
                'name' : {
                    type: 'VARCHAR',
                    length: 30,
                    isNull: false
                },
                'open' : {
                    type: 'VARCHAR',
                    length: 30,
                    isNull: false
                },
                'close' : {
                    type: 'VARCHAR',
                    length: 30,
                    isNull: false
                },
                'huan' : {
                    type: 'VARCHAR',
                    length: 30,
                    isNull: false
                },
                'money' : {
                    type: 'VARCHAR',
                    length: 30,
                    isNull: false
                },
                'win' : {
                    type: 'VARCHAR',
                    length: 30,
                    isNull: false
                }
            })
            .end((data)=>{
                for(let value of data) {
                    console.log(value);
                }
                resolve();
            });
    })
}

async function play() {
    let sql = await createSql('stock');
    await controlTable(sql,'huan');
}

play();
