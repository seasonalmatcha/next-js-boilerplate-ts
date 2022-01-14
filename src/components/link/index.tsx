import { FC } from 'react';

interface LinkProps {
  href: string;
  label: string;
}

export const Link: FC<LinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-pink-300 hover:text-pink-400 transition-colors underline underline-offset-1 decoration-dashed decoration-1"
    >
      {label}
    </a>
  );
};
