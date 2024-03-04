import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ITeam } from "@/types/team-d-t";

const TeamSingleTwo = ({team,spacing}: {team:ITeam;spacing?: string;}) => {
  return (
    <div className={`card-style-fifteen ${spacing?spacing:'mb-50 lg-mb-40'}`}>
      <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
        <Image
          src={team.img}
          alt="team-img"
          className="lazy-img w-100"
          style={{ height: "auto" }}
        />
        {/* <Link href="#"
          className="round-btn rounded-circle d-flex align-items-center h-100 w-100 tran3s"
        > */}
        {/* remove the  gif add gif and remove the comments of the div */}
           {/* <div className="round-btn rounded-circle d-flex align-items-center h-100 w-100 tran3s cursor-pointer">
           <Image
          src={team.gif}
          alt="team-img"
          className="lazy-img w-100"
          style={{ height: "auto" }}
        />
           </div> */}
          {/* <i className="bi bi-arrow-up-right"></i> */}
        {/* </Link> */}
      </div>
      <h4 className="fw-500 pt-20 m0">{team.name}</h4>
      <div className="fs-6">{team.designation}</div>
    </div>
  );
};

export default TeamSingleTwo;
