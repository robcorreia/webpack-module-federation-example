import React from "react";
import { useAppContext } from "container/AppContext";

const AreaExclusiva = () => {
  const context = useAppContext();
  console.log(context);
  return <div>AreaExclusiva pessoal hehe funcionou</div>;
};

export default AreaExclusiva;
