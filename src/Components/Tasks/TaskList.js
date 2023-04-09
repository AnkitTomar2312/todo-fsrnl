import React from "react";
import "./TaskList.css";
export default function TaskList(props) {
  return (
    <div>
      <div>
        {props.items.map((task) => {
          return <h1>{task.title}</h1>;
        })}
      </div>
    </div>
  );
}
