import React from "react";
import BlogDetailsCommentArea from "./blog-details-comment-area";
import Image from "next/image";
import Link from "next/link";
// internal
import BlogSidebar from "../blog-sidebar";
import blog_1 from "@/assets/images/blog/blog_img_08.jpg";
import blog_2 from "@/assets/images/blog/blog_img_16.jpg";
import blog_3 from "@/assets/images/blog/blog_img_17.jpg";
import icon from "@/assets/images/icon/icon_93.svg";
import BlogDetailsForm from "@/components/forms/blog-details-form";
import { IBlog } from "@/types/blog-d-t";

const BlogDetailsArea = ({ blog }: { blog: IBlog }) => {
  const { date, title, post_info, img, content } = blog || {};
  return (
    <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${img.src})` }}
              >
                <div className="date">{date}</div>
              </figure>
              <div className="post-data">
                <div className="post-info">{post_info}</div>
                <div className="blog-title">
                  <h4>{title}</h4>
                </div>
                <div className="post-details-meta">
                  {/* Rendering content headings and paragraphs dynamically */}
                  {content.map((item, index) => (
                    <div key={index}>
                      <h3>
                       {item.heading}
                      </h3>
                      <p>{item.paragraph}</p>
                    </div>
                  ))}
                  {/* End of content rendering */}
                  <p>
                    Tempus imperdiet nulla malesuada pellentesque elit eget
                    gravida cum. Sit amet ris nullam eget felis. Enim praesent
                    elementum facilisis leo. Ultricies leo integer.
                  </p>
                  <div className="quote-wrapper">
                    <div className="wrapper">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <Image src={icon} alt="icon" className="lazy-img" />
                      </div>
                      <div className="row">
                        <div className="col-xxl-9 col-xl-11 m-auto">
                          <h3>
                            Grow wealth like a tree, roots in savings, branches
                            reaching toward diverse investments.
                          </h3>
                        </div>
                      </div>
                      <h6>
                        James Bond. <span>Founder Agro</span>
                      </h6>
                    </div>
                  </div>
                  {/* uncomment add images in blog dynamicaly  */}
                  {/* <div className="row img-gallery">
                    <div className="col-sm-8">
                      <Image
                        src={blog_2}
                        alt="blog-img"
                        className="lazy-img w-100"
                      />
                    </div>
                    <div className="col-sm-4">
                      <Image
                        src={blog_3}
                        alt="blog-img"
                        className="lazy-img w-100"
                      />
                    </div>
                  </div> */}
                  {/* <h3>Work Harder & Gain Success</h3>
                  <p>
                    One touch of a red-hot stove is usually all we need to avoid
                    that kind of discomfort in quis elit future. The same Duis
                    aute irure dolor in reprehenderit.
                  </p>
                  <ul className="style-none list-item">
                    <li>Find the problem first</li>
                    <li>Make research and find out the solution</li>
                    <li>Finalize the solution & apply.</li>
                  </ul>
                  <p>
                    One touch of a red-hot stove is usually all we need to avoid
                    that kind of discomfort in quis elit future. The same Duis
                    aute irure dolor in reprehenderit. sunt in culpa qui
                    official deserunt mollit anim id est laborum.
                  </p> */}
                </div>
                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  <ul className="d-flex align-items-center tags style-none pt-20">
                    <li>Tag:</li>
                    <li>
                      <Link href="#">Finance</Link>
                    </li>
                    <li>
                      <Link href="#">Loan</Link>
                    </li>
                    <li>
                      <Link href="#">Banking</Link>
                    </li>
                  </ul>
                  <ul className="d-flex share-icon align-items-center style-none pt-20">
                    <li>Share:</li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            {/* blog comment area start */}
            {/* <BlogDetailsCommentArea /> */}
            {/* blog comment area end */}
            {/* <div className="blog-comment-form grey-bg">
              <h3 className="blog-inner-title">Add Your Comments</h3>
              <p>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  className="text-decoration-underline fw-500"
                >
                  Sign in
                </a>{" "}
                to post your comment or signup if you do not have any account.
              </p>
              <BlogDetailsForm/>
            </div> */}
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

export default BlogDetailsArea;
