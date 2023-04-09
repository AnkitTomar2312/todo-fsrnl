import { useState } from "react";
import Tasks from "./Components/Tasks/Tasks";

const Dummy_Task = [
  {
    id: "e1",
    title: "Complete React Course",
    status: "Progress",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Complete React Project",
    status: "Started",
    date: new Date(2020, 7, 25),
  },
  {
    id: "e3",
    title: "Full Stack Project not started yet",
    status: "Not Started",
    date: new Date(2021, 5, 5),
  },
];
function App() {
  const [task, setTask] = useState(Dummy_Task);
  return (
    <div className="App">
      <Tasks tasks={task} />
    </div>
  );
}

export default App;
