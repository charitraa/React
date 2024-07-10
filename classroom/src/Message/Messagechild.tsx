interface Props {
  message: string;
}

const MessageChild = ({ message }: Props) => {
  return (
    <div className="text-lg mb-4">
      <p>Current Message: {message}</p>
    </div>
  );
};

export default MessageChild;
