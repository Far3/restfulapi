import { get } from 'mongoose';
import { addNewContact, getContacts, getContactWithId } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request object: ${req.hostname}`);
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        .post(addNewContact),

    app.route('/contact/:contactId')
        .get(getContactWithId)
        .put((req, res) =>
            res.send('PUT request successful!'))

        .delete((req, res) =>
            res.send('DELETE request successful!'))
}

export default routes;