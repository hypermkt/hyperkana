interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="btn btn-primary btn-lg text-4xl w-40">
      {children}
    </button>
  );
}
