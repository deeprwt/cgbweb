import React from "react";
import Link from "next/link";
import blog_data from "@/data/blog-data";
import BlogItemTwo from "./blog-item/blog-item-two";

const HomeTwoBlogs = () => {
  const blog_item = blog_data.filter((b) => b.page === "blog-list");
  return (
    <div className="blog-section-one position-relative lg-mt-80 pt-120 lg-pt-80">
      <div className="container">
        <div className="position-relative">
          <div className="title-one mb-20 lg-mb-10">
            <h2>Latest Blogs.</h2>
          </div>
          <p className="text-lg mb-40 lg-mb-10">
          Unlock fresh perspectives and stay informed with our newest blog posts.
          </p>

          <div className="row gx-xxl-5">
            {blog_item.map((b, i) => (
              <div key={i} className="col-md-4">
                <BlogItemTwo blog={b} />
              </div>
            ))}
          </div>

          <div className="section-btn sm-mt-40">
            <Link href="/blog" className="btn-five icon-link">
              <span className="text">See all Blogs</span>
              <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwoBlogs;
