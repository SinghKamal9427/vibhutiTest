import mysql from "mysql";

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'temp'
})

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("running")
    }
})

export default con;