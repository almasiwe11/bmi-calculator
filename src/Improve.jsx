import React from "react";
import Habit from "./Habit";
const Improve = () => {
  return (
    <div className="improve">
      <Habit icon={Eating} title={"Healthy eating"}>
        Healthy eating promotes weight control, disease prevention, better
        digestion, immunity, mental clarity, and mood.
      </Habit>
      <Habit icon={Exercise} title={"Regular exercise"}>
        Exercise improves fitness, aids weight control, elevates mood, and
        reduces disease risk, fostering wellness and longevity.
      </Habit>
      <Habit icon={Sleep} title={"Adequate sleep"}>
        Sleep enhances mental clarity, emotional stability, and physical
        wellness, promoting overall restoration and rejuvenation.
      </Habit>
    </div>
  );
};

export default Improve;

function Eating() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <circle cx="32" cy="32" r="32" fill="#F69134" opacity=".15" />
      <path
        fill="#F69134"
        d="M47 31.25h-1.25V27A1.75 1.75 0 0 0 44 25.25h-2.25V24A1.75 1.75 0 0 0 40 22.25h-3A1.75 1.75 0 0 0 35.25 24v7.25h-6.5V24A1.75 1.75 0 0 0 27 22.25h-3A1.75 1.75 0 0 0 22.25 24v1.25H20A1.75 1.75 0 0 0 18.25 27v4.25H17a.75.75 0 1 0 0 1.5h1.25V37A1.75 1.75 0 0 0 20 38.75h2.25V40A1.75 1.75 0 0 0 24 41.75h3A1.75 1.75 0 0 0 28.75 40v-7.25h6.5V40A1.75 1.75 0 0 0 37 41.75h3A1.75 1.75 0 0 0 41.75 40v-1.25H44A1.75 1.75 0 0 0 45.75 37v-4.25H47a.75.75 0 1 0 0-1.5Zm-27 6a.25.25 0 0 1-.25-.25V27a.25.25 0 0 1 .25-.25h2.25v10.5H20ZM27.25 40a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm13 0a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm4-3a.25.25 0 0 1-.25.25h-2.25v-10.5H44a.25.25 0 0 1 .25.25v10Z"
      />
    </svg>
  );
}

function Exercise() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <circle cx="32" cy="32" r="32" fill="#F69134" opacity=".15" />
      <path
        fill="#F69134"
        d="M47 31.25h-1.25V27A1.75 1.75 0 0 0 44 25.25h-2.25V24A1.75 1.75 0 0 0 40 22.25h-3A1.75 1.75 0 0 0 35.25 24v7.25h-6.5V24A1.75 1.75 0 0 0 27 22.25h-3A1.75 1.75 0 0 0 22.25 24v1.25H20A1.75 1.75 0 0 0 18.25 27v4.25H17a.75.75 0 1 0 0 1.5h1.25V37A1.75 1.75 0 0 0 20 38.75h2.25V40A1.75 1.75 0 0 0 24 41.75h3A1.75 1.75 0 0 0 28.75 40v-7.25h6.5V40A1.75 1.75 0 0 0 37 41.75h3A1.75 1.75 0 0 0 41.75 40v-1.25H44A1.75 1.75 0 0 0 45.75 37v-4.25H47a.75.75 0 1 0 0-1.5Zm-27 6a.25.25 0 0 1-.25-.25V27a.25.25 0 0 1 .25-.25h2.25v10.5H20ZM27.25 40a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm13 0a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm4-3a.25.25 0 0 1-.25.25h-2.25v-10.5H44a.25.25 0 0 1 .25.25v10Z"
      />
    </svg>
  );
}

function Sleep() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <circle cx="32" cy="32" r="32" fill="#22C1C1" opacity=".15" />
      <path
        fill="#22C1C1"
        d="M45.75 28a.75.75 0 0 1-.75.75h-2.25V31a.75.75 0 0 1-1.5 0v-2.25H39a.75.75 0 1 1 0-1.5h2.25V25a.75.75 0 1 1 1.5 0v2.25H45a.75.75 0 0 1 .75.75ZM34 22.75h1.25V24a.75.75 0 1 0 1.5 0v-1.25H38a.75.75 0 0 0 0-1.5h-1.25V20a.75.75 0 0 0-1.5 0v1.25H34a.75.75 0 1 0 0 1.5Zm8.906 12.535a.75.75 0 0 1 .134.75A11.751 11.751 0 1 1 27.97 20.96a.75.75 0 0 1 .992.849 11.262 11.262 0 0 0 13.23 13.229.75.75 0 0 1 .714.247Zm-1.796 1.418A12.765 12.765 0 0 1 27.297 22.89a10.248 10.248 0 0 0 1.526 18.849 10.25 10.25 0 0 0 12.287-5.036Z"
      />
    </svg>
  );
}
