import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { ExternaItem } from '../models';

const tableName = 'ExternaData';

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({ name: 'externa-data.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          value TEXT NOT NULL
    );`;
    await db.executeSql(query);
  };

export const getExternaItems = async (db: SQLiteDatabase): Promise<ExternaItem[]> => {
    try {
        const ExternaItems: ExternaItem[] = [];
        const results = await db.executeSql(`SELECT rowid as id,value FROM ${tableName}`);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                ExternaItems.push(result.rows.item(index))
            }
    });
    return ExternaItems;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get ExternaItems !!!');
    }
  };

export const saveExternaItems = async (db: SQLiteDatabase, ExternaItems: ExternaItem[]) => {
    const insertQuery =
        `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
        ExternaItems.map(i => `(${i.id}, '${i.value}')`).join(',');
  
    return db.executeSql(insertQuery);
  };

export const deleteExterna = async (db: SQLiteDatabase, id: number) => {
    const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
    await db.executeSql(deleteQuery);
  };
  
export const deleteTable = async (db: SQLiteDatabase) => {
    const query = `drop table ${tableName}`;
  
    await db.executeSql(query);
};