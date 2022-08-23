import NavBar from "./NavBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
