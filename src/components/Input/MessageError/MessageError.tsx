import * as I from "./MessageError.interface";

export const MessageError = ({ message }: I.MessageErrorProps) => {
  return <p className="text-sm text-red-500">{message}</p>;
};
