import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
  className: string;
}

export default function ButtonLink({ to, children, className }: Props) {
  return (
    <Link to={to}>
      <button className={className}>{children}</button>
    </Link>
  );
}
