import { doc, setDoc } from 'firebase/firestore';
import { blogPosts } from '../../../../../blog-posts';
import { db } from '../../../../../fireabse';
import { NextResponse } from 'next/server'

type Blog = {
  title: string;
  slug: string;
  details: string;
  date: string; 
  image: string;
  lang?: string;
};

export async function GET() {
  const blogs: Blog[] = blogPosts();
  blogs.forEach((blog:Blog)=>{
    setDoc(doc(db, "blogs", blog.slug), blog);
  }) 
  return NextResponse.json(blogs);
}
