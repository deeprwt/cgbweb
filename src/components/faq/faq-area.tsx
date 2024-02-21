import React from 'react';
import Link from 'next/link';
import FaqItem from './faq-item';

const FaqArea = () => {
  return (
    <div className="faq-section-three light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80">
      <div className="container">
        <nav>
          <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-selected="true" tabIndex={-1}>All</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-marketing" type="button" role="tab" aria-selected="false" tabIndex={-1}>Marketing</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-banking" type="button" role="tab" aria-selected="false" tabIndex={-1}>Banking</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-finance" type="button" role="tab" aria-selected="false" tabIndex={-1}>Finance</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-payment" type="button" role="tab" aria-selected="false" tabIndex={-1}>Payments</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-terms" type="button" role="tab" aria-selected="false" tabIndex={-1}>Terms & Conditions</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-account" type="button" role="tab" aria-selected="false" tabIndex={-1}>Account</button>
          </div>
        </nav>
        <div className="tab-content mt-60 lg-mt-40">
          <div className="tab-pane fade show active" id="nav-all" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one" id="accordionOne">
              <FaqItem id={1} title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionOne' />
              <FaqItem isShow={true} id={2} title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionOne' />
              <FaqItem id={3} title='What do you look for in a founding team?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionOne' />
              <FaqItem id={4} title='Do you recommend Pay as you go or Pre pay?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionOne' />
              <FaqItem id={5} title='What do I get for $0 with my plan?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionOne' />
              <FaqItem id={6} title='What do you look for in a founding team?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionOne' />
            </div>
          </div>
          <div className="tab-pane fade" id="nav-marketing" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one" id="accordionTwo">
              <FaqItem id={7} title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionTwo' />
              <FaqItem id={8} title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionTwo' />
            </div>
          </div>
          <div className="tab-pane fade" id="nav-banking" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one" id="accordionThree">
              <FaqItem id={9} title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionThree' />
              <FaqItem id={10} title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionThree' />
            </div>
          </div>
          <div className="tab-pane fade" id="nav-finance" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one" id="accordionFour">
              <FaqItem id={11} title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionFour' />
              <FaqItem id={12} title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionFour' />
            </div>
          </div>
          <div className="tab-pane fade" id="nav-payment" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one" id="accordionFive">
              <FaqItem id={13} title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionFive' />
              <FaqItem id={14} title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionFive' />
            </div>
          </div>
          <div className="tab-pane fade" id="nav-terms" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one" id="accordionSix">
              <FaqItem id={15} title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionSix' />
              <FaqItem id={16} title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionSix' />
            </div>
          </div>
          <div className="tab-pane fade" id="nav-account" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one" id="accordionSeven">
              <FaqItem id={17} title='How does the free trial work?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionSeven' />
              <FaqItem id={19} title='How do you find different criteria in your process?' desc='Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' parent='accordionSeven' />
            </div>
          </div>
        </div>

        <div className="text-center mt-60 lg-mt-50">
          <h2 className="fs-1 mb-30">Don’t get your answer?</h2>
          <Link href="/contact" className="btn-four">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default FaqArea;