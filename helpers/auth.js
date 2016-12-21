const person = require('../models').PERSON;

// Express middleware to ensure user authentication
function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

// Handle OAuth Provider Authentication
function handleOAuth(req, accessToken, refreshToken, profile, done) {
  const { provider } = profile;

  const props = {
    lastUpdated: Date.now(),
    accessToken,
  };

  const options = {
    new: true,
    upsert: true,
  };

  if (!req.user) {
    // Not logged in.
    const { displayName, id } = profile;

    const query = {};
    query[`accounts.${provider}.id`] = id;

    // Find or Create
    person.findOne(query, (err, doc) => {
      if (err) { done(err, doc); }

      if (doc) {
        // Update doc and return, if found
        const update = {
          lastLogin: Date.now(),
          accounts: doc.accounts,
        };
        update.accounts[provider] = Object.assign(profile, props);

        person.findByIdAndUpdate(doc.id, update, options, done);
      } else {
        // Create new doc, if not found
        const data = {
          displayName,
          accounts: {},
        };
        data.accounts[provider] = Object.assign(profile, props);

        person.create(data, done);
      }
    });
  } else {
    // Logged in
    const update = {
      accounts: req.user.accounts,
    };
    update.accounts[provider] = Object.assign(profile, props);

    person.findByIdAndUpdate(req.user.id, update, options, done);
  }
}

// Serialize and De-Serialize Users
function serializeUser(user, done) {
  done(null, user._id);
}

function deserializeUser(id, done) {
  person.findById(id, (err, user) => {
    done(err, user);
  });
}

module.exports.HANDLE_OAUTH = handleOAuth;
module.exports.ENSURE_AUTH = ensureAuth;
module.exports.SERIALIZE_USER = serializeUser;
module.exports.DESERIALIZE_USER = deserializeUser;