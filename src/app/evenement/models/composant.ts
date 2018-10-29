import {Type} from './type';

export class Composant {

  _id: string;
  label: string;
  type: Type;
  width: number;
  height: number;
  position: number;
  mandatory: boolean;
  message: string;
  defaut_text: string;
  help: string;
  values: string[];
  value: string;  //__v:number;

  constructor() {
  }

}
