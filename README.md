# Project Goal

To build a Notification Service that can be integrated with multiple 3rd party services like, Email, SMS, Slack, etc. to send notifications. The services have an inventory of users with the necessary information to send notifications to a subscribed user(eg. phone number, email, etc.).
The service can send scheduled notifications every day at a fixed time using any medium to the list of users subscribed. It can also send ad hoc notifications whenever required. It also retries sending notifications automatically if notifications failed to be sent to some users.


# Tasks Completed

- Cronjob to send notifications to all the subscribed users using any medium.
- API to send ad hoc notifications to subscribed users using any medium.
- Cronjob to send notifications to all the failed users.
  
 # How To Run the Project
 
Run `nodemon server` for dev server.

Navigate to `http://localhost:8000/`.
