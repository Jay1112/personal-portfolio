import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState({ width : window.innerWidth, height : window.innerHeight});

  useEffect(() => {
    const handleResize = () => { 
      setSize({ width : window.innerWidth, height : window.innerHeight});
    }
    window.addEventListener("resize", handleResize);
    // Clean up!
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { size };
}

export default useWindowSize;