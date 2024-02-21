import React from "react";
import Image from "next/image";
import team_data from "@/data/team-data";
import TeamSingle from "./team-single";
import Link from "next/link";

const TeamSectionOne = () => {
  const teams = team_data.filter((t) => t.page === "home");
  return (
    <div className="team-section-one mt-150 lg-mt-80">
      <div className="container">
        <div className="position-relative">
          <div className="title-one mb-40 lg-mb-20 wow fadeInUp">
            <h2>Our Advisor.</h2>
          </div>

          <div className="row">
            {teams.map((t, i) => (
              <div
                key={t.id}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <TeamSingle team={t} />
              </div>
            ))}
          </div>

          <div className="section-btn sm-mt-40">
            <Link href="/team-v1" className="btn-five icon-link">
              <span className="text">See all Experts</span>
              <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSectionOne;
