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
    link: "https://www.stevenxngo.com/",
    color: "hover:text-teal-400",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/stevenxngo",
    color: "hover:text-blue-400",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/stevenxngo",
    color: "hover:text-white",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/stevenxngo/",
    color: "hover:text-violet-400",
  },
  {
    name: "Spotify",
    icon: FaSpotify,
    link: "https://open.spotify.com/user/a202jrbuwjn17aw171oymxokf",
    color: "hover:text-green-400",
  },
];

function Socials() {
  return (
    <div className="flex items-center justify-center gap-5">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`text-xl text-neutral-500 transition-colors duration-200 ${social.color}`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default Socials;
