const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="content-max flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} EVERLEGENDS. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          <a href="#" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
