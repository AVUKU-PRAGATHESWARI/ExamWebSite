import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Svportal from "./Svportal";
const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <div>{isLoading ? <Preloader /> : <Svportal/>}</div>;
};

export default MyComponent;
