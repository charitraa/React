interface Props {
  name: string;
}

const GreetComponent = ({ name }: Props) => {
  return <div>hello, {name}! we are learning props in react</div>;
};

export default GreetComponent;
