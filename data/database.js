import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema'; 
import externa from './externa';

const adapter = new SQLiteAdapter({
  dbName: 'externa',
  schema,
});

const database = new Database({
  adapter,
  modelClasses: externa,
  actionsEnabled: true,
});

export default database;