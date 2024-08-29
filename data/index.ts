export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Quiz App",
    des: "How knowledgeable are you with current affairs? Use this app to test your knowledge skills",
    img: "/quiz.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://quiz-fullstack-app-2024-v2.onrender.com/",
    githubLink: "https://github.com/tambiasawo/quiz-fullstack-app-2024",
  },
  {
    id: 2,
    title: "NextJS Dashboard",
    des: "Not your normal dashboard. Built with NextJS 14, with interactive tables and advanced features. Sign in as either an admin or user. admin: peter, password: user: sarah, password",
    img: "/nextjsdashboard.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
    githubLink: "https://github.com/tambiasawo/Tambi-NextJS-Dashboard",
  },
  {
    id: 3,
    title: "MERN Authentication",
    des: "Built with the MERN stack, you can create a new account, sign in and edit your profile. Sign in with: user17@yahoo.com and user17",
    img: "/mern-auth.png",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg"],
    link: "https://mern-fullstack-app-one.vercel.app/",
    githubLink: "https://github.com/tambiasawo/quiz-fullstack-app-2024",
  },
  {
    id: 4,
    title: "Netflix Clone",
    des: "Experience Netflix or rather have a taste Netflix. Sign in with test@test.com and 123456 or create your account",
    img: "/netflix.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://netflix-clone-one-plum-86.vercel.app/login",
    githubLink: "https://github.com/tambiasawo/netflix-clone",
  },
  {
    id: 5,
    title: "Color Guesser Game",
    des: "Think you know your color codes well? Well, let's see",
    img: "/color-guesser.png",
    iconLists: ["/javascript.svg", "/css3.svg", "/html.svg"],
    link: "https://color-guesser-game.netlify.app",
    githubLink: "https://github.com/tambiasawo/colorguessgame",
  },
  {
    id: 5,
    title: "Movie Search",
    des: "This mobile responsive app uses axios to fetch data from the TMDB API. It filters the fetched movies as input changes and also has pagination.",
    img: "/movie-search.png",
    iconLists: ["/re.svg", "/css3.svg"],
    link: "https://csb-qn78n3.vercel.app",
    githubLink: "https://github.com/tambiasawo/IMDBMovieSearch",
  },
];

export const testimonials = [
  {
    quote:
      "I worked with Tambi as a project manager for Vertical Motion. Tambi was relentless from the start and was able to quickly pick up from where his predecessor left off, with little time. He showed great passion in developing complex front-end applications and learning new technologies. He worked as a frontend developer and a Wordpress Developer for us and was always ready to jump in to assist clients with resolving various issues whenever asked. I would recommend him for any position you have for him.",
    name: "Bill Copeland",
    title: "Project Manager, Vertical Motion",
  },
  {
    quote:
      "Collaborating with Tambi on a number of projects was exciting. We made clients happy and the company proud. I would recommend him for any position you have for him",
    name: "Oghosa Ogie",
    title: "Director, Webgigg Team",
  },

  {
    quote:
      "Tambi has been a very well-versed scholar on the subject of Advanced JavaScript. I would highly recommend him to any role that requires hands-on knowledge of NextJs, ReactJs and JavaScript.",
    name: "Harshita Shah",
    title: "Senior Frontend Developer @ Accenture ",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/tambiasawo",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://linkedin.com/in/asawot",
  },
];
