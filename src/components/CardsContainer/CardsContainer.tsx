type CardsContainerProps = {
  children?: React.ReactNode;
};

export const CardsContainer = ({ children }: CardsContainerProps) => {
  return (
    <div className="max-w-full">
      <div className="px-6 flex-col flex gap-4 overflow-x-auto md:px-16 md:flex-row md:flex-nowrap md:whitespace-nowrap">
        {children}
      </div>
    </div>
  );
};
