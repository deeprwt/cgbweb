import React from "react";
import { IBlog } from "@/types/blog-d-t";
import Link from "next/link";

const BlogGridItem = ({ blog }: { blog: IBlog }) => {
  return (
    <article
      className="blog-meta-two mb-80 lg-mb-50 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <figure
        className="post-img rounded-5 position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${blog.img.src})` }}
      >
        <Link href={`/blog-details/${blog.id}`}
          className="stretched-link rounded-5 date tran3s"
        >
          {blog.date.split(" ")[0]} {blog.date.split(" ")[1]}
        </Link>
      </figure>
      <div className="post-data">
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
        <div className="post-info">{blog.post_info}</div>
      </div>
    </article>
  );
};

export default BlogGridItem;
