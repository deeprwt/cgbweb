import React from "react";
import Link from "next/link";
import Image from "next/image";
import sindhu from "@/assets/images/cgbhome/sindhuUpdate.png";

const TeamDetailsArea = () => {
  return (
    <div className="team-details light-bg border-top pt-120 lg-pt-80 ">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row">
            <div className="col-lg-4 align-self-center">
              {/* <div
                className="member-img"
                style={{ backgroundImage: `url(${bg_img.src})` }}
              > */}
                <Image
                  src={sindhu}
                  layout="responsive"
                  alt="Sindhu profile"
                  className="w-100"
                ></Image>

                {/* <Image src={bg_img} alt="Sindhu mam profile"></Image> */}
              {/* </div> */}
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                <h2 className="name fw-bold">Sindhu B.R.J</h2>
                <div className="post">CEO, CGB Soltuions</div>
                <h6 className="fw-bold">About Me</h6>
                <p>
                  Sindhu brings over two decades of experience in managing
                  strategic engagements and leverages her vast operational
                  expertise to advise companies on expanding their business by
                  discovering new opportunities and identifying untapped revenue
                  streams, alongside developing leadership capital. <br />
                  Widely recognized for her pivotal role in steering the growth
                  of IT contract staffing in India, Sindhu has been instrumental
                  in defining path-breaking staffing models for Fortune 500
                  technology companies. As a hands-on leader with a knack for
                  connecting with people, she is renowned for shaping and
                  nurturing an enthusiastic and dynamic work culture while
                  assembling high-performance teams. <br /> As CEO of CGB
                  Solutions, Sindhu is dedicated to driving the company towards
                  innovation and sustainable growth, leveraging her wealth of
                  experience and visionary leadership to propel CGB Solutions to
                  new heights in the industry.
                </p>
                <div className="social-share pt-35">
                  <ul className="style-none d-flex align-items-center">
                    {/* <li>
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
                        <i className="bi bi-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-instagram"></i>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-0 pe-3">
                <h3>Details</h3>
                <table className="w-100 mt-25 lg-mt-20">
                  <tbody>
                    <tr>
                      <td>Location:</td>
                      <td>Spain, Barcelona</td>
                    </tr>
                    <tr>
                      <td>Position:</td>
                      <td>Founder & CEO</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>mathfir@support.com</td>
                    </tr>
                    <tr>
                      <td>Age:</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>Qualification:</td>
                      <td>Master Degree</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td>Male</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsArea;
