import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SmokerSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a dish name'
    },
    temp: {
        type: String,
        required: 'Enter a cooking temp'
    },
    time: {
        type: Number,
        required: 'Enter a cooking time in minutes'
    },
    meatType: {
        type: String
    },
    chipType: {
        type: String
    },
    seasoningUsed: {
        type: String
    },
    parings: {
        type: Array
    },
    createdDate: {
        type: Date,
        default: Date.Now
    }
})