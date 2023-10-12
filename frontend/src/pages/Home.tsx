import React, {FC} from "react";
import {TasksList, TasksFilter, TasksCalendar} from "../modules/tasks";
import {TasksList} from "../modules/tasks";

const Home: FC = () => {
  return (
    <>
      <TasksList Filter={TasksFilter} Calendar={TasksCalendar}/>
      <TasksList/>
    </>
  );
};

export default Home;