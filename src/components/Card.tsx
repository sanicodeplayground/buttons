'use client';

type CardProps = {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center bg-neutral-500 rounded-md px-0 py-24 md:px-2">
      <div className="absolute right-2 top-2 cursor-pointer bg-transparent p-2">
        icon
      </div>
      {children}
    </div>
  );
};
