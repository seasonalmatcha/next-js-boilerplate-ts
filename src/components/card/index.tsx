import { FC, ReactNode } from 'react';

interface CardProps {
  title: string;
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-blue-400 rounded-lg ring-4 ring-blue-300 w-[400px] max-w-full">
      <div className="px-6 py-4 border-b">
        <h3 className="text-2xl text-center text-white font-bold">{title}</h3>
      </div>
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};
