import React from "react";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <>
      <li>
        <Link href="https://www.linkedin.com/company/cgbindia/" target="_blank">
          <i className="bi bi-linkedin"></i>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/cgbsolutions_/" target="_blank">
          <i className="bi bi-instagram"></i>
        </Link>
      </li>
      <li>
        <Link href="https://m.facebook.com/profile.php?id=61552225540134" target="_blank">
          <i className="bi bi-facebook"></i>
        </Link>
      </li>
    </>
  );
};

export default FooterSocial;
