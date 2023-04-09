import React from "react";
import Card from "../Card/Card";
import TaskList from "./TaskList";
import "./Tasks.css";
export default function Tasks({ props }) {
  return (
    <div>
      <Card className="tasks">
        <TaskList items={props.tasks} />
      </Card>
    </div>
  );
}
