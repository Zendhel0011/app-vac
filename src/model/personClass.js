const pool = require('../database/dbconection');
class Persona {
    constructor(ci, fname, lname, gender, bdate) {
        this.ci = ci;
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
        this.bdate = bdate;
    }
    savePerson = async () => {
        const sql = `INSERT INTO Person (Ci, Fname, Lname, Gender, Bdate) VALUES (?,?,?,?,?)`;
        await pool.query(sql, [this.ci, this.fname, this.lname, this.gender, this.bdate], (err, result) => {
            if (err) throw err;
            console.log(result)
        });
    }
}
class User extends Persona {
    constructor(ci, fname, lname, gender, bdate, usAddress, phone) {
        super(ci, fname, lname, gender, bdate)
        this.usAddress = usAddress;
        this.phone = phone;
    }
    saveUser = async () => {
        this.savePerson();
        const sql1 = `INSERT INTO Patients (Ci_patients, Address) VALUES (?,?)`
        console.log([this.ci, this.usAddress]);
        await pool.query(sql1, [this.ci, this.usAddress], (err, result) => {
            if (err) throw err;
            console.log(result)
        });
    }
}
class Doctor extends Persona {
    constructor(ci, name, gender, bdate, idDoctor, typeDoctor) {
        super(ci, name, gender, bdate)
        this.idDoctor = idDoctor;
        this.typeDoctor = typeDoctor;
    }
}
module.exports = { User, Doctor };
