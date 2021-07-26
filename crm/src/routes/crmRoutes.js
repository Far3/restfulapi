import { get } from 'mongoose';
import { addNewContact,
        getContacts,
        getContactWithId,
        updateContact,
        deleteContact
        } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request object: ${req.hostname}`);
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        //post endpoint, adding an entire new contact
        .post(addNewContact),

    app.route('/contact/:contactId')
        //get a specific contact
        .get(getContactWithId)
        //updateing a specific contact
        .put(updateContact)
        //deleting a specific contact
        .delete(deleteContact)
}

export default routes;