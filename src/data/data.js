import { RouterData } from "../router/RouterData";

export const imagesData = {
  logo: "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/bj6umfs42hyppb115k8b",
  heroImage:
    "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/dtnols47kgrihk3lfpfr",
  // heroImage:
  //   "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/edg5u660hjvlp1evajov",
  vector2:
    "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/fzhvqtsobhpwjhvlm1tb",
  vector3:
    "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/kvmaaprr2760rgnhz9hc",
  about1:
    "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/ugdcheymyrvwbydorwzl",
  about2:
    "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/suxkpsnqxszjraaueeyp",
  cbse: "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/g4rv0cegmi478hvtldi3",
  icse: "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/cmzp9iusov8j64pexvka",
  cambridege:
    "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/jptdxp3kanjqk3zcr22k",
  overlayBg:
    "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/txaw3ld30xnyn0kthyyx",
  faculty1:
    "https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/debfwqthmce5qcavttpb",
};

export const primaryLinks = [
  {
    name: "home",
    path: RouterData.home,
  },
  {
    name: "about us",
    path: RouterData.about,
  },
  {
    name: "Courses",
    path: RouterData.courses,
  },
  {
    name: "Faculties",
    path: RouterData.faculties,
  },
  {
    name: "Gallery",
    path: RouterData.gallery,
  },
  {
    name: " Study Materials",
    path: RouterData.studyMaterials,
  },
  {
    name: "Resources",
    path: RouterData.resourses,
  },
];

export const appData = {
  link: "https://play.google.com/store/apps/details?id=com.onlinetestpanel.prayas",
};

export const socialMediaLinks = {
  youtube: "#",
  facebook: "#",
  instagram: "#",
};

export const hero = {
  h1: "",
  p: "Discover a nurturing environment for academic growth at Mantra Prayas. With experienced educators and modern facilities, we empower students to thrive. Join us in unlocking your full potential.",
  cta: [
    {
      link: "/contact",
      text: "Join Now",
    },
    {
      link: "/courses",
      text: "Courses Details",
    },
  ],
};

export const statsData = {
  card1: {
    h3: "21",
    p: "Years of Teaching Experience",
  },
  card2: {
    h3: "100",
    p: "Student Satisfaction",
  },
  card3: {
    h3: "70%",
    p: "Average selection percentage in JEE",
  },
  card4: {
    h3: "50",
    p: "Average selection percent in NEET",
  },
};

export const about1 = {
  h2: "Discover Mantra Prayas.",
  p: "Mantra Prayas, located in Kannivakkam, Guduvancherry, Chennai, offers coaching classes up to Grade 12 across various syllabi. With experienced teachers providing personalized attention and a focus on holistic development, we ensure students reach their full potential. Established in 2015, we have a proven track record of producing top-ranked students.",
  cta: {
    link: "/about",
    text: "Learn More",
  },
};
export const about2 = {
  h2: "Our Mission at Mantra Prayas.",
  p: "At Mantra Prayas, our mission is to provide students with an education that goes beyond textbooks. We aim to cultivate an environment where academic excellence is combined with the development of vital life skills, critical thinking, and a love for learning. With personalized attention and holistic support, we seek to build confident, creative individuals who can positively impact society.",
  cta: {
    link: "/about",
    text: "Learn More",
  },
};

export const whyChoose = {
  text: "Why Choose Mantra Prayas?",
  p: "Explore what sets Mantra Prayas apart from the rest and discover why we're the ideal choice for your educational journey.",
  cta: {
    link: RouterData.contact,
    text: "Join now",
  },
  cards: [
    {
      h4: "Experienced Mentors",
      p: "Our Faculties comprises experienced mentors committed to guiding students towards success",
    },
    {
      h4: "Tailored Support",
      p: "We focus on personalized attention. Each student receives tailored support, boosting confidence and understanding.",
    },
    {
      h4: "Cutting-Edge Facilities",
      p: "Our cutting-edge facilities offer an immersive learning setting with modern resources for the best learning experiences.",
    },
    {
      h4: "Proven Track Record",
      p: "Benefit from our track record of academic excellence, supported by countless success stories from our students.",
    },
  ],
};

export const courses = {
  h2: "Discover Our Courses.",
  p: "Explore our varied course offerings, designed to cater to students from different educational backgrounds. Start your academic journey with us today",
  classes: [
    {
      class: "06",
      subjects: "Stone one year foundation program",
    },
    {
      class: "07",
      subjects: "Root two year foundation program",
    },
    {
      class: "08",
      subjects: "Root one year foundation program",
    },
    {
      class: "09",
      subjects:
        "Four-year Brainy program for IIT-JEE | NEET, KVPY, NTSE, Olympiad; Two-year core program for NTSE stage-1 and 2; One-year CBSE classroom program.",
    },
    {
      class: "10",
      subjects:
        "Three-year Clever program for IIT-JEE | NEET, KVPY, NTSE, Olympiad; One-year core program for NTSE stage-1 and 2; One-year CBSE classroom program.  ",
    },
    {
      class: "11",
      subjects:
        "Two-year Spark program for IIT-JEE | NEET, KVPY, Olympiad; Two-year Samarth program for ICAR-AIEEA | JET (Agriculture); One-year CBSE classroom program.",
    },
    {
      class: "12",
      subjects:
        "One-year Pinnacle program for IIT-JEE | NEET, KVPY, Olympiad; One-year Samarth program for ICAR-AIEEA | JET (Agriculture); One-year CBSE classroom program.",
    },
    {
      class: "13",
      subjects:
        "One-year Brisk classroom program for IIT-JEE | NEET, KVPY, Olympiad; One-year Samarth program for ICAR-AIEEA | JET (Agriculture).",
    },
  ],
  courses: [
    {
      // img: "",
      text: "Hindi Prachar Sabha courses",
      p: "Explore our Hindi Prachar Sabha courses designed to promote and enhance proficiency in the Hindi language. With experienced instructors and structured curriculum, we provide comprehensive training to help students develop their language skills effectively.",
      free: false,
    },
    {
      // img: "",
      text: "Malayalam Mission Classes",
      p: "Join our Malayalam Mission classes aimed at promoting the rich cultural heritage and language proficiency in Malayalam. Led by experienced instructors, these classes offer a supportive environment for students to learn and appreciate the beauty of the language.",
      free: true,
    },
  ],
};

export const faculties = {
  h2: "Meet Our Experienced Faculty",
  p: "At Mantra Prayas, our experienced teachers are dedicated mentors. With expertise in their fields, they bring passion and innovative teaching methods to the classroom. They prioritize personalized attention, ensuring each student's academic success and growth.",
};

export const testmonial = {
  h2: "Testimonial Delights: Hear from Our Happy Students!",
};

export const contactDeatils = {
  email: "mantra.prayas@gmail.com",
  phone: "+91 8982845157",
  instagram: "https://www.instagram.com/prayas_institute_bhl/",
  facebook: "https://www.facebook.com/prayasinstituteofficial",
  twitter: "https://twitter.com/mantra_prayas",
  linkedin: "https://www.linkedin.com/in/prayas-institute-13831b232/",
};
