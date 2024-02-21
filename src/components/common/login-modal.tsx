import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import google from '@/assets/images/icon/google.png';
import facebook from '@/assets/images/icon/facebook.png';
import RegisterForm from "../forms/register-form";
import LoginForm from "../forms/login-form";

const LoginModal = () => {
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="form-wrapper m-auto">
              <ul className="nav nav-tabs border-0 w-100" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#fc1"
                    role="tab"
                    aria-selected="true"
                    tabIndex={-1}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#fc2"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Signup
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-30">
                <div className="tab-pane show active" role="tabpanel" id="fc1">
                  <div className="text-center mb-20">
                    <h2>Hi, Welcome Back!</h2>
                    <p>
                      Still do not have an account? <Link href="#">Sign up</Link>
                    </p>
                  </div>
                  {/* login form start */}
                  <LoginForm />
                  {/* login form end */}
                </div>
                <div className="tab-pane" role="tabpanel" id="fc2">
                  <div className="text-center mb-20">
                    <h2>Register</h2>
                    <p>
                      Already have an account? <Link href="#">Login</Link>
                    </p>
                  </div>
                  {/* register form start */}
                  <RegisterForm />
                  {/* register form end */}
                </div>
              </div>

              <div className="d-flex align-items-center mt-30 mb-10">
                <div className="line"></div>
                <span className="pe-3 ps-3 fs-6">OR</span>
                <div className="line"></div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                    <Image src={google} alt="google" />
                    <span className="ps-3">Signup with Google</span>
                  </Link>
                </div>
                <div className="col-sm-6">
                  <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                    <Image src={facebook} alt="facebook" />
                    <span className="ps-3">Signup with Facebook</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
