import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../../fireabse';
import { NextResponse } from 'next/server'


export async function GET() {
  const blogsRef = collection(db, "blogs");
  const api_blogs= await getDocs(blogsRef); 
  const blogs=api_blogs.docs.map((doc)=>doc.data());
  console.log(blogs);
  return NextResponse.json(blogs);
}
