function About() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-white">About</h2>
      <p className="text-sm leading-relaxed text-neutral-400">
        Your data never leaves your browser. The follower and following JSON
        files are parsed locally — nothing is uploaded, stored, or transmitted
        anywhere.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        Note: deactivated accounts will appear in the results since they no
        longer follow you back.
      </p>
    </div>
  );
}

export default About;
