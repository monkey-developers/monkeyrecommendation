type Props = {
  children: any;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="h-full w-screen bg-main-theme bg-[url('background.svg')] bg-cover text-white sm:px-20 ">
      <section>{children}</section>
    </main>
  );
};
