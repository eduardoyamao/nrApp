// model/schema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'externa',
      columns: [
        { name: 'viacirculacao', type: 'string' },
        { name: 'selelctedescada', type: 'string' },
        { name: 'selecteddpio', type: 'string' },
        { name: 'selectedpdc', type: 'string' },
    	{ name: 'selectedfundacao', type: 'string' },
        { name: 'selectedSustfix', type: 'string' },
        { name: 'selectedValuese', type: 'string' },
        { name: 'selectedValuejdi', type: 'sting' },
        { name: 'selectedValueids', type: 'string' },
        { name: 'selectedValueidp', type: 'string' },
        { name: 'selectedValuep', type: 'string' },
        { name: 'selectedValuepur', type: 'string' },
    	{ name: 'selectedValuemdn', type: 'string' },
        { name: 'selectedValueat', type: 'string' },
        { name: 'selectedValuecfv', type: 'string' },
        { name: 'selectedValuetub', type: 'sting' },
        { name: 'selectedValuecomp', type: 'string' },
        { name: 'selectedValuedc', type: 'string' }
      ]
    }),
    tableSchema({
      name: 'comments',
      columns: [
        { name: 'body', type: 'string' },
        { name: 'post_id', type: 'string', isIndexed: true },
      ]
    }),
  ]
})