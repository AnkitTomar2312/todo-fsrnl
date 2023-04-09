import React from "react";
import Card from "../Card/Card";
import "./Tasks.css";
export default function Tasks({ tasks }) {
  return (
    <div>
      {tasks.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.status}</p>
          </div>
        );
      })}
    </div>
  );
}
