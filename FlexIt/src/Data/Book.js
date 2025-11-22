const defaultTimings = [
  "06:00 AM - 07:00 AM",
  "07:00 AM - 08:00 AM",
  "08:00 AM - 09:00 AM",
  "09:00 AM - 10:00 AM",
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM",
  "07:00 PM - 08:00 PM"
];
export const clubs = [


  {
    id: 1,
    name: 'Nimbalkar Sports Club',
    location: 'San Francisco',
    price: 200,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 10,
    rating: 4.0,
    reviews: 150,
    sports: ['badminton', 'cricket', 'volleyball'],

    Detaillocation: '123 Bay Street, near Marina District, San Francisco, CA.\nOpposite Blue Bottle Coffee.',

    Amenities: ['Parking Facility', 'Locker Rooms', 'Equipment Rental', 'Cafeteria'],

    description:'A premium sports facility in San Francisco offering access to badminton courts, cricket nets, and volleyball grounds.',

    courts: { badminton: 6, cricket: 1, volleyball: 3 },

    timings: {
      badminton: defaultTimings,
      cricket: defaultTimings,
      volleyball: defaultTimings
    },

    buying: {
      badminton: 400,
      cricket: 900,
      volleyball: 200
    }
  },


  {
    id: 2,
    name: 'Power Smash Arena',
    location: 'San Francisco',
    price: 250,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 15,
    rating: 4.7,
    reviews: 230,
    sports: ['badminton'],

    Detaillocation:'4th Street Sports Complex, Downtown San Francisco.\nNext to Salesforce Tower.',

    Amenities: ['Changing Rooms', 'Snack Bar', 'AC Courts', 'Coaching Available'],

    description:'A modern AC badminton facility with professional coaching and premium synthetic courts.',

    courts: { badminton: 8 },

    timings: {
      badminton: defaultTimings
    },

    buying: { badminton: 500 }
  },


  {
    id: 3,
    name: 'Victory Turf',
    location: 'San Francisco',
    price: 300,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 5,
    rating: 3.5,
    reviews: 180,
    sports: ['football', 'cricket'],

    Detaillocation:'Mission District Sports Park, San Francisco.\nBeside Dolores Park.',

    Amenities: ['Floodlights', 'Restrooms', 'Seating Area', 'Refreshment Stall'],

    description:'Large turf for football and cricket training with floodlights for night sports.',

    courts: { football: 1, cricket: 2 },

    timings: {
      football: defaultTimings,
      cricket: defaultTimings
    },

    buying: {
      football: 700,
      cricket: 650
    }
  },

  {
    id: 4,
    name: 'Skyline Fitness Zone',
    location: 'Chandigarh',
    price: 180,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 20,
    rating: 4.8,
    reviews: 310,
    sports: ['gym', 'yoga'],

    Detaillocation:'SCO 102, Sector 34A, Chandigarh.\nOpposite Piccadilly Square Mall.',

    Amenities: ['Personal Trainers', 'Steam Room', 'Diet Consultation', 'Showers'],

    description:'An advanced gym and yoga center offering elite fitness training.',

    courts: { gym: null, yoga: null },

    timings: {
      gym: defaultTimings,
      yoga: defaultTimings
    },

    buying: {
      gym: 300,
      yoga: 150
    }
  },

  {
    id: 5,
    name: 'Ace Tennis Academy',
    location: 'San Francisco',
    price: 350,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 10,
    rating: 2.6,
    reviews: 275,
    sports: ['tennis'],

    Detaillocation:"Lombard Street Courts, San Francisco.\nClose to Fisherman's Wharf.",

    Amenities: ['Professional Tennis Coaching', 'Parking', 'Equipment Store'],

    description:'A tennis academy with clay courts and experienced coaching staff.',

    courts: { tennis: 4 },

    timings: {
      tennis: defaultTimings
    },

    buying: { tennis: 550 }
  },


  {
    id: 6,
    name: 'Rising Hoop Center',
    location: 'San Francisco',
    price: 220,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 12,
    rating: 3.4,
    reviews: 190,
    sports: ['basketball', 'gym'],

    Detaillocation:'Bayview Arena, San Francisco.\nNear Oracle Park.',

    Amenities: ['Indoor Court', 'Locker Facility', 'Snack Corner', 'Water Fountain'],

    description:'Indoor basketball court with gym access and strength training options.',

    courts: { basketball: 1, gym: null },

    timings: {
      basketball: defaultTimings,
      gym: defaultTimings
    },

    buying: {
      basketball: 300,
      gym: 200
    }
  },


  {
    id: 7,
    name: 'Speed Racers Track',
    location: 'San Francisco',
    price: 400,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 8,
    rating: 4.2,
    reviews: 140,
    sports: ['athletics', 'cycling'],

    Detaillocation:'Presidio Training Ground, San Francisco.\nNear Golden Gate Bridge.',

    Amenities: ['Track Lighting', 'Rest Area', 'First Aid', 'Parking'],

    description:'A premium track for speed training, running, and cycling practice.',

    courts: { athletics: 1, cycling: 1 },

    timings: {
      athletics: defaultTimings,
      cycling: defaultTimings
    },

    buying: {
      athletics: 450,
      cycling: 500
    }
  },


  {
    id: 8,
    name: 'Ocean View Swimming Club',
    location: 'Goa',
    price: 280,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 18,
    rating: 4.9,
    reviews: 320,
    sports: ['swimming', 'water-polo', 'diving'],

    Detaillocation:'Beachside Lane, Calangute Beach Road, Goa.\nOpposite Golden Sands Resort.',

    Amenities: ['Changing Rooms', 'Lifeguards', 'Café', 'Showers'],

    description:'A seaside aquatic sports club with swimming, diving, and water polo facilities.',

    courts: { swimming: 1, 'water-polo': 1, diving: 1 },

    timings: {
      swimming: defaultTimings,
      'water-polo': defaultTimings,
      diving: defaultTimings
    },

    buying: {
      swimming: 350,
      'water-polo': 450,
      diving: 600
    }
  },


  {
    id: 9,
    name: 'Pinnacle Boxing Academy',
    location: 'San Francisco',
    price: 260,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 10,
    rating: 5.0,
    reviews: 210,
    sports: ['boxing', 'fitness', 'mma'],

    Detaillocation:'SoMa Combat Training Center, San Francisco.\nNext to Moscone Center.',

    Amenities: ['Boxing Ring', 'Personal Training', 'Protein Bar'],

    description:'A combat sports academy offering MMA, boxing, and fitness training.',

    courts: { boxing: 1, fitness: null, mma: 1 },

    timings: {
      boxing: defaultTimings,
      fitness: defaultTimings,
      mma: defaultTimings
    },

    buying: {
      boxing: 450,
      fitness: 300,
      mma: 550
    }
  },


  {
    id: 10,
    name: 'Mountain Peak Yoga Center',
    location: 'Manali',
    price: 150,
    images: [
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
      require('../../assets/images (1) (1).jpg'),
    ],
    discount: 25,
    rating: 3.7,
    reviews: 350,
    sports: ['yoga', 'meditation', 'stretching'],

    Detaillocation:'Hilltop Retreat, Old Manali Road, Manali.\nFacing the Beas River.',

    Amenities: ['Mountain View', 'Spa Therapy', 'Nature Walk Area'],

    description:'A peaceful yoga and meditation retreat located in the mountains.',

    courts: { yoga: null, meditation: null, stretching: null },

    timings: {
      yoga: defaultTimings,
      meditation: defaultTimings,
      stretching: defaultTimings
    },

    buying: {
      yoga: 200,
      meditation: 180,
      stretching: 120
    }
  }
];


export const sportIcons = {
  badminton: 'badminton',
  cricket: 'cricket',
  volleyball: 'volleyball',
  football: 'soccer',
  tennis: 'tennis',
  gym: 'dumbbell',
  basketball: 'basketball',
  swimming: 'swim',
  boxing: 'boxing-glove',
  yoga: 'meditation',
  athletics: 'run',
};