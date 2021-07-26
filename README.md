# restfulapi
Building a restful API to store my smoker recipe's that I come accross.

TODO
- Deploy onto microsoft azure. Progress: Partially done at https://smoker-recipes.azurewebsites.net/.


## Notes
RESTful api the short notes.
- Way to transact with http prootocol with the backend.
- Using get, post, put delete calls to the back end.
- Interacting with endpoints created on the backend.

Get: gets the data
Post: Adds new data
Put: updates data
Delete: deletes data


Node: 

Express: 

Babel: Lets us use the latest and greatest javascript language. In order to compile the latest javascript version for the browser to understand it.

Postman: Allows us to get data, post items, delete.

npm i --save-dev: Allows you to install dev dependencies

nodemon: Helpful utility that automatically restarts server. Lets you know if their are any errors quickly.
Need a route to define endpoints in an application.

middleware: Functions that have access to request and can make changes to the request, call other functions, manipulate the data etc.
Can be very powerful and even bring in a 3rd party library. Simple example req.originalUrl, req.hostname.

MongoDB: Database with lots of collections. Within the collections are documents or objects and within those documents is data. Data looks like a JSON object with key value pair or arrays of items.
DB has contacts, which are in a collection and each contact is a document.

