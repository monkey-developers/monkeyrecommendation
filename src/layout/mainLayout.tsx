type Props = {
  children: any;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="h-screen w-screen bg-main-theme sm:px-20 bg-[url('background.svg')] bg-cover text-white">
      <section>{children}</section>
    </main>
  );
};
