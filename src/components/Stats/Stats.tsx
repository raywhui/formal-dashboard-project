type StatsProps = {
  title: string;
  stat: string;
};

export const Stats = ({ title, stat }: StatsProps) => {
  return (
    <div className="bg-brand-fill-50 rounded-md w-full p-4">
      <p className="text-brand-text-secondary font-medium mb-2">{title}</p>
      <p className="text-3xl font-bold text-brand-text-primary">{stat}</p>
    </div>
  );
};
