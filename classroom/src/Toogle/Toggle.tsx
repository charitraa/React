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
    </div>
  );
};

export default ToggleParent;
