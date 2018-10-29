import {COMPOSANT_MODELS} from './composant-model'
import {LineModel} from '../../../src/app/evenement/models/line-model';



export const LINE_MODELS : LineModel[] =[
  { _id: '1',
  name: 'line1',
  input:false,
  elements: [],
  ordre:0
  //__v:number;
 },
  { 
  _id: '2',
  name: '',
  input:true,
  elements: COMPOSANT_MODELS,
  ordre:1
  //__v:number;
 }
 
]
