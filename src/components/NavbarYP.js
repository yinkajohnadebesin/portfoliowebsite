import "../css/navbar.css";

function NavbarYP() {
  return (
    <nav className="main-navbar">
      <a href="/" className="site-title">
        YinkaAdebesin
      </a>
      <ul>
        <li>
          <a className="nav-items" href="/">
            ABOUT YINKA
          </a>
        </li>
        <li>
          <a className="nav-items" href="/">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="nav-items" href="/">
            SKILLS
          </a>
        </li>
      </ul>
      <a className="nav-items-contactbutton" href="/">
        Contact me ➜
      </a>
    </nav>
  );
}

export default NavbarYP;
