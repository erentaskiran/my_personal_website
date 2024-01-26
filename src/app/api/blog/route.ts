import { collection, doc, getDocs } from 'firebase/firestore';
import { blogPosts } from '../../../../blog-posts';
import { db } from '../../../../fireabse';
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
  const blogsRef = collection(db, "blogs");
  const api_blogs= await getDocs(blogsRef); 
  const blogs=api_blogs.docs.map((doc)=>doc.data());
  return NextResponse.json(blogs);
}
