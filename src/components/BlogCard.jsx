import{motion,AnimatePresence} from "motion/react";
import {MDXProvider} from '@mdx-js/react';
import {useState} from "react";

export function Blogcard({content}){
    
    const[expanded,setExpanded]=useState(false)
    
    const components={
        h1:(props)=><h1 {...props}/>,
        p:(props)=><p {...props}/>,
    };

    // const now= new Date();
    // let time=now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();

    return <motion.div
    onClick={()=>setExpanded(!expanded)}
    whileHover={{scale:1.05}}
    transition={{duration:0.3}}
    className="bg-[#171717] w-[900px] mx-auto mt-2 p-3 h-44 rounded-md border-1 border-white shadow-lg shadow-amber-500">
        <div className="bg-black h-12 rounded-sm pl-2 pt-1 flex gap-2 text-3xl">
          {/* <div className="grid gird-cols-8"> */}
            <div className="font-medium text-white">
                <MDXProvider components={components}>{content.h1}</MDXProvider>
            </div>
            <div className="text-white">|</div>
            <div className="text-white font-medium opacity-80">
                {/* <time datetime="">{time}</time> */}Hi
            </div>
          {/* </div> */}
        </div>
        <AnimatePresence>
          <motion.div
          initial={{height: 96}}
          animate={{height: expanded ? 1000 : 96 }}
          exit={{height:96}}
          transition={{ duration: 0.3 }}
          className="bg-black max-h-24 line-clamp-5 mt-1 rounded-md pl-2 pr-2 pb-1 text-white font-medium overflow-hidden">
            <MDXProvider components={components}>{content}</MDXProvider>
          </motion.div>
        </AnimatePresence>
        
    </motion.div>
}