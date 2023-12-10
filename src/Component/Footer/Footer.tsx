import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="footer p-10 text-base-content">
        <aside>
          <div>
            <img src="/navlogo.png" alt="" />
            <p>
              Sometimes features require a short description. This <br /> can be
              detailed description or just a short text.
            </p>
          </div>
          <div className="my-4">
            <p className="text-2xl">Download App</p>
            <p>Available on</p>
            <div className="flex gap-4 items-center my-2">
              <img src="/playstore.png" alt="" />
              <img src="/appstore.png" alt="" />
            </div>
          </div>
        </aside>
        <nav>
          <header className="text-black font-semibold text-xl">Company</header>
          <a className="link link-hover text-accent">About us</a>
          <a className="link link-hover text-accent">Testimonial</a>
          <a className="link link-hover text-accent">Terms of services</a>
          <a className="link link-hover text-accent">Privacy policy</a>
          <a className="link link-hover text-accent">Investor</a>
        </nav>
        <nav>
          <header className="text-black font-semibold text-xl">Services</header>
          <a className="link link-hover text-accent">Booking</a>
          <a className="link link-hover text-accent">Support Center</a>
          <a className="link link-hover text-accent">Blog</a>
          <a className="link link-hover text-accent">Review</a>
          <a className="link link-hover text-accent">Room</a>
        </nav>
        <nav>
          <header className="text-black font-semibold text-xl">
            Recourses
          </header>
          <a className="link link-hover text-accent">Help Center</a>
          <a className="link link-hover text-accent">Guide</a>
          <a className="link link-hover text-accent">Partner Network</a>
          <a className="link link-hover text-accent">FAQ's</a>
          <a className="link link-hover text-accent">Documentation</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
