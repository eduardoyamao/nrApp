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
        { name: 'viacirculacaoobs', type: 'string' },
        { name: 'selelctedescadaobs', type: 'string' },
        { name: 'selecteddpioobs', type: 'string' },
        { name: 'selectedpdcobs', type: 'string' },
    	{ name: 'selectedfundacaoobs', type: 'string' },
        { name: 'selectedSustfixobs', type: 'string' },
        { name: 'selectedValueseobs', type: 'string' },
        { name: 'selectedValuejdiobs', type: 'sting' },
        { name: 'selectedValueidsobs', type: 'string' },
        { name: 'selectedValueidpobs', type: 'string' },
        { name: 'selectedValuepobs', type: 'string' },
        { name: 'selectedValuepurobs', type: 'string' },
    	{ name: 'selectedValuemdnobs', type: 'string' },
        { name: 'selectedValueatobs', type: 'string' },
        { name: 'selectedValuecfvobs', type: 'string' },
        { name: 'selectedValuetubobs', type: 'sting' },
        { name: 'selectedValuecompobs', type: 'string' },
        { name: 'selectedValuedcobs', type: 'string' },
      ]
    }),
  ]
})