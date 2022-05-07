import React from "react";
import { Choices } from "./styles";

const SidebarChoice = ({ title, Icon }) => {
  return (
    <Choices>
      {Icon && <Icon />}
      {Icon ? <h5>{title}</h5> : <h6>{title}</h6>}
    </Choices>
  );
};

export default SidebarChoice;
