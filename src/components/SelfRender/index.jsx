import { useState, useRef } from "react";
import "./SelfRender.css";

const SelfRender = () => {
  // eslint-disable-next-line no-unused-vars
  const [obj, makeForceRender] = useState();
  const onMakeRerender = () => makeForceRender({});
  const num = useRef(-1);
  const onShowRendersNumber = () => {
    num.current++;
    alert(`There have been ${num.current} rerenders`);
  };
  return (
    <div className="selfrender">
      <button onClick={onShowRendersNumber}>
        Show how many rererenders were
      </button>
      <button onClick={onMakeRerender}>Make rerender</button>
    </div>
  );
};

export default SelfRender;
