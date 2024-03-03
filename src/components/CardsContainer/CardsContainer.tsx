type CardsContainerProps = {
  children?: React.ReactNode;
};

export const CardsContainer = ({ children }: CardsContainerProps) => {
  return (
    <div className="max-w-full">
      <div className="flex flex-nowrap gap-4 whitespace-nowrap overflow-x-auto px-16">
        {children}
      </div>
    </div>
  );
};
