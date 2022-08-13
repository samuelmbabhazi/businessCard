import React from "react";
import Bouton from "./bouton";
import Contenu from "./text";

function Main() {
  return (
    <div className="main">
      <p>
        <h1>Laura Smith</h1>
        <h5 className="frontend">Frontend Developer</h5>
        <h6 className="laura"> laurasmith.website</h6>
      </p>
      <Bouton />
      <Contenu
        title="About"
        paragraphe="I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn."
      />
      <Contenu title="Interests" paragraphe="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
    </div>
  );
}
export default Main;
