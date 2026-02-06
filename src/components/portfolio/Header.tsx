
const Header = () => {
  return (
    <header className="bg-white border-b-2 border-neutral-900 sticky top-0 z-50">
      <div className="max-w-[1800px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-4xl font-black tracking-tight text-neutral-900 uppercase leading-none">
            Deep
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest text-neutral-900">
              <a href="#about">About</a>
              <a href="#projects">Work</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
            <button
              type="button"
              aria-label="Menu"
              className="h-12 w-12 border-2 border-neutral-900 flex items-center justify-center text-2xl font-black leading-none"
            >
              ⋮
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
