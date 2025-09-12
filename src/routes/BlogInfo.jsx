import {useNavigate,useParams} from "react-router-dom";
import {MDXProvider} from '@mdx-js/react';

const blogModules = import.meta.glob("../BlogPosts/*.md", {eager: true});

const blogs = Object.fromEntries(
  Object.entries(blogModules).map(([path, module]) => {
    // taking file name without extension
    const slug = path.split("/").pop().replace(".md", "").toLowerCase();
    return [slug, module.default];
  })
);

export function FullBlog({content}){

    

    const {slug}=useParams();
    

    const components={
        h1:(props)=><h1 className=" h-20 mt-20 text-5xl" {...props}/>,
        p:(props)=><p {...props}/>, 
    };

    const BlogContent=blogs[slug.toLowerCase()]

    if (!BlogContent) {
    return <div className="text-white">Blog not found</div>;
    }
    return(
        <div className="font-medium text-white w-[900px] mx-auto">
            <div >
                <BlogContent components={components}/>
            </div>
            
        </div>
    )
}