import React from "react";
import animateScrollTo from "animated-scroll-to";

function Notification() {
  function backToTop() {
    animateScrollTo(document.querySelector(".toppest"));
  }

  return (
    <>
      <div class="notification">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters">
              By accessing and using this website, you acknowledge that you have
              read and understand our{" "}
              <span className="locor">
                {" "}
                Cookie Policy, Privacy Policy, and our Terms of Service.
              </span>
            </div>
            <div className="column">
              <div className="button baten" onClick={backToTop}>
                Got It
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
