import React, { useState, useEffect } from "react";
import animateScrollTo from "animated-scroll-to";

function Newsletter() {
  const [active, setActive] = useState(false);
  const [isHidden, setHidden] = useState("animateAppear");

  const suspendNews = (_) => {
    setHidden("animateDissapear");
  };

  function toBottom() {
    animateScrollTo(window.scrollY);
  }

  if (isHidden === "animateDissapear") {
    setTimeout(() => {
      setHidden("is-hidden");
      localStorage.setItem("newsletter", 0);
      toBottom();
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener("scroll", (_) => {
      if (window.scrollY > 300) {
        setActive(true);
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);

  const isActive = localStorage.getItem("newsletter");

  return (
    <>
      {!isActive && active && (
        <div className={`columns col-news ${isHidden}`}>
          <div className="column is-half-desktop is-two-thirds-tablet is-mobile has-text-left newsletter">
            <h1
              className="title has-text-white is-4"
              style={{ paddingTop: 10, marginLeft: 15 }}
            >
              Get latest updates in web technologies
              <button className="delete delpos" onClick={suspendNews}></button>
            </h1>
            <p
              className="subtitle has-text-white is-6"
              style={{ marginLeft: 15 }}
            >
              I write articles related to web technologies, such as design
              trends, development tools, UI/UX case studies and reviews, and
              more. Sign up to my newsletter to get them all.
            </p>
            <div className="columns">
              <div className="column is-three-quarters-desktop is-tablet is-fullwidth-mobile">
                <div className="field" style={{ marginLeft: 15 }}>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="column is-desktop is-tablet is-half-mobile">
                <a
                  className="button has-text-white"
                  style={{ background: "orange" }}
                >
                  Count me in!
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Newsletter;
