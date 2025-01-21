import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:Blog})=>{
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text 5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        posted on 20 jan 2025
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                    
                </div>
                <div className="col-span-4">
                    <div className="text-slate-500 text-lg">
                       Author
                    </div>
                    <div className="flex">
                        <div className="pr-4 flex justify-center flex-col">
                            <Avatar size={"big"} name={blog.author.name || "Anonomus"} />
                        </div>
                        <div>
                            <div className="text-lg font-bold">
                                {blog.author.name || "Anonomus"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}