import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

export const navItems = [
  // { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Code, create, optimize, and innovate.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
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
    title: "My tech stack",
    description: "I constantly try to improve",
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
    title: "Currently building a AI saas",
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
    title: "Promptopia",
    des: "Promptopia project is a modern and dynamic web application built using Next.js and Tailwind CSS, designed to allow users to share creative writing prompts.",
    img: "/promptopia.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/js.svg"],
    link: "https://prompt-ai-sharing.vercel.app/",
  },
  {
    id: 2,
    title: "Pixzest",
    des: "This project delivered a 25-page, fully responsive website with a 90+ SEO score, fast load times, and a modern user experience",
    img: "/pixzest.png",
    iconLists: ["/gatsby.svg", "/re.svg", "/js.svg", "/graphql.svg", "/contentful.svg"],
    link: "https://www.pixzest.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
    id: 3,
    title: "Cadopt Technologies Pvt. Ltd.",
    role: "Software Developer",
    duration: "May 2025 - Present",
    loaction: "Bangalore",
    desc: [
      "Developed an admin portal using MERN for CRUD operations with user authentication, authorization, and role-based access control",
      "Created a PDF watermarking website using MERN with authentication, authorization, role-based access control and email push notification features",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelancer",
    role: "Software Engineer",
    duration: "Oct 2024 - Apr 2025",
    loaction: "Bangalore",
    desc: [
      "Developed a school landing page using Next.js and Tailwind CSS with SEO optimization, responsive design, and performance enhancements with email integration using Nodemailer",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 1,
    title: "Pixzest Technologies Pvt. Ltd.",
    role: "Software Engineer",
    duration: "Feb 2024 - Sept 2024",
    loaction: "Bangalore",
    desc: [
      "Developed an admin portal using React for CRUD operations with user authentication using Firebase",
      "Created a website using Gatsby(SSG) with authentication features using Firebase, tailoring content based on user login status",
      "Built a website using Gatsby(SSG) that supports content localization for different regions and integrated Contentful to manage localized content, ensuring consistency across languages",
      "Enhanced SEO performance and UI with Gatsby for dynamic, search-optimized pages"
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Cloud Counselage Pvt. Ltd.",
  //   role: "ReactJs - Intern",
  //   duration: "July 2023 - Aug 2023",
  //   loaction: "Remote",
  //   desc: [
  //     "I have created a platform where professionals can discuss, post, search for jobs",
  //     "I have learned about project Management, New Product Development, Git and Github"
  //   ],
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ajithkumar110302",
  },
  {
    id: 2,
    img: "/mobile.svg",
    link: "tel:8523944792",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ajithkumar-athimoolam/",
  },
  {
    id: 4,
    img: "/mail.svg",
    link: "mailto:ajithkumar110302@gmail.com",
  },
];
