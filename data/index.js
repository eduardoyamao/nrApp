import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import post from './externa'
import schema, { mySchema } from './schema'
import migrations from './migrations'
// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  dbName: 'nrApp',
  schema: mySchema,
})

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
     externa, // ⬅️ You'll add Models to Watermelon here
  ],
  actionsEnabled: true,
})