import { Schema, model, Types } from 'mongoose';

const collection= 'itineraries';

const schema = new Schema({
    title: {type: String, required: true},
    image: {type: String},
    duration: {type: Number, required: true},
    price:{type: String},
    user: {type:Types.ObjectId, ref: 'users'}
},
{
    timestamps: true
});

const User = model(collection, schema);
export default User;