import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import team_data from "@/data/team-data";
import shape from "@/assets/images/shape/shape_05.svg";
import shape_2 from "@/assets/images/shape/shape_47.svg";
import TeamSingleTwo from "./team-single-2";

// img style 
const imgStyle = {
  height:'auto'
}

const TeamSectionThree = ({ style_2 = false }: { style_2?: boolean }) => {
  const teams = team_data.filter((t) => t.page === "team-three");
  return (
    <>
      {!style_2 && (
        <div className="team-section-three light-bg position-relative pt-120 lg-pt-60 pb-130 lg-pb-60 mt-90 lg-mt-40">
          <div className="container">
            <div className="position-relative">
              <div className="title-one mb-40 lg-mb-10 wow fadeInUp">
                <h2>Meet Our Team</h2>
              </div>
              <p className="text-xl text-dark mb-30 p-20 lg-mb-10">
              Our team is constantly committed to innovation and pushing the boundaries while delivering workplaces.
                </p>

              <div className="row">
                {teams.map((item, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay={`0.${i}s`}
                  >
                    <TeamSingleTwo team={item} spacing="mt-35" />
                  </div>
                ))}
              </div>

              <div className="section-btn sm-mt-40">
                <Link href="/leadership" className="btn-five icon-link">
                  <span className="text">Meet with all</span>
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
          <Image src={shape} alt="shape" className="lazy-img shapes shape_02" />
        </div>
      )}

      {style_2 && (
        <div className="team-section-three light-bg position-relative pt-120 lg-pt-60 pb-130 lg-pb-60 mt-150 lg-mt-80">
          <div className="container">
            <div className="position-relative">
              <div className="title-one mb-40 lg-mb-10 wow fadeInUp">
                <h2>Our Advisor</h2>
              </div>
              <div className="row">
                {teams.map((item, i) => (
                  <div key={i}
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay={`0.${i}s`}
                  >
                    <TeamSingleTwo team={item} spacing="mt-35" />
                  </div>
                ))}
              </div>

              <div className="section-btn sm-mt-40">
                <Link href="/team-v2" className="btn-eighteen tran3s">
                  See All
                </Link>
              </div>
            </div>
          </div>
          <Image  src={shape_2} alt="shape" className="lazy-img shapes shape_03" style={imgStyle}/>
        </div>
      )}
    </>
  );
};

export default TeamSectionThree;
