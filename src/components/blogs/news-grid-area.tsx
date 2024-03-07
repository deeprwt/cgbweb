'use client'
import React from "react";
// import blog_data from "@/data/blog-data";
import news_data from "@/data/news-data";
import NewsGridItem from "./blog-item/news-grid-item";
import usePagination from "@/hooks/use-pagination";
import { IBlog } from "@/types/blog-d-t";
import Pagination from "@/ui/pagination";

const NewsGridArea = () => {
  const blog_items = news_data.filter((b) => b.page === "home");
  const {currentItems,handlePageClick,pageCount} = usePagination<IBlog>(blog_items,4);
  return (
    <div className="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="position-relative">
          <div className="row gx-xxl-5">
            {currentItems?.map((b, i) => (
              <div key={i} className="col-md-6">
                <NewsGridItem blog={b} />
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

export default NewsGridArea;
