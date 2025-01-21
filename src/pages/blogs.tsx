import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton"

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs()
    if(loading){
        return <div>
           <BlogSkeleton/>
        </div>
    }

    return <div>
        <Appbar/>
    <div className="flex justify-center">    
        <div className=" max-w-xl">
            {blogs.map(blog => <BlogCard 
            id={blog.id}
            authorName={blog.author.name}
            title={blog.title} 
            content={blog.content} 
            publishedDate={"20 jan 2025"} />)}
            

            
        </div>
    </div>
    </div>
}