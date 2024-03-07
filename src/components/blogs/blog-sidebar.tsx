import React from "react";
import Link from "next/link";
import blog_data from "@/data/blog-data";

const BlogSidebar = () => {
  const recent_blogs = blog_data.filter((b) => b.page === "home").slice(-2);
  return (
    <div className="blog-sidebar md-mt-60 ps-xxl-4">
      <form action="#" className="sidebar-search">
        <input type="text" placeholder="Search.." />
        <button className="tran3s">
          <i className="bi bi-search"></i>
        </button>
      </form>
      {/* <div className="blog-category mt-60 lg-mt-40">
        <h3 className="sidebar-title">Category</h3>
        <ul className="style-none">
          <li>
            <Link href="#">
              Digital <span>(3)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              Marketing <span>(4)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              Consultation <span>(8)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              Payments <span>(5)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              Banking <span>(7)</span>
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="blog-recent-news mt-60 lg-mt-40">
        <h3 className="sidebar-title">Recent News</h3>
        {recent_blogs.map((b,i) => (
        <article key={i} className="recent-news">
          <figure
            className="post-img"
            style={{
              backgroundImage: `url(${b.img.src})`,
            }}
          ></figure>
          <div className="post-data">
            <div className="date">{b.date}</div>
            <Link href={`/blog-details/${b.id}`} className="blog-title">
              <h3>{b.title}</h3>
            </Link>
          </div>
        </article>
        ))}
      </div>

      {/* <div className="blog-keyword mt-60 lg-mt-40">
        <h3 className="sidebar-title">Keywords</h3>
        <ul className="style-none d-flex flex-wrap">
          <li>
            <Link href="#">Finance</Link>
          </li>
          <li>
            <Link href="#">Business</Link>
          </li>
          <li>
            <Link href="#">Online Banking</Link>
          </li>
          <li>
            <Link href="#">Consultation</Link>
          </li>
          <li>
            <Link href="#">Branding</Link>
          </li>
          <li>
            <Link href="#">Cards</Link>
          </li>
          <li>
            <Link href="#">Payments</Link>
          </li>
          <li>
            <Link href="#">Loan</Link>
          </li>
        </ul>
      </div> */}
      <div className="contact-banner text-center mt-50 lg-mt-30">
        <h3 className="mb-20">
          Any Questions? <br />
          Let’s talk
        </h3>
        <Link href="/contact" className="tran3s fw-500">
          Let’s Talk
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
