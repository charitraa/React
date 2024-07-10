interface Props {
  isOn: boolean;
  toggleSwitch: () => void;
}

const ToggleChild = ({ isOn, toggleSwitch }: Props) => {
  return (
    <div className="text-lg mb-4">
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button
        className="px-4 py-2 mt-4 text-lg bg-blue-500 text-white rounded"
        onClick={toggleSwitch}
      >
        Toggle Switch
      </button>
    </div>
  );
};

export default ToggleChild;
