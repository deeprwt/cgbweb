'use client'
import React from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const UseSocialShare = () => {
    const share = usePathname();

    return(
        <ul className="d-flex share-icon align-items-center style-none pt-20">
        <li>Share:</li>
        <li>
          <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.cgbindia.com${share}`}>
            <i className="bi bi-facebook"></i>
          </Link>
        </li>
        <li>
          <Link href={`https://twitter.com/intent/tweet?url=https://www.cgbindia.com${share}`}>
            <i className="bi bi-twitter"></i>
          </Link>
        </li>
        <li>
          <Link href={`https://www.instagram.com/?https://www.cgbindia.com${share}`}>
            <i className="bi bi-instagram"></i>
          </Link>
        </li>
      </ul>
    )
};

export default UseSocialShare;