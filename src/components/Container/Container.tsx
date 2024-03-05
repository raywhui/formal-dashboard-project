type ContainerProps = {
  children?: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="my-4 md:my-16">{children}</div>;
};
