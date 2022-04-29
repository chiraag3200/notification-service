const router = require('express').Router();
let User = require('../models/users.models');
const { sendEmail } = require("../utils/email_setup.js");

const sendNotifications = (medium, req) => {

  User.find({is_subscribed: true} , (err, users) => {
      if(err){
        throw Error(err);
      }

      // different mediums can be integrated to send notifications
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
          // #TODO handle failed notifications
          throw Error(err);
        }
      })
  })
}

module.exports = {
  sendNotifications
};
