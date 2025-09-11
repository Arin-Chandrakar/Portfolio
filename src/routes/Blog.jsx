import{motion} from "motion/react";
import {MDXProvider} from '@mdx-js/react'
import Reality from "/Portfolio/Portfolio/BlogPosts/Reality.md"
import {Blogcard} from "../components/BlogCard"

export function Blog(){
    return(
        <div>
           <div className="h-26 w-[900px] mx-auto mt-20 font-sans text-center text-white">
            <h1 className="font-bold text-5xl">BLOG</h1>
            <h2 className="font-medium text-2xl">This is my little section where i try to be oversmart and sometimes crash out.</h2>
           </div>
           <Blogcard content={<Reality/>}/>
        </div>
    )
}

