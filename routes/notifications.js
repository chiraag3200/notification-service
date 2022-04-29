const router = require('express').Router();
let User = require('../models/users.models');
const { sendEmail } = require("../utils/send_email.js");


// route to send notifications using different mediums ( can be used for ad hoc as well as scheduled notofications )
router.route('/send').post((req, res) => {

  var meduim = req.headers['meduim'];
  User.find({} , (err, users) => {
      if(err){
        res.status(400).json('Error: ' + err);
      }

      // different mediums can be integrated here
      users.map(user => {
        try {

          // email notifications
          if (meduim === 'email'){
            sendEmail(user.email, req.body.subject, req.body.body);
          }
          if (meduim === 'sms'){
            // integrate send SMS function
          }
          if (meduim === 'slack'){
            // integrate send slack message function
          }
          return res.status(200).send({
            message: `${meduim} sent successfully`   
          });
        }
        catch (err){
          // #TODO   handle if not sent to user
          res.status(400).json('Error: ' + err)
        }
      })
  })
});

module.exports = router;
