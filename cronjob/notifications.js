const cron = require('node-cron');
const { sendNotifications } = require("../utils/send_notifications.js");


// choose the medium to send notifications
var medium = 'email'
var data = {
  "subject": "Help us get better",
  "body": "Please leave a rating, your feedback is valuable."
}

// cronjob to send notifications via a given medium daily at 10pm
module.exports = () => {  
    cron.schedule('00 00 22 * * *', () => {
        try{
          sendNotifications(medium, data)
          return res.status(200).send({
            message: `${meduim} sent successfully`   
          });
        }
        catch(err){
          res.status(400).json('Error: ' + err)
        }
    });
}
