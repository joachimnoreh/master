export class Type {
  static id: number = 1;
  _id: string;
  name: string;
  __v: number;

  constructor(name: string) {
    this.name = name;
    this._id = '' + Type.id;
    Type.id++;
  }

}
