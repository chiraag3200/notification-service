const router = require('express').Router();
let User = require('../models/users.models');
const { sendEmail } = require("../utils/send_email.js");

router.route('/send').post((req, res) => {


  User.find({} , (err, users) => {
      if(err){
        res.status(400).json('Error: ' + err);
      }

      users.map(user => {
        try {
          sendEmail(user.email, req.body.subject, req.body.body);
          return res.status(200).send({
            message: "Email sent successfully"
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
