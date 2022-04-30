const router = require('express').Router();
let User = require('../models/users.models');
const { sendEmail } = require("../utils/email_setup.js");
const redis = require('redis')

const client = redis.createClient()
client.on('connect', function() {
  console.log('Connected!');
});
client.connect();

const sendNotifications = (medium, req) => {

  User.find({is_subscribed: true} , (err, users) => {
      if(err){
        throw Error(err);
      }

      // different mediums can be integrated to send notifications
      var failed_users = [];
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
          // store failed notifications
          failed_users.push(user.email)
        }
      })

      // push failed users emails to redis
      const failed_users_emails = JSON.stringify(failed_users);
      client.set('userlist', failed_users);
  })
}

module.exports = {
  sendNotifications
};
