import React from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
    </div>
  );
};
export default Header;
