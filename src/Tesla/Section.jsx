import React from "react";

function Section(props) {
  return (
    <>
      <div
        className="section"
        style={{ backgroundImage: "url(teslaImages/" + props.background + ")" }}
      >
        <div className="modelsName">
          <h1>{props.name}</h1>
          <p>{props.tagline}</p>
        </div>
        <div className="callToAction">
          <div className="buttons">
            <a href="" className="leftBtn">
              {props.leftBtn}
            </a>
            {/* CONDITIONAL RENDRING  */}

            {props.rightBtn && (
              <a href="" className="rightBtn">
                {props.rightBtn}
              </a>
            )}
          </div>
          {/* CONDITIONAL RENDRING  */}

          {props.arrow && (
            <img src="teslaImages/down-arrow.svg" alt="down arrow" />
          )}
        </div>
      </div>
    </>
  );
}

export default Section;
