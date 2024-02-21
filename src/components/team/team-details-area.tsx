import React from 'react';
import Link from 'next/link';
import bg_img from '@/assets/images/media/img_46.jpg';

const TeamDetailsArea = () => {
  return (
    <div className="team-details light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row">
            <div className="col-lg-4">
              <div className="member-img" style={{ backgroundImage: `url(${bg_img.src})` }}></div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                <h2 className="name fw-bold">Mathews Firlo.</h2>
                <div className="post">Founder & CEO</div>
                <h6 className="fw-bold">About Firlo.</h6>
                <p>Before establishing Beratung in 2001, Mathew founded two Silicon Valley internet companies and later held management roles at Salomon in New York.</p>
                <div className="social-share pt-35">
                  <ul className="style-none d-flex align-items-center">
                    <li><Link href="#"><i className="bi bi-facebook"></i></Link></li>
                    <li><Link href="#"><i className="bi bi-twitter"></i></Link></li>
                    <li><Link href="#"><i className="bi bi-dribbble"></i></Link></li>
                    <li><Link href="#"><i className="bi bi-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsArea;