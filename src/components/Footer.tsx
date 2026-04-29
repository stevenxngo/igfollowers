import Socials from "./Socials";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 text-xs text-neutral-600">
      <p className="max-w-sm leading-relaxed">
        Not affiliated with Instagram or Meta. Personal project for educational
        and entertainment purposes.
      </p>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://www.stevenxngo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 underline-offset-2 hover:text-white hover:underline"
        >
          Steven Ngo
        </a>
      </p>
      <Socials />
    </footer>
  );
}

export default Footer;
