import React from "react";
import team_data from "@/data/team-data";
import TeamSingle from "./team-single";

const TeamOneArea = () => {
  const teams = team_data.filter((t) => t.page === "home" || t.page === "team");
  return (
    <div className="team-section-one mt-150 lg-mt-80 mb-100 lg-mb-40">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            {teams.map((t, i) => (
              <div
                key={i}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <TeamSingle team={t} spacing="mb-50 lg-mb-40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOneArea;
