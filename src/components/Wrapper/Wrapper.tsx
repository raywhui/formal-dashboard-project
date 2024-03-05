type WrapperProps = {
  children?: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="mb-4 md:mb-10">{children}</div>;
};
