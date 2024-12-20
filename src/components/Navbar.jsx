import { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Nexus", "Vault", "Prologue", "about", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {};

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 border-none transition-all duration-700 sm:inset-x-6 "
    >
      <header className="absolute top-1/2 w-full">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center gap-2"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="ml-10 flex items-center space-x-5"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              ></audio>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
