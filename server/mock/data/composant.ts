import {TYPES} from './types';
import {Composant} from '../../../src/app/evenement/models/composant';


export const COMPOSANTS: Composant[] = [
  {
    _id: '1',
    label: 'label1',
    type: TYPES[0],
    width: 3,
    height: 0,
    position: 1,
    mandatory: true,
    message: 'please select a value',
    defaut_text: 'blabla',
    help: 'complete moi tout ca',
    values: ['lol', 'tralala', 'stop'],
    value: ''
    //__v:number;
  },
  {
    _id: '1',
    label: 'label2',
    type: TYPES[1],
    width: 3,
    height: 0,
    position: 2,
    mandatory: true,
    message: 'please select a value',
    defaut_text: 'blabla',
    help: 'complete moi tout ca',
    values: [],
    value: ''
    //__v:number;
  },
  {
    _id: '1',
    label: 'label3',
    type: TYPES[4],
    width: 3,
    height: 0,
    position: 3,
    mandatory: true,
    message: 'please select a value',
    defaut_text: 'blabla',
    help: 'complete moi tout ca',
    values: [],
    value: ''
    //__v:number;
  }
];
