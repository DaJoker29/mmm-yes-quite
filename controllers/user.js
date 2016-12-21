const person = require('../models').PERSON;

function fetchUser(req, res) {
  person.findOne({ _id: req.user._id }, (err, doc) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    } else if (null === doc) {
      console.log('No document found');
      return res.sendStatus(404);
    }
    return res.json(doc);
  });
}

function changeName(req, res) {
  if (req.user && req.body.displayName) {
    const { _id } = req.user;
    const { displayName } = req.body;
    const options = { new: true, upsert: true };
    person.findByIdAndUpdate(_id, { displayName }, options, (err, doc) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else if (null === doc) {
        console.log('No document found');
        return res.sendStatus(404);
      }
      return res.json(doc);
    });
  }
  return res.sendStatus(404);
}

module.exports.FETCH_USER = fetchUser;
module.exports.CHANGE_NAME = changeName;
