import React from "react";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <>
      <li>
        <Link href="https://www.facebook.com/" target="_blank">
          <i className="bi bi-facebook"></i>
        </Link>
      </li>
      <li>
        <Link href="https://dribbble.com/" target="_blank">
          <i className="bi bi-dribbble"></i>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/" target="_blank">
          <i className="bi bi-instagram"></i>
        </Link>
      </li>
    </>
  );
};

export default FooterSocial;
