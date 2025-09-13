import{motion} from "motion/react";
import {MDXProvider} from '@mdx-js/react'
import Reality from "/BlogPosts/Reality.md"
import {Blogcard} from "../components/BlogCard"

export function BlogTable(){

    return(
        <div>
           <div className="h-26 w-[900px] mx-auto mt-20 font-sans text-center text-white">
            <h1 className="font-bold text-5xl font-myfont">BLOG</h1>
            <h2 className="font-medium text-2xl">This is my little section where i try to be oversmart and sometimes crash out.</h2>
            <hr className="opacity-50 mt-5" />
           </div>
           
           <Blogcard content={<Reality/>} slug="reality"/>
        </div>
    )
}

