// import React, { useState, useEffect } from "react";
// import "./Header.css";

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState("home");

//   // Scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) setScrolled(true);
//       else setScrolled(false);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#hero" },
//     { name: "About", href: "#about" },
//     { name: "Experience", href: "#experience" },
//     { name: "Projects", href: "#projects" },
//     { name: "Skills", href: "#skills" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const handleLinkClick = (name) => {
//     setActiveLink(name);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
//       <div className="header-container">
//         {/* Brand */}
//         <div className="header-brand">
//           <a href="#hero" className="brand-name">Mahek Vanjani</a>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="desktop-nav">
//           {navLinks.map((link) => (
//             <button
//               key={link.name}
//               className={`nav-link ${activeLink === link.name ? "nav-link-active" : ""}`}
//               onClick={() => handleLinkClick(link.name)}
//             >
//               {link.name}
//             </button>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="mobile-menu-button"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? "✕" : "☰"}
//         </button>

//         {/* Mobile Nav */}
//         <nav className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
//           {navLinks.map((link) => (
//             <button
//               key={link.name}
//               className={`mobile-nav-link ${activeLink === link.name ? "mobile-nav-link-active" : ""}`}
//               onClick={() => handleLinkClick(link.name)}
//             >
//               {link.name}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Capitalized names

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (name, href) => {
    setActiveLink(name);
    setMobileMenuOpen(false);

    // Smooth scroll
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-brand">
          <a href="#hero" className="brand-name">Mahek Vanjani</a>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={`nav-link ${activeLink === link.name ? "nav-link-active" : ""}`}
              onClick={() => handleLinkClick(link.name, link.href)}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Nav */}
        <nav className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={`mobile-nav-link ${activeLink === link.name ? "mobile-nav-link-active" : ""}`}
              onClick={() => handleLinkClick(link.name, link.href)}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
