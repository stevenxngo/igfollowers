import Socials from "./Socials";

function Footer() {
  return (
    <footer className="mx-auto mt-4 text-sm md:text-base">
      <div className="container mx-auto items-center text-center">
        <p>
          Built with{" "}
          <a
            className="hover:text-ig-d-purple underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://react.dev/"
          >
            React
          </a>{" "}
          and{" "}
          <a
            className="hover:text-ig-d-purple underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://vitejs.dev/"
          >
            Vite
          </a>
        </p>
        <p className="mb-2 mt-1">
          &copy; {new Date().getFullYear()}{" "}
          <a
            className="hover:text-ig-d-purple underline"
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
