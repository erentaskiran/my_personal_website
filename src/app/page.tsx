import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

async function getBlogs() {
  const response = await fetch('http://localhost:3000/api/blog');
  const blogs: Blog[] = await response.json();
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

export default async function Home() {
  const blogs: Blog[] = await getBlogs();
  const blog = blogs[0];

  return (
    <main>
      <section className="max-w-sm mx-auto md:max-w-2xl lg:max-w-5xl">
        <div className=" max-h-96 mt-20 w-1/1">
          <div className="bg-zinc-100 border rounded-2xl h-full  ">
            <h1 className="text-3xl  max-h-fit max-w-fit ml-10 mt-10">Hi! I am Eren</h1>
            <p className="m-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veritatis. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Illum repellat laboriosam corporis, reprehenderit delectus nulla vel
              perspiciatis suscipit, fugiat odit facere quibusdam totam quia voluptate aliquam. Beatae cupiditate
              nesciunt, odit error perferendis sunt eos numquam ducimus magni quaerat repellendus quae dolor fugit
              repudiandae ab eveniet amet omnis necessitatibus dolorem eaque veritatis tempora optio? Nisi cumque id
              nobis corrupti adipisci labore provident dolor sit aliquid debitis
            </p>
          </div>
        </div>
        <div className="w-1/1">
          <h1 className="text-3xl flex justify-center mt-6">Latest blog</h1>
        </div>
        <div className="mt-10">
          <Link href={`https://storage.googleapis.com/my-site-92f1a.appspot.com/images/${blog.slug}.jpg`} className='flex justify-center'>
            <BlogCard
              image={`https://storage.googleapis.com/my-site-92f1a.appspot.com/images/${blog.slug}.jpg`}
              date={blog.date}
              title={blog.title}
              description={blog.details}
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
