type WrapperProps = {
  children?: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="mb-10">{children}</div>;
};
