import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <section id="Intro">
      <div className="fondo z-10">
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            <a
              className="h-1/3 md:h-1/2 transition ease-in-out delay-150 hover:scale-110"
              href="#Start"
            >
              <img className="w-full h-full" alt="Play" src="/play.png" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
