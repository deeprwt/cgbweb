import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import avatar_1 from "@/assets/images/blog/avatar_01.jpg";
import avatar_2 from "@/assets/images/blog/avatar_02.jpg";

const BlogDetailsCommentArea = () => {
  return (
    <div className="blog-comment-area grey-bg">
      <h3 className="blog-inner-title pb-15">Comments</h3>
      <div className="comment d-flex">
        <Image
          src={avatar_1}
          alt="avatar"
          className="lazy-img user-avatar rounded-circle"
        />
        <div className="comment-text">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="name fw-500">Declan Thornheart</div>
            <div className="date">13 June, 23, 7:30pm</div>
          </div>
          <p>
            Sunt in culpa qui official deserunt mollit anim id est
            laborum.Suspendisse interdum consectetur libero id faucib nisl.
            Lacus vel facilisis volutpat est velit egestas.
          </p>
          <Link href="#" className="reply-btn fw-500 tran3s">
            Reply
          </Link>
          <div className="comment reply-comment d-flex">
            <Image
              src={avatar_1}
              alt="avatar"
              className="lazy-img user-avatar rounded-circle"
            />
            <div className="comment-text">
              <div className="d-md-flex align-items-center justify-content-between">
                <div className="name fw-500">Zephyr Nightshade</div>
                <div className="date">13 June, 23, 7:30pm</div>
              </div>
              <p>
                The same Duis aute irure dolor in reprehenderit. sunt in culpa
                qui official deserunt mollit anim id est laborum.
              </p>
              <Link href="#" className="reply-btn fw-500 tran3s">
                Reply
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="comment d-flex">
        <Image
          src={avatar_2}
          alt="avatar"
          className="lazy-img user-avatar rounded-circle"
        />
        <div className="comment-text">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="name fw-500">Orion Frostfall</div>
            <div className="date">13 June, 23, 7:30pm</div>
          </div>
          <p>
            Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
            Sit amet ris nullam eget felis.{" "}
          </p>
          <Link href="#" className="reply-btn fw-500 tran3s">
            Reply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCommentArea;
