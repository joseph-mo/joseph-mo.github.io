export const projectData = [
  {
    id: '1',
    projectName: 'awareOfMe',
    roles: 'Researcher • Designer • Developer',
    year: 2022,
    context:
      'Through remote work, I naturally found myself spending more time alone. This allowed me to reflect on different \
      aspects of my life - one of the major ones being personal development.',
    problem: {
      body: "When starting out my personal development journey (self-help phase, self-improvement phase, etc.) initially, \
      I was super excited for what was to come. I had done my research on what successful people did every day, \
      watched a bunch of videos and figured all I had to do was just mimic those behaviors and I'd transform \
      into a better version of myself in no time. Fast-forward a year and a half and I'd like to believe I've made \
      several improvements, but at the same time wish I could’ve done things differently. \
      Below are the 4 main issues that I came to be aware of: ",
      items: [
        [
          'Not prioritizing the most important habits',
          'Too focused on trying to check every item off my to-do list. This took time & energy away from the \
          highest priority items.',
        ],
        [
          'Going through the motions without fully reflecting',
          'A lack of self-awareness for whether my habits were positively serving me.',
        ],
        [
          "Absence of vision in terms of what I'm working towards",
          'Not seeing your goals visually makes them easy to forget.',
        ],
        [
          'Lack of attention to habit trackers',
          ['No quantitative analysis done to provide insights into progress.'],
        ],
      ],
    },
    persona: false,
    research: {
      body: 'Research into similar products already in the marketplace and common features across apps.',
      insights: [
        "Visualizations of habit progress over time (through concrete #'s, percentages, streaks, longest streaks, total frequency, etc.)",
        'Do not break the chain concept for habits, i.e. #"s in visualizations will reset to 0 if habits are missed.',
        'Habit trackers are more or less some version of a to-do list.',
        'Progress circle visualizations are simple, yet powerful designs for conveying completed information',
      ],
    },
    app: {
      approach:
        'Provide a consolidated view through a personal dashboard that will function as a one-stop shop for users to obtain more clarity \
        on their daily routines and thoughts. Users will be able to leverage proper prioritizations of habits, consistent reflections, \
        visible goals, and insightful numbers & visualizations regarding their progress.',
      behaviors:
        'Increased focus and efforts into higher priority habits and awareness of the resulting outcomes.',
      obstacles: {
        body: "The following are some of the obstacles I've faced and continue to battle with daily:",
        items: [
          'Giant to-do lists filled with non-urgent items',
          'Controllable distractions (YouTube, mind-wandering, etc.)',
          'Inadequate & inconsistent sleep schedule',
          'Constant overthinking paired with not enough action',
          'Minimal effort into reflections',
        ],
      },
    },
    sketching: {
      body: 'Brainstorming / Ideation ➡️ High level sketches ➡️ Paper prototypes ➡️ Iterate based off feedback',
    },
    wireframes: {
      body: 'In Progress...',
    },
  },
  {
    id: '2',
    projectName: 'Market Buddy',
    roles: 'Research • UI/UX Design • Development ',
    year: 2019,
    context:
      "Within the town of Ithaca, there is a popular Farmer's Market that both locals and students go to for \
      street food, baked goods, produce, wine tastings and live music. The Market functions as both a community space \
      and tourism destination, and its primary mission is to emphasize a direct connection between producer and consumer to help \
      promote and strengthen local agriculture. It has become a key contributor to both the regional and local economy.",
    interviews: {
      purpose:
        'Used a structured interview process containing a variety of questions to help identify any \
      problems, needs or requirements of a target audience that was not being addressed (total of 10 interviews were performed).',
      process:
        'Jotted down all important takeaways from the interviews and arranged them onto a whiteboard \
        separated by three main categories: barriers, motivations and miscellaneous. Below Affinity Diagram: ',
    },
    problem: {
      body: 'Out of the many problems identified, two stood out as the main blockers: ',
      items: [
        [
          'Transportation',
          'Physically traveling to the market was noted as an inconvenience. For those with a car, parking \
          was troublesome. Those without a car dealt with confusing bus routes, lack of ridesharing services, and unfeasibility of walking.',
        ],
        [
          'Time',
          'Users expressed visiting the market was simply not a priority for them. Regardless of positive previous experiences or \
          positive reviews through word of mouth, they rarely found themselves committing to plans on attending.',
        ],
      ],
    },
    persona: true,
    app: {
      approach:
        'Provide a space where users can view upcoming Farmers Market dates, choose from a selection of motivations and then set a \
      reminder to keep their intention to visit the market relevant. An aspect of gamification will also be incorporated through \
      a level-up feature to incentivize users to attend the market.',
      behaviors:
        'Our app aims to target users who are on the fence about going to the Farmers Market, and influence them into physically \
        visiting the market. ',
      obstacles: {
        body: 'Two key obstacles prevent our target users from attending the market more often: ',
        items: [
          'Lack of visibility in terms of opportunities the Ithaca Farmers Market presents (i.e. different Market locations, \
            special events, types of activities). Users are unlikely to alter their behavior if they do not see any value in going to the Market.',
          'Busy personal schedules tied in with seemingly high effort to plan a trip to the market',
        ],
      },
    },
    sketching: {
      body: 'Process: Brainstorming / Ideation ➡️ High level sketches ➡️ Paper prototypes ➡️ Iterate based off feedback',
    },
    wireframes: {
      body: 'Incorporated feedback & integrated final sketches to create the below wireframes: ',
    },
  },
];
