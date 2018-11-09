import {EventComponentType} from './eventComponentType';

export class EventComponentModel {
  _id: string;
  label: string;
  type: EventComponentType;
  width: number;
  order: number;
  mandatory: boolean;
  message: string;
  defaut_text: string;
  help: string;
  values: string[];
  value: string;
  constructor() {
    this.mandatory = false;
  }

}
