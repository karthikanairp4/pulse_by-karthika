exports.renderCategory = (req, res) => {
    const categories = {
      health: {
        sectionTitle: 'Health',
        articles: [
            {
                image: '/img/health1.jpg',
                alt: 'Surfer on wave',
                title: 'Train Like a Pro Athlete',
                description: 'Learn how to train like professional athletes with these tips.',
                date: '9/3/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/face2.jpg',
                alt: 'Modern gym',
                title: 'The Evolution of Sports',
                description: 'Explore how sports have evolved over the years.',
                date: '5/31/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/health2.jpg',
                alt: 'Tennis racket',
                title: 'Latest Sports News',
                description: 'Catch up on the latest happenings in the sports world.',
                date: '12/15/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/fruit.jpg',
                alt: 'Person exercising',
                title: 'Fitness and Training Tips',
                description: 'Get fit with these effective training tips.',
                date: '11/10/2023',
                tag: 'SPORTS',
              },
        ],
      },
      design: {
        sectionTitle: 'Design',
        articles: [
            {
                image: '/img/girl.jpg',
                alt: 'Surfer on wave',
                title: 'Train Like a Pro Athlete',
                description: 'Learn how to train like professional athletes with these tips.',
                date: '9/3/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/d1.jpg',
                alt: 'Modern gym',
                title: 'The Evolution of Sports',
                description: 'Explore how sports have evolved over the years.',
                date: '5/31/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/d2.jpg',
                alt: 'Tennis racket',
                title: 'Latest Sports News',
                description: 'Catch up on the latest happenings in the sports world.',
                date: '12/15/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/d3.jpg',
                alt: 'Person exercising',
                title: 'Fitness and Training Tips',
                description: 'Get fit with these effective training tips.',
                date: '11/10/2023',
                tag: 'SPORTS',
              },
        ],
      },
      tech: {
        sectionTitle: 'Technology',
        articles: [
            {
                image: '/img/face.jpg',
                alt: 'Surfer on wave',
                title: 'Train Like a Pro Athlete',
                description: 'Learn how to train like professional athletes with these tips.',
                date: '9/3/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/t1.jpg',
                alt: 'Modern gym',
                title: 'The Evolution of Sports',
                description: 'Explore how sports have evolved over the years.',
                date: '5/31/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/t2.jpg',
                alt: 'Tennis racket',
                title: 'Latest Sports News',
                description: 'Catch up on the latest happenings in the sports world.',
                date: '12/15/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/t3.jpg',
                alt: 'Person exercising',
                title: 'Fitness and Training Tips',
                description: 'Get fit with these effective training tips.',
                date: '11/10/2023',
                tag: 'SPORTS',
              },
        ],
      },
      climate: {
        sectionTitle: 'Climate',
        articles: [
            {
                image: '/img/c1.jpg',
                alt: 'Surfer on wave',
                title: 'Train Like a Pro Athlete',
                description: 'Learn how to train like professional athletes with these tips.',
                date: '9/3/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/c2.jpg',
                alt: 'Modern gym',
                title: 'The Evolution of Sports',
                description: 'Explore how sports have evolved over the years.',
                date: '5/31/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/c3.jpg',
                alt: 'Tennis racket',
                title: 'Latest Sports News',
                description: 'Catch up on the latest happenings in the sports world.',
                date: '12/15/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/c4.jpg',
                alt: 'Person exercising',
                title: 'Fitness and Training Tips',
                description: 'Get fit with these effective training tips.',
                date: '11/10/2023',
                tag: 'SPORTS',
              },
        ],
      },
      sports: {
        sectionTitle: 'Sports',
        articles: [
            {
                image: '/img/gym.jpg',
                alt: 'Surfer on wave',
                title: 'Train Like a Pro Athlete',
                description: 'Learn how to train like professional athletes with these tips.',
                date: '9/3/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/water.jpg',
                alt: 'Modern gym',
                title: 'The Evolution of Sports',
                description: 'Explore how sports have evolved over the years.',
                date: '5/31/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/ball.jpg',
                alt: 'Tennis racket',
                title: 'Latest Sports News',
                description: 'Catch up on the latest happenings in the sports world.',
                date: '12/15/2022',
                tag: 'SPORTS',
              },
              {
                image: '/img/basket.jpg',
                alt: 'Person exercising',
                title: 'Fitness and Training Tips',
                description: 'Get fit with these effective training tips.',
                date: '11/10/2023',
                tag: 'SPORTS',
              },
        ],
      },
    };
  
    // Get the category from the request URL
    const category = req.path.split('/')[1];
  
    if (categories[category]) {
      const { sectionTitle, articles } = categories[category];
      res.render('health', { sectionTitle, articles });
    } else {
      res.status(404).send('Category not found');
    }
  };
  
  exports.getDetails = (req, res) => {
    const article = {
      image: '/img/gym.jpg'
    };
    const sidebarContent = {
        latest: [
          {
            category: 'TECHNOLOGY',
            title: 'Transform Our Connected World',
          },
          {
            category: 'SPORTS',
            title: 'Train Like a Pro Athlete',
          },
        ],
        featured: [
          {
            image: '/img/face.jpg',
            title: 'The Future of Technology',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            image: '/img/face2.jpg',
            title: 'The Evolution of Sports',
            description: 'Explore how sports have evolved over the years.',
          },
        ],
      };
    res.render('details', { articles: [article],sidebarContent});
  };
