import SQLite from 'db.sqlite3'; 

export const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase("database.db"),
};