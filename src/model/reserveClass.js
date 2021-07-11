const con = require('../settings/dbconect');
class Reserve {
    constructor(id_reserve, ci_user, id_auth, id_vaccine, numDose, date, time, place) {
        this.id_reserve = id_reserve;
        this.ci_user = ci_user;
        this.id_auth = id_auth;
        this.id_vaccine = id_vaccine;
        this.numDose = numDose;
        this.date = date;
        this.time = time;
        this.place = place;
    }
    createReserve = () => {
        let sql = `INSERT INTO Shedule (Ci_patients,Id_vaccine,Date_reserve,Dose,place)`
        con.connect((err) => {
            if (err) { throw err; }
            else {
                con.query(sql, (err) => {
                    if (err) throw err;
                    else {
                        console.log('data entered correctly!')
                    }
                })
            }
        })
    }
    readReserve = (id_reserve) => {
        // ...
    }
    cancelReserve = (id_reserve) => {
        //...
    }
    modReserve = (id_reserve) => {
        //...
    }

}
export { Reserve };