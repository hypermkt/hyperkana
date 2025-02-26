interface ButtonComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonComponent({
  children,
  onClick,
}: ButtonComponentProps) {
  return (
    <button onClick={onClick} className="btn btn-primary btn-lg text-4xl w-40">
      {children}
    </button>
  );
}
