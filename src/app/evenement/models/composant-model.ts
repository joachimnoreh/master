export class ComposantModel {
  static id: number = 1;
  _id: string;
  label: string;
  type: string;
  width: number;
  // position: number;
  mandatory: boolean;
  message: string;
  defaut_text: string;
  help: string;
  values: string[];
  value: string;  //__v:number;

  constructor() {
    this._id = '' + ComposantModel.id;
    ComposantModel.id++;
  }

}
