import Link from "next/link";

interface AnchorButtonComponentProps {
  href: string;
  children: React.ReactNode;
}

export default function AnchorButtonComponent({
  href,
  children,
}: AnchorButtonComponentProps) {
  return (
    <Link href={href}>
      <button className="btn btn-primary btn-lg text-4xl">{children}</button>
    </Link>
  );
}
