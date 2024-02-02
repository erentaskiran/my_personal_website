import { getStorage, ref } from 'firebase/storage';
import { NextResponse } from 'next/server'



export async function GET(request: Request, {params}: {params: {slug: string}}){
    const blogRef= await fetch(`https://storage.googleapis.com/my-site-92f1a.appspot.com/blogs/${params.slug}.md`)
    const blogText= await blogRef.text().then((item)=>{return item});
    
  return NextResponse.json({blog:blogText});
}
