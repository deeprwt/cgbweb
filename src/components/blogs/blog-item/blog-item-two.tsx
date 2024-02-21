import React from "react";
import Link from "next/link";
import { IBlog } from "@/types/blog-d-t";

const BlogItemTwo = ({ blog }: { blog: IBlog }) => {
  return (
    <article className="blog-meta-one mt-35 sm-mt-30 wow fadeInUp">
      <div className="post-data">
        <div className="post-info">
          <span className="fw-500 text-dark">{blog.author} -</span> {blog.date}
        </div>
        <Link href={`/blog-details/${blog.id}`} className="mt-15">
          <h4 className="tran3s blog-title">{blog.title}</h4>
        </Link>
      </div>
      <figure
        className="post-img position-relative d-flex justify-content-end align-items-end m0"
        style={{ backgroundImage: `url(${blog.img.src})` }}
      >
        <Link href={`/blog-details/${blog.id}`}
          className="round-btn stretched-link rounded-circle d-flex align-items-center justify-content-center tran3s"
        >
          <i className="bi bi-arrow-up-right"></i>
        </Link>
      </figure>
    </article>
  );
};

export default BlogItemTwo;
