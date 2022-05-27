import React from "react";
import { useAppContext } from "../../container-app/src/AppContext";

const TesteContext = () => {
  const { userAuth } = useAppContext();
  console.log(userAuth);
  return <div>TesteContext</div>;
};

export default TesteContext;
