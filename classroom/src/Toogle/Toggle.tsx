import { useState } from 'react';
import ToggleChild from './Togglechild';

const ToggleParent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <ToggleChild isOn={isOn} toggleSwitch={toggleSwitch} />
      <button onClick={toggleSwitch}>Toggle Switch</button>
    </div>
  );
};

export default ToggleParent;
