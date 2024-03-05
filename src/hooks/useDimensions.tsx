import * as React from "react";

export const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {
  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0,
    };
  };

  const [dimensions, setDimensions] = React.useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useLayoutEffect(() => {
    handleResize();
  }, []);

  return dimensions;
};
