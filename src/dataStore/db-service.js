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
        id INTEGER PRIMARY KEY,
        viacirculacao TEXT, 
        selectedescada TEXT, 
        selectedpio TEXT, 
        selectedpdc TEXT, 
        selectedfundacao TEXT, 
        selectedSustfix TEXT, 
        viacirculacaoobs TEXT, 
        selectedescadaobs TEXT, 
        selectedpioobs TEXT, 
        selectedpdcobs TEXT, 
        selectedfundacaoobs TEXT, 
        selectedSustfixobs TEXT, 
        selectedValuese TEXT, 
        selectedValuecds TEXT, 
        selectedValuejdi TEXT, 
        selectedValueids TEXT, 
        selectedValueidp TEXT, 
        selectedValuep TEXT, 
        selectedValueseobs TEXT, 
        selectedValuecdsobs TEXT, 
        selectedValuejdiobs TEXT, 
        selectedValueidsobs TEXT, 
        selectedValueidpobs TEXT, 
        selectedValuepobs TEXT, 
        selectedValuepur TEXT, 
        selectedValuemdn TEXT, 
        selectedValueat TEXT, 
        selectedValuecfv TEXT, 
        selectedValuetub TEXT, 
        selectedValuecomp TEXT, 
        selectedValuepurobs TEXT, 
        selectedValuemdnobs TEXT, 
        selectedValueatobs TEXT, 
        selectedValuecfvobs TEXT, 
        selectedValuecompobs TEXT, 
        selectedValuedc TEXT, 
        selectedValuedcobs TEXT

    );`;
    await db.executeSql(query);
};

export const getExternaItems = async (db: SQLiteDatabase): Promise<ExternaItem[]> => {
    try {
        const ExternaItems: ExternaItem[] = [];
        const results = await db.executeSql(`SELECT rowid as id, viacirculacao, selectedescada, selectedpio, selectedpdc, selectedfundacao, selectedSustfix, viacirculacaoobs, selectedescadaobs, selectedpioobs, selectedpdcobs, selectedfundacaoobs, selectedSustfixobs, selectedValuese, selectedValuecds, selectedValuejdi, selectedValueids, selectedValueidp, selectedValuep, selectedValueseobs, selectedValuecdsobs, selectedValuejdiobs, selectedValueidsobs, selectedValueidpobs, selectedValuepobs, selectedValuepur, selectedValuemdn, selectedValueat, selectedValuecfv, selectedValuetub, selectedValuecomp, selectedValuepurobs, selectedValuemdnobs, selectedValueatobs, selectedValuecfvobs, selectedValuecompobs, selectedValuedc, selectedValuedcobs FROM ${tableName}`);
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
        `INSERT OR REPLACE INTO ${tableName}(rowid, viacirculacao, selectedescada, selectedpio, selectedpdc, selectedfundacao, selectedSustfix, viacirculacaoobs, selectedescadaobs, selectedpioobs, selectedpdcobs, selectedfundacaoobs, selectedSustfixobs, selectedValuese, selectedValuecds, selectedValuejdi, selectedValueids, selectedValueidp, selectedValuep, selectedValueseobs, selectedValuecdsobs, selectedValuejdiobs, selectedValueidsobs, selectedValueidpobs, selectedValuepobs, selectedValuepur, selectedValuemdn, selectedValueat, selectedValuecfv, selectedValuetub, selectedValuecomp, selectedValuepurobs, selectedValuemdnobs, selectedValueatobs, selectedValuecfvobs, selectedValuecompobs, selectedValuedc, selectedValuedcobs) values` +
        ExternaItems.map(i => `(${i.id}, '${i.viacirculacao}', '${i.selectedescada}', '${i.selectedpio}', '${i.selectedpdc}', '${i.selectedfundacao}', '${i.selectedSustfix}', '${i.viacirculacaoobs}', '${i.selectedescadaobs}', '${i.selectedpioobs}', '${i.selectedpdcobs}', '${i.selectedfundacaoobs}', '${i.selectedSustfixobs}', '${i.selectedValuese}', '${i.selectedValuecds}', '${i.selectedValuejdi}', '${i.selectedValueids}', '${i.selectedValueidp}', '${i.selectedValuep}', '${i.selectedValueseobs}', '${i.selectedValuecdsobs}', '${i.selectedValuejdiobs}', '${i.selectedValueidsobs}', '${i.selectedValueidpobs}', '${i.selectedValuepobs}', '${i.selectedValuepur}', '${i.selectedValuemdn}', '${i.selectedValueat}', '${i.selectedValuecfv}', '${i.selectedValuetub}', '${i.selectedValuecomp}', '${i.selectedValuepurobs}', '${i.selectedValuemdnobs}', '${i.selectedValueatobs}', '${i.selectedValuecfvobs}', '${i.selectedValuecompobs}', '${i.selectedValuedc}', '${i.selectedValuedcobs}'`).join(',');
  
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