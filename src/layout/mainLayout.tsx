type Props = {
  children: any;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen bg-main-theme sm:px-20 bg-[url('background.svg')] bg-cover">
      {children}
    </div>
  );
};
