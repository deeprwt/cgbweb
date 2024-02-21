import React from 'react'
import Image from 'next/image';
import Whatsnew from "@/assets/images/cgbhome/whatsnew.png"
import bg_image from "@/assets/images/background/backgroundnew.jpg"

const backImg = {
    backgroundImage: `url('${bg_image.src}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
}

const WhatsNew = () => {
  return (
    <>
        <div className="full service-details" style={backImg}>
            <div className="container">
                <div className="counter-wrapper pt-80 pb-80">
                <div className="row details-meta">
                    <div className="title-one">
                        {/* <div className="upper-title"></div> */}
                        <h3>What&apos;s New</h3>
                    </div>
                    <div className="col-md-3 mb-35 mt-35  wow fadeInUp" data-wow-delay="0.0s">
                        <Image src={Whatsnew} alt="what's new" className="w-100 h-100 shadowimg" />
                    </div>
                    <div className="col-md-3 mb-35 mt-35  wow fadeInUp" data-wow-delay="0.1s">
                        <Image src={Whatsnew} alt="what's new" className="w-100 h-100 shadowimg" />
                    </div>
                    <div className="col-md-3 mb-35 mt-35  wow fadeInUp" data-wow-delay="0.2s">
                        <Image src={Whatsnew} alt="what's new" className="w-100 h-100 shadowimg" />
                    </div>
                    <div className="col-md-3 mb-35 mt-35  wow fadeInUp" data-wow-delay="0.3s">
                        <Image src={Whatsnew} alt="what's new" className="w-100 h-100 shadowimg" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhatsNew;