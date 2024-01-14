type Props = {
  children: any;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="h-[calc(100vh-64px)] w-screen bg-main-theme bg-[url('background.svg')] bg-cover text-white overflow-y-scroll sm:px-20 pl-[2px]">
      <section>{children}</section>
    </main>
  );
};
