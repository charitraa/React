interface Props {
  isOn: boolean;
  toggleSwitch: () => void;
}

const ToggleChild = ({ isOn, toggleSwitch }: Props) => {
  return (
    <div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleSwitch}>Toggle Switch</button>
    </div>
  );
};

export default ToggleChild;
