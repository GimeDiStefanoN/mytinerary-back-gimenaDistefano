import { Schema, model, Types } from 'mongoose';

const collection= 'itineraries';

const schema = new Schema({
    title: {type: String, required: true},
    image: {type: String},
    price:{type: Number, min: 1, max: 5, required: true},
    duration: {type: Number, required: true},
    hashtags: [String],
    likes: {type: Number, default: 0},
    user: {type:Types.ObjectId, ref: 'users'},
   
    comments: [{
        name: { type: String},
        photo: { type: String},
        comment: { type: String}
    }],
    activities: {type:Types.ObjectId, ref: 'activities'},
    city: {type:Types.ObjectId, ref: 'cities', required: true}
},
{
    timestamps: true
});

const Itinerary = model(collection, schema);
export default Itinerary;