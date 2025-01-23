
exports.getSignInPage = (req, res) => {
    res.render('signin', { error: null });
  };

  exports.getSignUpPage = (req, res) => {
    res.render('signup', { error: null });
  };
  
  exports.postSignIn = (req, res) => {
    const { email, password } = req.body;
  
    const hardcodedEmail = 'karthika@gmail.com';
    const hardcodedPassword = 'karthika';
  
    if (email === hardcodedEmail && password === hardcodedPassword) {
      req.session.isLoggedIn = true;
      req.session.user = { email };
      return res.redirect('/');
    } else {
      res.status(401).render('signin', { error: 'Invalid credentials' });
    }
  };

  exports.getSignUp = (req, res) => {
    res.render('signup', { error: null }); // Render the signup page
};

exports.postSignUp = (req, res) => {
    const { email, password } = req.body;

    // Add user registration logic here (e.g., save user to a database)
    // For now, we simulate user registration
    if (!email || !password) {
        return res.status(400).render('signup', { error: 'All fields are required.' });
    }

    // Simulate successful signup and redirect to the sign-in page
    res.redirect('/user/signin');
};

  
  // Logout
  exports.logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.redirect('/');
      }
      res.redirect('/user/signin');
    });
  };
  