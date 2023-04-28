interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p className="text-sm text-center text-red-700">{error}</p>;
};
