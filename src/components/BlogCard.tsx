import { Link } from "react-router-dom"

export interface BlogCardProps{
    authorName: String,
    title: String,
    content: String,
    publishedDate: String,
    id: string
}

export const BlogCard = ({authorName,id, title, content, publishedDate}:BlogCardProps)=>{
    return <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 p-4 cursor-pointer">
        <div className="flex">
                <Avatar size={"small"} name={authorName} />
            <div className="flex justify-center text-sm flex-col pl-2 font-extralight">
                {authorName}
            </div>
            <div className="flex justify-center flex-col pl-2">
                <Circle/>
                </div>
            <div className="pl-2 flex-col flex text-sm justify-center font-thin text-slate-500 ">
                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-semibold">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-sm font-thin text-slate-500 pt-2">
            {`${Math.ceil(content.length)/100} minute(s) read`}
        </div>
    </div>
    </Link>
}

function Circle(){
    return <div className="w-1 h-1  overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600">

    </div>
}

export function Avatar({name, size="small"}:{name:String, size:"small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center ${size==="small"?"w-6 h-6":"w-8 h-8"} overflow-hidden bg-gray-800 rounded-full `}>
    <span className={`${size==="small"?"text-xs":"text-md"}font-medium text-gray-100 dark:text-gray-300`}>{name[0]}</span>
</div>

}