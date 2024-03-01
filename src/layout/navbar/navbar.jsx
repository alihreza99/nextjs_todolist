"use client";
import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function App() {

  return (
    <Nav dir="rtl" className="Navbar" pills>
      <NavItem className="NavItem">
        <NavLink className="nav" href="/">
          خانه
        </NavLink>
      </NavItem>
      <NavItem className="NavItem">
        <NavLink className="nav" href="/auth/page">
          ورود/ثبت نام
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default App;
