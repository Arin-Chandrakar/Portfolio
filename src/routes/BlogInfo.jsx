import {useNavigate,useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"

const blogModules = import.meta.glob("/BlogPosts/*.md", {eager: true});

const blogs = Object.fromEntries(
  Object.entries(blogModules).map(([path, module]) => {
    // taking file name without extension
    const slug = path.split("/").pop().replace(".md", "").toLowerCase();
    return [slug, module.default];
  })
);

export function FullBlog() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/BlogPosts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch(() => setContent("Blog not found"));
  }, [slug]);

  return (
    <div className="font-medium text-white w-[900px] mx-auto">
      <ReactMarkdown
        className="prose prose-invert"
        components={{
          h1: (props) => <h1 className="h-20 mt-20 text-5xl" {...props} />,
          p: (props) => <p {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}