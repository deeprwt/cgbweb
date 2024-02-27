import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_97.svg";
import icon_2 from "@/assets/images/icon/icon_27.svg";
import shape from "@/assets/images/shape/shape_45.svg";
import arrow from "@/assets/images/icon/icon_09.svg";
import business_man from "@/assets/images/assets/businessman_02.png";
import service_data from "@/data/service-data";

// img style
const imgStyle = {
  height: "auto",
};
const SeoSmoSection = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(4, 6);
  return (
    <>
      <div className="block-feature-twelve position-relative pt-130 lg-pt-80 pb-180 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="title-one mb-40 lg-mb-20">
                <h2 className="color-deep">
                  Core SEO services from the top SEO agency{" "}
                </h2>
              </div>
            </div>
          </div>
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      On-page SEO
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Use of relevant keywords in the URL, title, meta
                            description, and image tags.
                          </li>
                          <li>
                            Use of relevant keywords in the URL, title, meta
                            description, and image tags.
                          </li>
                          <li>
                            Structuring content with clear headings and
                            subheadings.
                          </li>
                          <li>
                            Using images and videos to break up text and make
                            content visually appealing.
                          </li>
                          <li>Optimize your website for mobile devices.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Off-page SEO
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Off-page SEO complements on-page optimization to
                            improve a site&lsquo;s ranking.
                          </li>
                          <li>
                            It involves actions taken outside your website to
                            boost visibility.
                          </li>
                          <li>
                            Focus on building quality backlinks from reputable
                            sites.
                          </li>
                          <li>
                            Strategically enhance your website&lsquo;s authority and
                            online presence.
                          </li>
                          <li>
                            Our off-page SEO strategy helps in driving organic
                            traffic and achieving higher search rankings.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Technical SEO
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Technical SEO improves website crawlability and
                            indexability for better organic ranking.
                          </li>
                          <li>
                            It involves optimizing server settings, website
                            structure, and performance factors.
                          </li>
                          <li>
                            Key technical aspects include secure connections,
                            responsive design, and fast loading times.
                          </li>
                          <li>
                            Ensuring your website is primed for optimal search
                            visibility.
                          </li>
                          <li>
                            Trust our expertise to implement technical
                            optimizations that enhance your website&lsquo;s
                            performance and SERPs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Global SEO
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Translate your website and content into the
                            languages of your target audience.
                          </li>
                          <li>
                            Use the right keywords and phrases in your content
                            and website structure.
                          </li>
                          <li>
                            Get links from other websites in your target market.
                          </li>
                          <li>
                            Use social media and other online channels to
                            promote your website in your targeted global market.
                          </li>
                          <li>
                            Use analytics tools to track your progress and make
                            adjustments as needed.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      E-Commerce SEO
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            E-Commerce-related keyword research and optimization
                            for improved search rankings.
                          </li>
                          <li>
                            Enhancing website loading speed for better user
                            experience.
                          </li>
                          <li>
                            Mobile-friendly website design to cater to the
                            growing mobile user base.
                          </li>
                          <li>
                            Building high-quality backlinks to boost search
                            engine visibility.
                          </li>
                          <li>
                            Ongoing SEO performance tracking and adjustments to
                            maximize results.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">Local SEO</h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Mobile-focused local SEO strategies to prioritize
                            local search results.
                          </li>
                          <li>
                            Targeting local search results with phrases like
                            &lsquo; me&lsquo;.
                          </li>
                          <li>
                            Enhancing visibility and attracting local customers.
                          </li>
                          <li>
                            Our goal is to drive foot traffic and physical
                            visits to your store or business location.
                          </li>
                          <li>Trust us to optimize your local presence.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}

          <div className="col-lg-11 mt-40">
            <div className="title-one  mb-40 lg-mb-20">
              <h2 className="color-deep">
                Benefits of search engine optimization
              </h2>
            </div>
          </div>

          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Creates a unique brand identity
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Branding helps you stand out and build trust with
                            potential customers.
                          </li>
                          <li>
                            SEO services translate into more traffic and sales.
                          </li>
                          <li>
                            Branding and SEO can help you attract new customers
                            and retain existing ones.
                          </li>
                          <li>
                            SEO consolidates brand value and boosts the bottom
                            line.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                    Boosts website ranking
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                          SEO can help your business thrive online, which can lead to more leads.
                          </li>
                          <li>
                          Keywords, page speed, and other SEO techniques can help your site rank higher in search results.
                          </li>
                          <li>
                          A high ranking in search results can help you attract new customers.
                          </li>
                          <li>
                          SEO is an important investment for any business that wants to grow online.
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                    High revenue generation
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                          SEO can help you get more traffic to your website.
                          </li>
                          <li>
                          More traffic can lead to more sales and more customers.
                          </li>
                          <li>
                          More sales and more customers can lead to more revenue.
                          </li>
                          <li>
                          More revenue can help you expand your business.
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                    Make your presence global
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                          SEO can help you reach new customers in new regions.
                          </li>
                          <li>
                          A strong SEO strategy can help you expand your business domestically and globally.
                          </li>
                          <li>
                          An international SEO strategy can help you increase your visibility in search results worldwide, helping in high revenues.
                          </li>
                          
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                    Builds trustworthiness                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                          SEO helps to build trust with customers, and trust can lead to more sales and customers.
                          </li>
                          <li>
                          Top rankings in search engines like Google indicate that your business is reliable.
                          </li>
                          <li>
                          Trust can lead to more sales and more customers.
                          </li>
                         
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                    Drives quality traffic                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                          Inbound marketing helps you attract visitors who are already interested in what you have to offer.
                          </li>
                          <li>
                          It provides informative and engaging content throughout the buyer&lsquo;s journey.
                          </li>
                          <li>
                          It allows you to build relationships with potential customers and nurture them until they are ready to buy.
                          </li>                        
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
      </div>
    </>
  );
};
export default SeoSmoSection;
