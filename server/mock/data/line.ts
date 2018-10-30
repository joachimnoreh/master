import {COMPOSANTS} from './composant';
import {Line} from '../../../src/app/evenement/models/line';

export const LINES: Line[] = [
  {
    _id: '1',
    name: 'line1',
    input: false,
    elements: []
    //__v:number;
  },
  {
    _id: '2',
    name: '',
    input: true,
    elements: COMPOSANTS
    //__v:number;
  }

];
