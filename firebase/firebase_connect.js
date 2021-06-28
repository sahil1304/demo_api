const { response } = require("express");

const firebase=require('firebase');

const app =firebase.initializeApp({
    apikey:"AIzaSyCsSFHxOz_tbHQq9lLhjSxVMWuKir5CXvc",
    authDomain:"test-api-67824.firebaseapp.com",
    databaseURL:"https://test-api-67824.firebaseio.com",
})

module.exports = app;