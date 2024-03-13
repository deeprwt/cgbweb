'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import BlogSidebar from "./blog-sidebar";
import blog_data from "@/data/blog-data";
import quote from "@/assets/images/icon/icon_93.svg";
import BlogListItem from "./blog-item/blog-list-item";
import usePagination from "@/hooks/use-pagination";
import { IBlog } from "@/types/blog-d-t";
import Pagination from "@/ui/pagination";

const BlogListArea = () => {
  const blog_items = blog_data.filter((b) => b.page === "blog-list");
  const {currentItems,handlePageClick,pageCount} = usePagination<IBlog>(blog_items,4);
  return (
    <div className="blog-section-six position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            {currentItems?.map((b, i) =>
              !b.quote_blog ? (
                <BlogListItem key={i} blog={b} />
                ) : (
                  <article key={i} className="blog-meta-four mb-50 lg-mb-40">
                  <div className="post-data">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                      <Image
                        src={quote}
                        alt="quote-icon"
                        className="lazy-img"
                        />
                    </div>
                    <Link href={`/blog-details/${b.id}`} className="blog-title">
                      <h4>{`"${b.title}"`}</h4>
                    </Link>
                  </div>
                  <h6 className="post-info">
                    {b.author}. <span>{b.designation}</span>
                  </h6>
                </article>
              )
            )}
            <div className="pagination-one mt-80 lg-mt-50">
              <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
            </div>
          </div>

          <div className="col-lg-4 col-md-8">
            {/* blog sidebar start */}
            <BlogSidebar />
            {/* blog sidebar end */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogListArea;
