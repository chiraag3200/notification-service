const router = require('express').Router();
let User = require('../models/users.models');
const { sendEmail } = require("../utils/email_setup.js");

const sendNotifications = (medium, req) => {
  console.log(medium)
  console.log(req.body)

  User.find({} , (err, users) => {
      if(err){
        throw Error(err);
      }

      // different mediums can be integrated here
      users.map(user => {
        try {

          // email notifications
          if (medium === 'email'){
            sendEmail(user.email, req.subject, req.body);
          }
          if (medium === 'sms'){
            // integrate send SMS function
          }
          if (medium === 'slack'){
            // integrate send slack message function
          }
        }
        catch (err){
          throw Error(err);
        }
      })
  })
}

module.exports = {
  sendNotifications
};
