import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
  FaSpotify,
} from "react-icons/fa";

const socials = [
  {
    name: "Portfolio",
    icon: FaLaptopCode,
    link: "https://personal-portfolio-stevenxngos-projects.vercel.app/",
    color: "hover:text-teal-500",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/stevenxngo",
    color: "hover:text-blue-600",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/stevenxngo",
    color: "hover:text-gray-600",
  },
  {
    name: "Instagram",
    username: "stevenxngo",
    icon: FaInstagram,
    link: "https://www.instagram.com/stevenxngo/",
    color: "hover:text-ig-pink",
  },
  {
    name: "Spotify",
    icon: FaSpotify,
    link: "https://open.spotify.com/user/a202jrbuwjn17aw171oymxokf",
    color: "hover:text-green-500",
  },
];

function Socials() {
  return (
    <div className="flex items-center justify-center">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-2 text-2xl ${social.color} transition duration-300 ease-in-out hover:scale-110`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default Socials;
