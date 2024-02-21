import React from "react";
import Image from "next/image";
import Link from "next/link";
import team_data from "@/data/team-data";

const TeamSectionTwo = () => {
  const teams = team_data.filter((t) => t.page === "home-5");
  return (
    <div className="team-section-two position-relative border-100 pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div className="container">
        <div className="position-relative">
          <div className="title-four mb-25 lg-mb-10">
            <h2>Our Team</h2>
          </div>
          <p className="text-xl text-dark mb-30 lg-mb-10">
            We’ve verity package for our client based on your business
          </p>

          <div className="row">
            {teams.map((t, i) => (
              <div
                key={t.id}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <div className="card-style-fourteen text-center mt-35">
                  <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
                    <Image
                      src={t.img}
                      alt="team-img"
                      className="lazy-img w-100"
                      style={{height:'auto'}}
                    />
                    <Link href="/team-details"
                      className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                  <p className="fs-6 pt-30 lg-pt-10 pb-5 m0">{t.designation}</p>
                  <h4 className="fw-500 m0">{t.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="section-btn md-mt-40">
            <Link href="/team-v1"
              className="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s"
            >
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSectionTwo;
