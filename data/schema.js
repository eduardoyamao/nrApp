// model/schema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'externa',
      columns: [
        { name: 'viacirculacao_id', type: 'string' },
        { name: 'selelctedescada_id', type: 'string' },
        { name: 'selecteddpio_id', type: 'string' },
        { name: 'selectedpdc_id', type: 'string' },
    	  { name: 'selectedfundacao_id', type: 'string' },
        { name: 'selectedSustfix_id', type: 'string' },
        { name: 'selectedValuese_id', type: 'string' },
        { name: 'selectedValuejdi_id', type: 'sting' },
        { name: 'selectedValueids_id', type: 'string' },
        { name: 'selectedValueidp_id', type: 'string' },
        { name: 'selectedValuep_id', type: 'string' },
        { name: 'selectedValuepur_id', type: 'string' },
      	{ name: 'selectedValuemdn_id', type: 'string' },
        { name: 'selectedValueat_id', type: 'string' },
        { name: 'selectedValuecfv_id', type: 'string' },
        { name: 'selectedValuetub_id', type: 'sting' },
        { name: 'selectedValuecomp_id', type: 'string' },
        { name: 'selectedValuedc_id', type: 'string' },
        { name: 'viacirculacaoobs_id', type: 'string' },
        { name: 'selelctedescadaobs_id', type: 'string' },
        { name: 'selecteddpioobs_id', type: 'string' },
        { name: 'selectedpdcobs_id', type: 'string' },
      	{ name: 'selectedfundacaoobs_id', type: 'string' },
        { name: 'selectedSustfixobs_id', type: 'string' },
        { name: 'selectedValueseobs_id', type: 'string' },
        { name: 'selectedValuejdiobs_id', type: 'sting' },
        { name: 'selectedValueidsobs_id', type: 'string' },
        { name: 'selectedValueidpobs_id', type: 'string' },
        { name: 'selectedValuepobs_id', type: 'string' },
        { name: 'selectedValuepurobs_id', type: 'string' },
      	{ name: 'selectedValuemdnobs_id', type: 'string' },
        { name: 'selectedValueatobs_id', type: 'string' },
        { name: 'selectedValuecfvobs_id', type: 'string' },
        { name: 'selectedValuetubobs_id', type: 'sting' },
        { name: 'selectedValuecompobs_id', type: 'string' },
        { name: 'selectedValuedcobs_id', type: 'string' },
      ]
    }),
  ]
});