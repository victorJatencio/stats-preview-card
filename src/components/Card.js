import React from "react";
import { Row } from "react-bootstrap";
import "./Card.css";

const Card = () => {
  return (
    <Row>
      <div className="card">
        <div className="text__content">
          <h1>
            Get <span className="highlight">insights</span> that help your
            business grow.
          </h1>
          <p className="blurb__text">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <ul className="list">
            <li>
              <h4>10k+</h4>
              <span className="stats">companies</span>
            </li>
            <li>
              <h4>314</h4>
              <span className="stats">templates</span>
            </li>
            <li>
              <h4>12m+</h4>
              <span className="stats">queries</span>
            </li>
          </ul>
        </div>
        <div className="image">{/*...*/}</div>
      </div>
    </Row>
  );
};

export default Card;
