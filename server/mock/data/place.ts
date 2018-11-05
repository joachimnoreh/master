import {Place} from '../../../src/app/places/models/place';

const initPlace = new Place('BAT A', null);
let listExp: any = {};
listExp[initPlace._id] = initPlace;
export let listPlace = listExp;
export let rootPlace = initPlace;
