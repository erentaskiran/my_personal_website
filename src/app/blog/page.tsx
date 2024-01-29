import { BlogCard } from '@/components/BlogCard';
import Link from 'next/link';

async function getBlogs() {
  const response = await fetch('http://localhost:3000/api/blog');
  const blogs = await response.json();
  return blogs;
}

type Blog = {
  title: string;
  slug: string;
  details: string;
  date: string;
  image: string;
  lang?: string;
};

export default async function BlogComponent() {
  const blogs = await getBlogs();

  return (
    <main>
      <h1 className="text-4xl flex justify-center m-10"> My Blogs</h1>
      <div className="flex flex-col gap-6 ">
        {blogs.map((blog: Blog) => (
          <Link href={`/blog/${blog.slug}`} className='flex justify-center' key={blog.slug}>
            <BlogCard
              image={`https://storage.googleapis.com/my-site-92f1a.appspot.com/images/${blog.slug}.jpg`}
              date={blog.date}
              title={blog.title}
              description={blog.details}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
