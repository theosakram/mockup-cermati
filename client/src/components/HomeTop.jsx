import React from "react";
import Logo from "../assets/logo.png";

function HomeTop() {
  return (
    <>
      <section class="hero is-fullheight bg toppest">
        <div className="blue-bg"></div>
        <div class="hero-body">
          <img className="logo" src={Logo} alt="Cermati Logo" />
          <div class="container has-text-centered">
            <h1
              class="title has-text-white has-text-weight-light"
              style={{ marginBottom: "5px" }}
            >
              Hello! I'm Theophany Sakra Muhammad
            </h1>
            <h1 class="title has-text-white has-text-weight-bold garmin-2">
              Consult, Design, and Develop Websites
            </h1>
            <h2 class="subtitle has-text-white ">
              Have something great in mind? Feel free to contact me.
            </h2>
            <h2 class="subtitle has-text-white garmin">
              I'll help you make it happen.
            </h2>
            <button className="baten-home">LET'S MAKE CONTACT</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeTop;
