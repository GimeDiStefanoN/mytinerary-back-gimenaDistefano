import { Schema, model, Types } from 'mongoose';

const collection= 'cities';

const schema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    subregion: { type: String, required: true },
    png: { type: String, required: true },
    alt: { type: String, required: true },
    description: { type: String, required: true },
    currencies: { type: String, required: true },
    languages: { type: String, required: true }
},{
    timestamps: true
})

const City = model(collection, schema)
export default  City;