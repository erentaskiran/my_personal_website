import ReactMarkdown from 'react-markdown';

async function getBlogs(slug: string) {
  const blogs = await fetch(`http://localhost:3000/api/blog/${slug}`);
  return blogs.json();
}

export default async function Slug({ params }: { params: { slug: string } }) {
  const blogRes = await getBlogs(params.slug);

  return (
    <main>
      <div className="flex justify-center">
        <article className="prose lg:prose-xl">
          <ReactMarkdown>{blogRes.blog}</ReactMarkdown>
        </article>
      </div>
      Blog
    </main>
  );
}
