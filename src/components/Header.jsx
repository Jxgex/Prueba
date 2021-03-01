import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

export default function Header(props) {
  return (
    <>
      <header className="pages">
        <ul>
          <li>
            <Link className={props.active === "profile" ? "active" : ""} to="/">
              Client Info
            </Link>
          </li>
          <li>
            <Link
              className={props.active === "data" ? "active" : ""}
              to="/data"
            >
              Data
            </Link>
          </li>
                  </ul>
      </header>
    </>
  );
}
