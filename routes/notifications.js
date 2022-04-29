const router = require('express').Router();
let User = require('../models/users.models');
const { sendEmail } = require("../utils/email_setup.js");
const { sendNotifications } = require("../utils/send_notifications.js");


// route to send ad hoc notifications using different mediums
router.route('/send').post((req, res) => {

  var meduim = req.headers['meduim'];

  sendNotifications(medium, data)
    .then(() => res.status(200).send({message: `${meduim} sent successfully`}));
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;
