interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className="overlay fixed bg-black/50 top-0 right-0 w-full h-full"
      />
      <div className="modal w-[calc(100%-40px)] sm:w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h2 className="text-center text-2xl mb-2">{title}</h2>
        <div>{children}</div>
      </div>
    </>
  );
};
