import React from "react";
import Card from "./Card";
import Footer from "./Footer";

function HomeBottom() {
  let data = [
    {
      title: "Consult",
      text:
        "Co-create, design thinking; strengthen infrastructure resist granular.Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.",
      icon: "comments",
    },
    {
      title: "Design",
      text:
        "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.",
      icon: "paint-brush",
    },
    {
      title: "Develop",
      text:
        "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.",
      icon: "boxes",
    },
    {
      title: "Marketing",
      text:
        "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.",
      icon: "bullhorn",
    },
    {
      title: "Manage",
      text:
        "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.",
      icon: "tasks",
    },
    {
      title: "Evolve",
      text:
        "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.",
      icon: "chart-line",
    },
  ];

  return (
    <>
      <section className="hero is-fullheight homebot">
        <div className="hero-head" style={{ marginTop: "75px" }}>
          <div className="container has-text-centered">
            <h1
              className="title has-text-weight-light"
              style={{ marginBottom: "5px" }}
            >
              How can I help you?
            </h1>
            <h1 className="subtitle" style={{ marginTop: 20 }}>
              Our work then targeted, best practices outcomes social innovation
              synergy. Venture philanthropy, revolutionary inclusive policymaker
              relief. User-centered program areas scale.
            </h1>
          </div>
        </div>
        <div className="hero-body">
          <div className="columns is-multiline">
            {data.map((datum, index) => (
              <div
                key={index}
                className="column is-one-third-desktop is-half-tablet is-mobile"
              >
                <Card data={datum} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default HomeBottom;
