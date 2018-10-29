import { TYPES } from './types';
import { ComposantModel } from '../../../src/app/evenement/models/composant-model';



export const COMPOSANT_MODELS : ComposantModel[] = [
	{
  _id: '0'  ,
  label: 'label1',
  type: TYPES[0].name,
  width: 3,
 // position: 1,
  mandatory :true,
  message : 'please select a value',
  defaut_text : 'blabla',
  help:'complete moi tout ca',
  values:['lol','tralala','stop'],
  value:''
    //__v:number;
},
 {
  _id: '1'  ,
  label: 'label2',
  type: TYPES[1].name,
  width: 3,
 // position: 2,
  mandatory :true,
  message : 'please select a value',
  defaut_text : 'blabla',
  help:'complete moi tout ca',
  values:[],
  value:''
    //__v:number;
},
 {
  _id: '2'  ,
  label: 'label3',
  type: TYPES[4].name,
  width: 3,
 // position: 3,
  mandatory :true,
  message : 'please select a value',
  defaut_text : 'blabla',
  help:'complete moi tout ca',
  values:[],
  value:'true'
    //__v:number;
}
]
