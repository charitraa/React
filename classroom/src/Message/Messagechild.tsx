interface Props {
  message: string;
}

const MessageChild = ({ message }: Props) => {
  return (
    <div>
      <p>Current Message: {message}</p>
    </div>
  );
};

export default MessageChild;
