import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CountTask() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/addtask")
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <div>
      <span className="rounded-full text-sm text-white">
        {task.length}
      </span>
    </div>
  );
}
