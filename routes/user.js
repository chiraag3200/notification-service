const router = require('express').Router();
let User = require('../models/users.models');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {

  const {email} = req.body

  User.findOne({email:email})
  .then(user=>{
    if(user){
      return res.status(400).send({
        message: "User with this email already exists"
      });
    }
  })

  const newUser = new User(req.body);
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
