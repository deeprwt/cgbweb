import React from "react";
import Image from "next/image";
// internal
import { IBlog } from "@/types/blog-d-t";
import blog_data from "@/data/blog-data";
import Link from "next/link";

// blog item
function BlogItem({ blog }: { blog: IBlog }) {
  return (
    <article className="blog-meta-three pt-60 lg-pt-40 pb-70 lg-pb-40 h-100 wow fadeInUp">
      <div className="post-data h-100 w-100 d-inline-flex flex-column pe-xl-4">
        <div>
          <Link href={`/blog-details/${blog.id}`} className="tag fw-500 text-uppercase">
            {blog.category}
          </Link>
        </div>
        <Link href={`/blog-details/${blog.id}`} className="d-block">
          <h4 className="tran3s blog-title">{blog.title}</h4>
        </Link>
        <div className="post-info mb-45 lg-mb-30">
          <span className="fw-500 text-dark">{blog.post_info} -</span>{" "}
          {blog.date}
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Image src={blog.img} alt="logo" className="lazy-img" />
          <Link href={`/blog-details/${blog.id}`}
            className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
          >
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}

const BlogsHomeFive = () => {
  const blog_items = blog_data.filter((b) => b.page === "home-5");
  return (
    <div className="blog-section-five position-relative border-100 pt-100 lg-pt-80">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-md-6">
              <div className="title-four mb-25">
                <h2>Our Recent News & Insights.</h2>
              </div>
            </div>
          </div>

          <div className="section-btn">
            <Link
              href="/blog"
              className="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s"
            >
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper position-relative mt-45 lg-mt-20">
        <div className="container">
          <div className="row justify-content-between">
            {blog_items.map((b, i) => (
              <div key={i} className="col-md-5">
                <BlogItem blog={b} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHomeFive;
