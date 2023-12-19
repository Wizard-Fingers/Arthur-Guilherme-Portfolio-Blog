import Navbar from "../components/Navbar";
export default function Home() {
  const links = [
    {
      text: "Blog",
      link: "/blog",
    },
  ];
  return (
    <main>
      <Navbar links={links} />
      <div className="bg-black h-screen w-screen max-w-[100rem]">
        <h1 className="text-white">home page</h1>
      </div>
    </main>
  );
}
