interface Props {
  name: string;
  caste: string;
}

const GreetComponent = ({ name, caste }: Props) => {
  return (
    <div>
      hello, {name} {caste}! we are learning props in react
    </div>
  );
};

export default GreetComponent;
