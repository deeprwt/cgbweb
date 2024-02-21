import React from 'react';
import Image,{ StaticImageData } from 'next/image';
import Link from 'next/link';
// internal
import icon_1 from '@/assets/images/icon/icon_03.svg';
import icon_2 from '@/assets/images/icon/icon_04.svg';
import icon_3 from '@/assets/images/icon/icon_05.svg';
import arrow from '@/assets/images/icon/icon_09.svg'; 
import service_data from '@/data/service-data';

// card style one item 
function UpperCardItem({icon,title,subtitle}:{icon:StaticImageData;title:string;subtitle:string}) {
  return (
    <div className="card-style-one d-flex w-100 mb-35">
    <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
      <Image src={icon} alt="icon" className="lazy-img"/>
     </div>
    <div className="text ps-4">
      <h4 className="fw-bold">{title}</h4>
      <p className="pe-xl-4">{subtitle}</p>
    </div>
  </div>
  )
}

const BlockFeatureOne = ({style_2=false}:{style_2?:boolean}) => {
  const service_items = service_data.filter(s => s.page === 'home-2')
  return (
   <div className={`block-feature-one position-relative ${style_2?'light-bg-deep mt-150 lg-mt-80 pt-120 lg-pt-60 pb-130 lg-pb-60':'pt-75'}`}>
			{!style_2&&<div className="upper-wrapper mb-110 lg-mb-80">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 wow fadeInUp">
              <UpperCardItem icon={icon_1} title='Fees' subtitle='cupidatat non proident, sunt in culpa qui officia deserunt' />
						</div>
						<div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <UpperCardItem icon={icon_2} title='Expert Advisor' subtitle='Elit esse cillum dolore eu fugiat nulla pariatur' />
						</div>
						<div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <UpperCardItem icon={icon_3} title='Effective Support' subtitle='quis nostrud exerct ullamo ea nisi ut aliqui com dolor' />
						</div>
					</div>
				</div>
			</div>}

			<div className="container">
				<div className="position-relative">
					<div className="row">
						<div className="col-md-6">
							<div className="title-one text-center text-md-start mb-30 sm-mb-10">
								<h2>Provide quality Services.</h2>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
            {service_items.map((item,i) => (
						<div key={i} className="col-lg-4 col-md-6 d-flex wow fadeInUp" data-wow-delay={`0.${i+1}s`}>
							<div className="card-style-two vstack tran3s w-100 mt-30">
								<Image src={item.icon} alt="icon" className="lazy-img icon me-auto"/>
								<h4 className="fw-bold mt-30 mb-25">{item.title}</h4>
								<p className="mb-20">{item.desc}</p>
								<Link href="/service-details" className="arrow-btn tran3s mt-auto stretched-link">
                  <Image src={arrow} alt="arrow" className="lazy-img"/>
                </Link>
							</div>
						</div>
            ))}
					</div>

					<div className="section-subheading sm-mt-40">
						<p className="text-lg">Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis nostru </p>
						<Link href="/service-v1" className="btn-three icon-link">
							<span>See All Services</span>
							<Image src={arrow} alt="arrow" className="lazy-img icon ms-1"/>
						</Link>
					</div>
				</div>
			</div>
		</div>
  );
};

export default BlockFeatureOne;