import mongoose from 'mongoose';
import { SmokerSchema } from '../models/smokerModel';

const SmokedDish = mongoose.model('SmokedDish', SmokerSchema);

export const addNewSmokedDish = (req, res) => {
    let newSmokedDish = new SmokedDish(req.body);

    newSmokedDish.save((err, smokedDish) => {
        if (err) {
            res.send(err);
        }
        res.json(smokedDish);
    });
}

export const getSmokedDish = (req, res) => {

    SmokedDish.find({}, (err, smokedDish) => {
        if (err) {
            res.send(err);
        }
        res.json(smokedDish);
    });
}

export const getSmokedDishWithId = (req, res) => {

    SmokedDish.findById(req.params.smokedDishId, (err, smokedDish) => {
        if (err) {
            res.send(err);
        }
        res.json(smokedDish);
    });
}

export const updateSmokedDish = (req, res) => {

    SmokedDish.findOneAndUpdate({ _id: req.params.smokedDishId }, req.body, { new: true, useFindAndModify: false }, (err, smokedDish) => {
        if (err) {
            res.send(err);
        }
        res.json(smokedDish);
    });
}

export const deleteSmokedDish = (req, res) => {

    SmokedDish.remove({ _id: req.params.smokedDishId }, (err, smokedDish) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: `successfully deleted Smoked Dish ${req.params.smokedDishId}`});
    });
}