'use client'
import React from "react";
import blog_data from "@/data/blog-data";
import BlogGridItem from "./blog-item/blog-grid-item";
import usePagination from "@/hooks/use-pagination";
import { IBlog } from "@/types/blog-d-t";
import Pagination from "@/ui/pagination";

const BlogGridArea = () => {
  const blog_items = blog_data.filter((b) => b.page === "blog-grid");
  const {currentItems,handlePageClick,pageCount} = usePagination<IBlog>(blog_items,4);
  return (
    <div className="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="position-relative">
          <div className="row gx-xxl-5">
            {currentItems?.map((b, i) => (
              <div key={i} className="col-md-6">
                <BlogGridItem blog={b} />
              </div>
            ))}
          </div>

          <div className="pagination-one mt-20">
            <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridArea;
