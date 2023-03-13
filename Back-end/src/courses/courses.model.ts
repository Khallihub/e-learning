import * as mongoose from 'mongoose';


// validation error when adding required: true ?? why
export const courseSchema = new mongoose.Schema({
  Name: {type: String, unique: true},
  desciption: {type: String},
  texta: {type: String},
  textb: {type: String},
  videoLink: {type: String},
  audioLink: {type: String},
  extra: {type: [Object]},
});

export class COURSE {
  constructor(
    public id: string,
    public Name: string,
    public desciption: string,
    public texta: string,
    public textb: string,
    public videoLink: string,
    public audioLink: string,
    public extra: [object],
  ) {}
}
