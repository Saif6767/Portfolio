  import React, { useState, useEffect } from "react";
  // Import icons
  import { BiHomeAlt, BiUser } from "react-icons/bi";
  import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
  // Link
  import { Link, Events } from "react-scroll";

  
  function Nav() {
    const [activeSection, setActiveSection] = useState("home"); 
    const [isScrolling, setIsScrolling] = useState(false);
 
    //jise routes par hoga waha
    useEffect(() => {
      localStorage.setItem("activeSection", activeSection);
    }, [activeSection]);

    //Scroll karna par select kara ga apen routes ko
    useEffect(() => {
      const handleScroll = () => {
        if (!isScrolling) { // Sirf tab chalega jab isScrolling false ho
          const sections = ["home", "about", "services", "work", "contact"];
          sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 200 && rect.bottom >= 200) {
                setActiveSection(section);
              }
            }
          });
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [isScrolling]);

    useEffect(() => {
      // react-scroll events to track scrolling
      Events.scrollEvent.register("begin", function () {
        setIsScrolling(true);
      });

      Events.scrollEvent.register("end", function () {
        setIsScrolling(false);
      });

      return () => {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
      };
    }, []);

    return (
      <>
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="container mx-auto">
            {/* nav inner */}
            <div className="w-full bg-black/20 h-[66px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
              <Link
                to="home"
                className={`cursor-pointer w-[55px] h-[55px] flex items-center justify-center ${
                  activeSection === "home" ? "active" : ""
                }`}
                onClick={() => setActiveSection("home")}
                smooth={true}
                offset={-200}
                duration={500}
              >
                <BiHomeAlt style={{ fontSize: "20px" }} />
              </Link>
              <Link
                to="about"
                className={`cursor-pointer w-[55px] h-[55px] flex items-center justify-center ${
                  activeSection === "about" ? "active" : ""
                }`}
                onClick={() => setActiveSection("about")}
                smooth={true}
                duration={500}
              >
                <BiUser style={{ fontSize: "20px" }} />
              </Link>
              <Link
                to="services"
                className={`cursor-pointer w-[55px] h-[55px] flex items-center justify-center ${
                  activeSection === "services" ? "active" : ""
                }`}
                onClick={() => setActiveSection("services")}
                smooth={true}
                duration={500}
              >
                <BsClipboardData style={{ fontSize: "20px" }} />
              </Link>
              <Link
                to="work"
                className={`cursor-pointer w-[55px] h-[55px] flex items-center justify-center ${
                  activeSection === "work" ? "active" : ""
                }`}
                onClick={() => setActiveSection("work")}
                smooth={true}
                duration={500}
              >
                <BsBriefcase style={{ fontSize: "20px" }} />
              </Link>
              <Link
                to="contact"
                className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
                  activeSection === "contact" ? "active" : ""
                }`}
                onClick={() => setActiveSection("contact")}
                smooth={true}
                duration={500}
              >
                <BsChatSquare style={{ fontSize: "20px" }} />
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }

  export default Nav;
