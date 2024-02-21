import React from "react";
import team_data from "@/data/team-data";
import TeamSingleTwo from "./team-single-2";

const TeamTwoArea = () => {
  const teams = team_data.filter(
    (t) => t.page === "team-three" || t.page === "team"
  );
  return (
    <div className="team-section-four light-bg border-top pt-150 lg-pt-80 pb-100 lg-pb-40">
      <div className="container">
        <div className="position-relative">
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
