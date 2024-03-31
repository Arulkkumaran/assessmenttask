import { useState, useEffect } from "react";
import { ProgressIndicator } from "@fluentui/react/lib/ProgressIndicator";

const intervalDelay = 100;
const intervalIncrement = 0.01;

const ProgressBarComponent = () => {
  const [percentComplete, setPercentComplete] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPercentComplete((intervalIncrement + percentComplete) % 1);
    }, intervalDelay);
    return () => {
      clearInterval(id);
    };
  });

  return <ProgressIndicator percentComplete={percentComplete} barHeight={8} />;
};

export default ProgressBarComponent;
