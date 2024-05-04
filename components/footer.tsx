function Footer() {
   return (
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Stuff</header>
          <a href="./" className="link link-hover">Home</a>
          <a href="./blog" className="link link-hover">Blog</a>
        </nav>
        <nav>
          <header className="footer-title">Links</header>
          <a className="link link-hover">Got</a>
          <a className="link link-hover">Nothing</a>
          <a className="link link-hover">Deal with it</a>
        </nav>
      </footer>
   );
}

export default Footer