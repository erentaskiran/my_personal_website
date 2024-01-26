import Link from "next/link";

async function getBlogs() {
  const blogs = await fetch('http://localhost:3000/api/blog');
  return blogs.json();
}
type Blog = {
  title: string;
  slug: string;
  details: string;
  date: string;
  image: string;
  lang?: string;
};

export default async function Blog() {
  const blog = await getBlogs();


  return (
    <main>
      <div className="flex flex-col gap-6 border">
      {blog.blogs.map((blog: Blog) => (
        <Link href={`/blog/${blog.slug}`} key={blog.slug} >
          <img src={`https://storage.googleapis.com/my-site-92f1a.appspot.com/images/${blog.slug}.jpg`} alt={blog.slug} />
          <time>{blog.date}</time>
          <h1>{blog.title}</h1>
          <p>{blog.details}</p>
        </Link>
      ))}
      </div>
      Blog
    </main>
  );
}
