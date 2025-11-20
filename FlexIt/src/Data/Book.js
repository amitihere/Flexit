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
  // ---------------- CLUB 1 ----------------
  {
    id: 1,
    name: 'Nimbalkar Sports Club',
    location: 'Pune',
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

    Detaillocation:
      '123 Main Street, near Balewadi Stadium, Pune, Maharashtra.\nEasily accessible from Baner Road, opposite Café Coffee Day.',

    Amenities: ['Parking Facility', 'Locker Rooms', 'Equipment Rental', 'Cafeteria'],

    description:
      'Nimbalkar Sports Club is a premier sports facility in Pune offering top-notch amenities for badminton, cricket, and volleyball enthusiasts. Located conveniently near Balewadi Stadium, it provides easy access and ample parking. The club features well-maintained courts, locker rooms, and equipment rental services.',

    courts: { badminton: 6, cricket: 1, volleyball: 3 },

    timings: {
      badminton: defaultTimings,
      cricket: defaultTimings,
      volleyball: defaultTimings
    },
    buying : {
      badminton : 400,
      cricket: 900,
      volleyball: 200
    }
  },

  // ---------------- CLUB 2 ----------------
  {
    id: 2,
    name: 'Power Smash Arena',
    location: 'Mumbai',
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

    Detaillocation:
      '4th Floor, Sunrise Sports Complex, Andheri West, Mumbai.\nLocated beside Infinity Mall with ample parking space.',

    Amenities: ['Changing Rooms', 'Snack Bar', 'AC Courts', 'Coaching Available'],

    description:
      'Power Smash Arena in Mumbai is a modern badminton facility featuring AC courts and professional coaching programs.',

    courts: { badminton: 8 },

    timings: {
      badminton: defaultTimings
    }
  },

  // ---------------- CLUB 3 ----------------
  {
    id: 3,
    name: 'Victory Turf',
    location: 'Bangalore',
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

    Detaillocation:
      'Plot No. 45, Whitefield Main Road, Bangalore, Karnataka.\nNext to Phoenix Market City, behind Shell Petrol Bunk.',

    Amenities: ['Floodlights', 'Restrooms', 'Seating Area', 'Refreshment Stall'],

    description:
      'Victory Turf is a large outdoor ground suitable for football and cricket, equipped with floodlights for evening games.',

    courts: {
      football: 1,    // turf
      cricket: 2      // practice nets
    },

    timings: {
      football: defaultTimings,
      cricket: defaultTimings
    }
  },

  // ---------------- CLUB 4 ----------------
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

    Detaillocation:
      'SCO 102, Sector 34A, Chandigarh.\nOpposite Piccadilly Square Mall, easily reachable via Madhya Marg.',

    Amenities: ['Personal Trainers', 'Steam Room', 'Diet Consultation', 'Showers'],

    description:
      'Skyline Fitness Zone offers an advanced gym facility and peaceful yoga sessions.',

    courts: { gym: null, yoga: null },

    timings: {
      gym: defaultTimings,
      yoga: defaultTimings
    }
  },

  // ---------------- CLUB 5 ----------------
  {
    id: 5,
    name: 'Ace Tennis Academy',
    location: 'Hyderabad',
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

    Detaillocation:
      'Plot 15, Jubilee Hills Road No. 36, Hyderabad, Telangana.\nClose to Durgam Cheruvu Metro Station and Inorbit Mall.',

    Amenities: ['Tennis Coaching', 'Parking', 'Café', 'Equipment Store'],

    description:
      'Ace Tennis Academy provides professional training with multiple clay and hard courts.',

    courts: { tennis: 4 },

    timings: {
      tennis: defaultTimings
    }
  },

  // ---------------- CLUB 6 ----------------
  {
    id: 6,
    name: 'Rising Hoop Center',
    location: 'Delhi',
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

    Detaillocation:
      'Block B, Connaught Place, New Delhi.\nLocated behind Palika Bazaar, near Central Park gate.',

    Amenities: ['Indoor Court', 'Locker Facility', 'Snack Corner', 'Drinking Water'],

    description:
      'Rising Hoop Center features a wooden indoor basketball court and gym section.',

    courts: { basketball: 1, gym: null },

    timings: {
      basketball: defaultTimings,
      gym: defaultTimings
    }
  },

  // ---------------- CLUB 7 ----------------
  {
    id: 7,
    name: 'Speed Racers Track',
    location: 'Ahmedabad',
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

    Detaillocation:
      'Raceway Ground, Science City Road, Ahmedabad, Gujarat.\nBehind Rajpath Club, near Sola Bridge.',

    Amenities: ['Track Lighting', 'Rest Area', 'First Aid', 'Parking'],

    description:
      'Speed Racers Track offers a synthetic running track and a dedicated cycling lane.',

    courts: { athletics: 1, cycling: 1 },

    timings: {
      athletics: defaultTimings,
      cycling: defaultTimings
    }
  },

  // ---------------- CLUB 8 ----------------
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

    Detaillocation:
      'Beachside Lane, Calangute Beach Road, Goa.\nOpposite Golden Sands Resort.',

    Amenities: ['Changing Rooms', 'Lifeguards', 'Café', 'Showers'],

    description:
      'Ocean View Swimming Club offers professional swimming, diving, and water polo facilities.',

    courts: { swimming: 1, 'water-polo': 1, diving: 1 },

    timings: {
      swimming: defaultTimings,
      'water-polo': defaultTimings,
      diving: defaultTimings
    }
  },

  // ---------------- CLUB 9 ----------------
  {
    id: 9,
    name: 'Pinnacle Boxing Academy',
    location: 'Kolkata',
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

    Detaillocation:
      '2nd Floor, South City Arena, Prince Anwar Shah Road, Kolkata.\nNext to South City Mall.',

    Amenities: ['Boxing Ring', 'Personal Training', 'Showers', 'Protein Bar'],

    description:
      'Pinnacle Boxing Academy specializes in boxing and MMA training.',

    courts: { boxing: 1, fitness: null, mma: 1 },

    timings: {
      boxing: defaultTimings,
      fitness: defaultTimings,
      mma: defaultTimings
    }
  },

  // ---------------- CLUB 10 ----------------
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

    Detaillocation:
      'Hilltop Retreat, Old Manali Road, Manali, Himachal Pradesh.\nFacing the Beas River.',

    Amenities: ['Yoga Mats', 'Meditation Hall', 'Café', 'Mountain View Terrace'],

    description:
      'Mountain Peak Yoga Center offers peaceful yoga and meditation sessions in the Himalayas.',

    courts: { yoga: null, meditation: null, stretching: null },

    timings: {
      yoga: defaultTimings,
      meditation: defaultTimings,
      stretching: defaultTimings
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