import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import User from "./User";
const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <div>{isLoading ? <Preloader /> : <User />}</div>;
};

export default MyComponent;
