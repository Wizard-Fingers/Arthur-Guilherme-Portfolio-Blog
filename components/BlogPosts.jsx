import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPosts() {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center mt-6">
      {blogs.map((blog) => (
        <Link
          href={"../blogs/" + blog.slug}
          passHref
          key={blog.slug}
          className="border border-white p-4 w-[15rem] mx-auto my-10 lg:hover:scale-110 lg:transition-all lg:duration-500"
        >
          <div className="py-2 flex justify-between align-middle gap-2">
            <div>
              <h3 className="text-lg font-bold text-center -translate-y-10 bg-black">
                {blog.meta.title}
              </h3>{" "}
              <div className="my-auto text-white text-sm flex justify-end">
                <p>{blog.meta.date}</p>
              </div>
              <div>
                <p className="text-white">{blog.meta.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
