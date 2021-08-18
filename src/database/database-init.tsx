import { DatabaseConnection } from './database-connection'

var db = null
export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
    );
        this.InitDb()
    }
    private InitDb() {
        var sql = [
            `DROP TABLE IF EXISTS Externa;`, 

            `create table if not exists Externa (
            vaso_id integer primary key autoincrement,
            numerovaso text,
            selectedescada text,
            selectedpio text,
            selectedpdc text,
            selectedfundacao text,
            selectedsustfix text,
            viacirculacaoobs text,
            selectedescadaobs text,
            selectedpioobs text,
            selectedpdcobs text,
            selectedfundacaoobs text,
            selectedSustfixobs text
            );',
             
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}