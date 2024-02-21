import React from 'react';
import Image from 'next/image';
import { ITeam } from '@/types/team-d-t';
import Link from 'next/link';

const TeamSingle = ({team,spacing}:{team:ITeam;spacing?:string}) => {
  return (
    <div className={`card-style-four ${spacing?spacing:'mt-35'}`}>
    <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
      <Image
        src={team.img}
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
    <h4 className="fw-500 pt-20 m0">{team.name}</h4>
    <div className="fs-6">{team.designation}</div>
  </div>
  );
};

export default TeamSingle;