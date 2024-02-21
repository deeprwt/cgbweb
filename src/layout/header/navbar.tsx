'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import logo from "@/assets/images/logo/logo_02.svg";
import logo_2 from "@/assets/images/logo/logome.png";
import icon_1 from "@/assets/images/icon/icon_14.svg";
import icon_2 from "@/assets/images/icon/icon_15.svg";
import menu_data from "@/data/menu-data";
import { usePathname } from "next/navigation";

const Navbar = ({logo_white=false}:{logo_white?:boolean}) => {
  const pathname = usePathname()
  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link href="/" className="d-block">
            <Image className="w-100 h-100" src={logo_white?logo_2:logo} alt="logo" />
          </Link>
        </div>
      </li>
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
            menu.mega_menu ? "dropdown mega-dropdown-sm" : ""
          }`}
        >
          {menu.dropdown && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                {menu.dropdown_menus?.map((dm, i) => (
                  <li key={i}>
                    <Link href={dm.link} className={`dropdown-item ${pathname === dm.link?'active':''}`}>
                      <span>{dm.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {menu.mega_menu && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                <li className="row gx-1">
                  {menu.mega_menus?.map((mm, i) => (
                    <div key={mm.id} className="col-lg-4">
                      <div className="menu-column">
                        <ul className="style-none mega-dropdown-list">
                          {mm.menus.map((sm, i) => (
                            <li key={i}>
                              <Link href={sm.link} className={`dropdown-item ${pathname === sm.link?'active':''}`}>
                                <span>{sm.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </>
          )}
          {!menu.dropdown && !menu.mega_menu && (
            <Link className="nav-link" href={menu.link} role="button">
              {menu.title}
            </Link>
          )}
        </li>
      ))}
      <li className="d-md-none ps-2 pe-2">
        {/* <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          className="signup-btn-one icon-link w-100 mt-20"
        >
          <span className="flex-fill text-center">Signup</span>
          <div className="icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-right"></i>
          </div>
        </a> */}
        <ul className="style-none contact-info m0 pt-30">
          <li className="d-flex align-items-center p0 mt-15">
            <Image src={icon_1} alt="icon" className="lazy-img icon me-2" />
            <Link href="mailto:info@cgbindia.com" className="fw-500 text-white">
              info@cgbindia.com
            </Link>
          </li>
          <li className="d-flex align-items-center p0 mt-15">
            <Image src={icon_2} alt="icon" className="lazy-img icon me-2" />
            <Link href="tel:+757 699-4478" className="fw-500 text-white">
              +757 699-4478
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
