import { get } from 'mongoose';
import { addNewSmokedDish,
        getSmokedDish,
        updateSmokedDish,
        getSmokedDishWithId,
        deleteSmokedDish
        } from '../controllers/smokerController';

const routes = (app) => {
    app.route('/smokedDish')
        .get((req, res, next) => {
            //middleware
            console.log(`Request object: ${req.hostname}`);
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getSmokedDish)
        //post endpoint, adding an entire new smoked dish
        .post(addNewSmokedDish),

    app.route('/smokedDish/:smokedDishId')
        //get a specific smoked dish
        .get(getSmokedDishWithId)
        //updateing a specific contact
        .put(updateSmokedDish)
        //deleting a specific contact
        .delete(deleteSmokedDish)
}

export default routes;