import Socials from "./Socials";

function Footer() {
  return (
    <footer className="mx-auto mt-4 text-sm md:text-base">
      <div className="container mx-auto items-center text-center">
        <p className="max-w-md">
          This app is not affiliated with Instagram or Meta. It is a personal project
          made for educational and entertainment purposes.
        </p>
        <p className="mb-2 mt-1">
          &copy; {new Date().getFullYear()}{" "}
          <a
            className="hover:text-ig-pink underline"
            href="https://personal-portfolio-stevenxngos-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Steven Ngo
          </a>
          . All rights reserved.
        </p>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
