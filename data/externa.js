// model/externa.js
import {Model} from '@nozbe/watermelondb';
import {field, action, readonly, date} from '@nozbe/watermelondb/decorators';

export default class externa extends Model {
  static table = 'externas';

  @field('viacirculacao_id') viacirculacao;
  @field('selelctedescada_id') selelctedescada;
  @field('selecteddpio_id') selecteddpio;
  @field('selectedpdc_id') selectedpdc;
  @field('selectedfundacao_id') selectedfundacao;
  @field('selectedSustfix_id') selectedSustfix;
  @field('selectedValuese_id') selectedValuese;
  @field('selectedValuejdi_id') selectedValuejdi;
  @field('selectedValueids_id') selectedValueids;
  @field('selectedValueidp_id') selectedValueidp;
  @field('selectedValuep_id') selectedValuep;
  @field('selectedValuepur_id') selectedValuepur;
  @field('selectedValuemdn_id') selectedValuemdn;
  @field('selectedValueat_id') selectedValueat;
  @field('selectedValuecfv_id') selectedValuecfv;
  @field('selectedValuetub_id') selectedValuetub;
  @field('selectedValuecomp_id') selectedValuecomp;
  @field('selectedValuedc_id') selectedValuedc; 
  @field('viacirculacaoobs_id') viacirculacaoobs;
  @field('selelctedescadaobs_id') selelctedescadaobs;
  @field('selecteddpioobs_id') selecteddpioobs;
  @field('selectedpdcobs_id') selectedpdcobs;
  @field('selectedfundacaoobs_id') selectedfundacaoobs;
  @field('selectedSustfixobs_id') selectedSustfixobs;
  @field('selectedValueseobs_id') selectedValueseobs;
  @field('selectedValuejdiobs_id') selectedValuejdiobs;
  @field('selectedValueidsobs_id') selectedValueidsobs;
  @field('selectedValueidpobs_id') selectedValueidpobs;
  @field('selectedValuepobs_id') selectedValuepobs;
  @field('selectedValuepurobs_id') selectedValuepur;
  @field('selectedValuemdnobs_id') selectedValuemdnobs;
  @field('selectedValueatobs_id') selectedValueatobs;
  @field('selectedValuecfvobs_id') selectedValuecfvobs;
  @field('selectedValuetubobs_id') selectedValuetubobs;
  @field('selectedValuecompobs_id') selectedValuecompobs;
  @field('selectedValuedcobs_id') selectedValuedcobs; 
  @readonly @date('created_at') createdAt;

  @action async delete() {
    await super.markAsDeleted();
  };

} 