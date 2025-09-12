import{motion,AnimatePresence} from "motion/react";
import {MDXProvider} from '@mdx-js/react';
import {useState} from "react";
import { useNavigate } from "react-router";

export function Blogcard({content,slug}){
    
    // const[expanded,setExpanded]=useState(false)
    let navigate=useNavigate();
    
    

    const components={
        h1:(props)=><h1 {...props}/>,
        p:(props)=><p {...props}/>,
    };

    // const now= new Date();
    // let time=now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();

    return <motion.div
    onClick={()=>navigate(`/Blog/${slug}`)}
    whileHover={{scale:1.05}}
    transition={{duration:0.3}}
    className="bg-[#171717] w-[900px] mx-auto mt-4 p-3 h-22 rounded-md ">      
          <div className="bg-[#171717] max-h-24 line-clamp-2 truncate mt-1 rounded-md pl-2 pr-2 pb-1 text-white font-medium overflow-hidden">
            <MDXProvider components={components}>{content}</MDXProvider>
          </div>
        
        
    </motion.div>
}