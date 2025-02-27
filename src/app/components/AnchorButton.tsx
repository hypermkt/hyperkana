import Link from "next/link";

interface AnchorButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function AnchorButton({ href, children }: AnchorButtonProps) {
  return (
    <Link href={href}>
      <button className="btn btn-primary btn-lg text-4xl">{children}</button>
    </Link>
  );
}
