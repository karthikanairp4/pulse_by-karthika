let blogs = []; // Temporary in-memory storage

// Home Page
exports.getHomePage = (req, res) => {
  const categories = [
    { name: 'All', link: '/' },
    { name: 'Health', link: '/category/health' },
    { name: 'Design', link: '/category/design' },
    { name: 'Technology', link: '/category/tech' },
    { name: 'Climate', link: '/category/climate' },
    { name: 'Sports', link: '/category/sports' },
  ];
  res.render('home', { categories });
};

// Write Page
exports.getWritePage = (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect('/user/signin');
  }
  res.render('write');
};

// Add a Blog
exports.postBlog = (req, res) => {
  const { title, content } = req.body;
  const author = req.session.user ? req.session.user.email : 'Guest';

  const newBlog = { title, content, author, date: new Date() };
  blogs.push(newBlog);
  res.redirect('/blogs/new');
};

// View New Blogs
exports.getNewBlogsPage = (req, res) => {
  res.render('new_blogs', { blogs });
};
