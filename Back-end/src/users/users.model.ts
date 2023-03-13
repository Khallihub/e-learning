import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  Name: { type: String },
  email: { type: String, unique: true },
  hash: { type: String },
  hashedRt: { type: String },
  enrolledCourses: { type: [String] },
  role: { type: String },
});

export class USER {
  constructor(
    public id: string,
    public Name: string,
    public email: string,
    public hash: string,
    public hashedRt: { type: string },
    public enrolledCourses: string[],
    public role: string,
  ) {}
}
