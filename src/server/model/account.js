import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    password: String,
    myBar: [String],
  },
  {
    timestamps: true,
  },
);

const Account = mongoose.model('Account', accountSchema);
export default Account;
