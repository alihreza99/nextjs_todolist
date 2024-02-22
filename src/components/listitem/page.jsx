"use client";
import React from "react";
import { Button } from "reactstrap";
import { BsFillTrash3Fill } from "react-icons/bs";
export default function todoitem({ title, deletehandler }) {
  const itemtitle = { title };
  return (
    <li className="item">
      <span className="name">{title}</span>
      <Button
        data-testid="deletebtn"
        onClick={() => {
          deletehandler(itemtitle);
        }}
        className="delete"
      >
        <BsFillTrash3Fill />
      </Button>
    </li>
  );
}
