import React from "react";

export default function Tasks({ tasks }) {
  return (
    <div>
      <h1>Tasks</h1>
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
