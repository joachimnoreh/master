import {LINES} from './line';
import {site} from './site';
import {Place} from '../../../src/app/places/models/place';
import {Line} from '../../../src/app/evenement/models/line';

export let EVENTS: { _id: string; name: string; lines: Line[]; site: { _id: string; name: string; placeRoot: Place; __v: number } }[] = [
  {
    _id: '1',
    name: 'sample',
    lines: LINES,
    //__v:number
    site: site
  }

];


