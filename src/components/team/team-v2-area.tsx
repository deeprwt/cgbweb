import React from "react";
import team_data from "@/data/team-data";
import TeamSingleTwo from "./team-single-2";

const TeamTwoArea = () => {
  const teams = team_data.filter(
    (t) => t.page === "team-three" || t.page === "team"
  );
  return (
    <div className="team-section-three service-details light-bg position-relative pt-120 lg-pt-60 pb-130 lg-pb-60">
      <div className="container details-meta">
        <div className="position-relative">
          <div className="title-one wow fadeInUp text-center">
            <h3>Meet Our Team</h3>
          </div>
          <p className="text-lg text-dark mb-30 lg-mb-10 text-center px-5 py-3">
            Our team is constantly committed to innovation and pushing the boundaries while delivering workplaces. Our greatest strength is the relationship of trust we have with our clients. Our CGB wear many hats. They are bikers, philosophers, farmers and musicians who are also the designers, engineers, innovators and project managers of workplaces of the future.
          </p>
          <div className="row">
            {teams.map((t, i) => (
              <div
                key={i}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <TeamSingleTwo team={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTwoArea;
