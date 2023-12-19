// "use client";
import BlogPosts from "../../components/BlogPosts";
import Navbar from "../../components/Navbar";

export default function BlogPage() {
  const links = [
    {
      text: "HOME",
      link: "/",
    },
  ];

  return (
    <main className="flex justify-center  text-white">
      <div className="bg-black h-screen w-screen max-w-[100rem]">
        <Navbar links={links} />
        <section className="">
          <div className="py-10 bg-black h-screen">
            <BlogPosts />
          </div>
        </section>
      </div>
    </main>
  );
}
