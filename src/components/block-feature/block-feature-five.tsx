import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import service_data from '@/data/service-data';
import arrow from '@/assets/images/icon/icon_09.svg';
import icon from '@/assets/images/icon/icon_27.svg';
import shape from '@/assets/images/shape/shape_06.svg';

const BlockFeatureFive = () => {
  const service_items = service_data.filter(s => s.page === 'home')
  return (
  	<div className="block-feature-five light-bg position-relative mt-80 md-mt-50 pt-120 lg-pt-80 pb-150 lg-pb-80">
			<div className="container">
				<div className="position-relative">
					<div className="row">
						<div className="col-lg-8 wow fadeInLeft">
							<div className="title-one mb-50 lg-mb-30 md-mb-10">
								<h2>Confidently secure assets with expert guidance.</h2>
							</div>
						</div>
					</div>

					<div className="row">
            {service_items.map((s,i) => (
						<div key={i} className="col-xl-3 col-md-6 d-flex wow fadeInUp" data-wow-delay={`0.${i+1}s`}>
							<div className="card-style-seven text-center vstack tran3s w-100 mt-30">
								<div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center m-auto">
                  <Image src={s.icon} alt="icon" className="lazy-img"/>
                </div>
								<h4 className="fw-bold mt-40 md-mt-20 mb-20">{s.title}</h4>
								<p className="mb-60 md-mb-40">{s.desc}</p>
								<Link href="/service-details" className="arrow-btn tran3s m-auto stretched-link">
                  <Image src={arrow} alt="icon" className="lazy-img"/>
                </Link>
							</div>
						</div>
            ))}
					</div>
					<div className="section-btn md-mt-40">
						<Link href="/service-v2" className="btn-seven d-inline-flex align-items-center">
							<span className="text">All Services</span>
							<div className="icon tran3s rounded-circle d-flex align-items-center">
                <Image src={icon} alt="icon" className="lazy-img"/>
              </div>
						</Link>
					</div>
				</div>
			</div>
			<Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
		</div>
  );
};

export default BlockFeatureFive;