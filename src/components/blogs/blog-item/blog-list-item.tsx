import React from "react";
import { IBlog } from "@/types/blog-d-t";
import Link from "next/link";

const BlogListItem = ({ blog }: { blog: IBlog }) => {
  return (
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
      <figure
        className="post-img position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${blog.img.src})` }}
      >
        <Link href={`/blog-details/${blog.id}`} className="stretched-link date tran3s">
        {blog.date.split(" ")[0]} {blog.date.split(" ")[1]}
        </Link>
      </figure>
      <div className="post-data">
        <div className="post-info">{blog.post_info}</div>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/blog-details/${blog.id}`} className="blog-title">
            <h4>{blog.title}</h4>
          </Link>
          <Link href={`/blog-details/${blog.id}`}
            className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
          >
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogListItem;
