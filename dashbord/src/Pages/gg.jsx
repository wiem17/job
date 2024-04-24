import React from 'react'

export default function gg() {
  return (
    <>
       <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="text-center">
          <img src="assets/imgs/template/loading.gif" alt="jobBox" />
        </div>
      </div>
    </div>
  </div>
  <header className="header sticky-bar">
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="index.html">
              <img alt="jobBox" src="assets/imgs/page/dashboard/logo.svg" />
            </a>
          </div>
          <span className="btn btn-grey-small ml-10">Admin area</span>
        </div>
        <div className="header-search">
          <div className="box-search">
            <form action="">
              <input
                className="form-control input-search"
                type="text"
                name="keyword"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <div className="header-menu d-none d-md-block">
          <ul>
            <li>
              {" "}
              <a href="http://wp.alithemes.com/html/jobbox/demos/index.html">
                Home{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="http://wp.alithemes.com/html/jobbox/demos/page-about.html">
                About us{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="http://wp.alithemes.com/html/jobbox/demos/page-contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="block-signin">
            <a
              className="btn btn-default icon-edit hover-up"
              href="post-job.html"
            >
              Post Job
            </a>
            <div className="dropdown d-inline-block">
              <a
                className="btn btn-notify"
                id="dropdownNotify"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
              />
              <ul
                className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                aria-labelledby="dropdownNotify"
              >
                <li>
                  <a className="dropdown-item active" href="#">
                    10 notifications
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    12 messages
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    20 replies
                  </a>
                </li>
              </ul>
            </div>
            <div className="member-login">
              <img alt="" src="assets/imgs/page/dashboard/profile.png" />
              <div className="info-member">
                {" "}
                <strong className="color-brand-1">Steven Jobs</strong>
                <div className="dropdown">
                  <a
                    className="font-xs color-text-paragraph-2 icon-down"
                    id="dropdownProfile"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  >
                    Super Admin
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                    aria-labelledby="dropdownProfile"
                  >
                    <li>
                      <a className="dropdown-item" href="profile.html">
                        Profiles
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="my-resume.html">
                        CV Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="login.html">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="burger-icon burger-icon-white">
    <span className="burger-icon-top" />
    <span className="burger-icon-mid" />
    <span className="burger-icon-bottom" />
  </div>
  <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div className="mobile-header-wrapper-inner">
      <div className="mobile-header-content-area">
        <div className="perfect-scroll">
          <div className="mobile-search mobile-header-border mb-30">
            <form action="#">
              <input type="text" placeholder="Search…" />
              <i className="fi-rr-search" />
            </form>
          </div>
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start*/}
            <nav>
              <ul className="main-menu">
                <li>
                  {" "}
                  <a className="dashboard2" href="index.html">
                    <img
                      src="assets/imgs/page/dashboard/dashboard.svg"
                      alt="jobBox"
                    />
                    <span className="name">Dashboard</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="candidates.html">
                    <img
                      src="assets/imgs/page/dashboard/candidates.svg"
                      alt="jobBox"
                    />
                    <span className="name">Candidates</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2 active" href="recruiters.html">
                    <img
                      src="assets/imgs/page/dashboard/recruiters.svg"
                      alt="jobBox"
                    />
                    <span className="name">Recruiters</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="my-job-grid.html">
                    <img
                      src="assets/imgs/page/dashboard/jobs.svg"
                      alt="jobBox"
                    />
                    <span className="name">My Jobs</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="my-tasks-list.html">
                    <img
                      src="assets/imgs/page/dashboard/tasks.svg"
                      alt="jobBox"
                    />
                    <span className="name">Tasks List</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="profile.html">
                    <img
                      src="assets/imgs/page/dashboard/profiles.svg"
                      alt="jobBox"
                    />
                    <span className="name">My Profiles</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="my-resume.html">
                    <img
                      src="assets/imgs/page/dashboard/cv-manage.svg"
                      alt="jobBox"
                    />
                    <span className="name">CV Manage</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="settings.html">
                    <img
                      src="assets/imgs/page/dashboard/settings.svg"
                      alt="jobBox"
                    />
                    <span className="name">Setting</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="authentication.html">
                    <img
                      src="assets/imgs/page/dashboard/authentication.svg"
                      alt="jobBox"
                    />
                    <span className="name">Authentication</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dashboard2" href="login.html">
                    <img
                      src="assets/imgs/page/dashboard/logout.svg"
                      alt="jobBox"
                    />
                    <span className="name">Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-account">
            <h6 className="mb-10">Your Account</h6>
            <ul className="mobile-menu font-heading">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Work Preferences</a>
              </li>
              <li>
                <a href="#">Account Settings</a>
              </li>
              <li>
                <a href="#">Go Pro</a>
              </li>
              <li>
                <a href="page-signin.html">Sign Out</a>
              </li>
            </ul>
            <div className="mb-15 mt-15">
              {" "}
              <a
                className="btn btn-default icon-edit hover-up"
                href="post-job.html"
              >
                Post Job
              </a>
            </div>
          </div>
          <div className="site-copyright">
            Copyright 2022 © JobBox. <br />
            Designed by AliThemes.
          </div>
        </div>
      </div>
    </div>
  </div>
  <main className="main">
    <div className="nav">
      <a className="btn btn-expanded" />
      <nav className="nav-main-menu">
        <ul className="main-menu">
          <li>
            {" "}
            <a className="dashboard2" href="index.html">
              <img
                src="assets/imgs/page/dashboard/dashboard.svg"
                alt="jobBox"
              />
              <span className="name">Dashboard</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" href="candidates.html">
              <img
                src="assets/imgs/page/dashboard/candidates.svg"
                alt="jobBox"
              />
              <span className="name">Candidates</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2 active" href="recruiters.html">
              <img
                src="assets/imgs/page/dashboard/recruiters.svg"
                alt="jobBox"
              />
              <span className="name">Recruiters</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" href="my-job-grid.html">
              <img src="assets/imgs/page/dashboard/jobs.svg" alt="jobBox" />
              <span className="name">My Jobs</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" href="my-tasks-list.html">
              <img src="assets/imgs/page/dashboard/tasks.svg" alt="jobBox" />
              <span className="name">Tasks List</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" href="profile.html">
              <img src="assets/imgs/page/dashboard/profiles.svg" alt="jobBox" />
              <span className="name">My Profiles</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" href="my-resume.html">
              <img
                src="assets/imgs/page/dashboard/cv-manage.svg"
                alt="jobBox"
              />
              <span className="name">CV Manage</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" href="settings.html">
              <img src="assets/imgs/page/dashboard/settings.svg" alt="jobBox" />
              <span className="name">Setting</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" href="authentication.html">
              <img
                src="assets/imgs/page/dashboard/authentication.svg"
                alt="jobBox"
              />
              <span className="name">Authentication</span>
            </a>
          </li>
          <li>
            {" "}
            <a className="dashboard2" href="login.html">
              <img src="assets/imgs/page/dashboard/logout.svg" alt="jobBox" />
              <span className="name">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="border-bottom mb-20 mt-20" />
      <div className="box-profile-completed text-center mb-30">
        <div id="circle-staticstic-demo" />
        <h6 className="mb-10">Profile Completed</h6>
        <p className="font-xs color-text-mutted">
          Please add detailed information to your profile. This will help you
          develop your career more quickly.
        </p>
      </div>
      <div className="sidebar-border-bg mt-50">
        <span className="text-grey">WE ARE</span>
        <span className="text-hiring">HIRING</span>
        <p className="font-xxs color-text-paragraph mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          architecto
        </p>
        <div className="mt-15">
          <a className="btn btn-paragraph-2" href="#">
            Know More
          </a>
        </div>
      </div>
    </div>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">Recruiters</h3>
        </div>
        <div className="box-breadcrumb">
          <div className="breadcrumbs">
            <ul>
              <li>
                {" "}
                <a className="icon-home" href="index.html">
                  Admin
                </a>
              </li>
              <li>
                <span>Recruiters</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-box">
            <div className="container">
              <div className="panel-white mb-30">
                <div className="box-padding">
                  <div className="row mb-30">
                    <div className="col-12">
                      <div className="box-list-character">
                        <ul>
                          <li>
                            <a className="active" href="#">
                              A
                            </a>
                          </li>
                          <li>
                            <a href="#">B</a>
                          </li>
                          <li>
                            <a href="#">C</a>
                          </li>
                          <li>
                            <a href="#">D</a>
                          </li>
                          <li>
                            <a href="#">E</a>
                          </li>
                          <li>
                            <a href="#">F</a>
                          </li>
                          <li>
                            <a href="#">G</a>
                          </li>
                          <li>
                            <a href="#">H</a>
                          </li>
                          <li>
                            <a href="#">I</a>
                          </li>
                          <li>
                            <a href="#">J</a>
                          </li>
                          <li>
                            <a href="#">K</a>
                          </li>
                          <li>
                            <a href="#">L</a>
                          </li>
                          <li>
                            <a href="#">M</a>
                          </li>
                          <li>
                            <a href="#">N</a>
                          </li>
                          <li>
                            <a href="#">O</a>
                          </li>
                          <li>
                            <a href="#">P</a>
                          </li>
                          <li>
                            <a href="#">Q</a>
                          </li>
                          <li>
                            <a href="#">R</a>
                          </li>
                          <li>
                            <a href="#">S</a>
                          </li>
                          <li>
                            <a href="#">T</a>
                          </li>
                          <li>
                            <a href="#">U</a>
                          </li>
                          <li>
                            <a href="#">V</a>
                          </li>
                          <li>
                            <a href="#">W</a>
                          </li>
                          <li>
                            <a href="#">X</a>
                          </li>
                          <li>
                            <a href="#">Y</a>
                          </li>
                          <li>
                            <a href="#">Z</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-1.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Car Toys</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>66</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>12</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-2.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Carols Daughter</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>18</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">London, UK</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>25</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-3.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Amazon</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>52</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">Tokyo,Japan</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>54</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-4.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Baseball Savings</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>85</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">Chicago, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>6</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-5.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Ashford</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>25</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">Toronto, Italia</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>67</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-6.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Callaway Golf</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>34</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">
                            San Francisco, US
                          </span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>45</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-7.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Percepta</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>97</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">
                            Chinatown, Singpore
                          </span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>64</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-8.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Exela Movers</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>67</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>87</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-9.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Ibotta, Inc</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>45</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>23</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-1.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Wanderu </a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>08</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>45</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-2.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Aceable, Inc.</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>54</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>67</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-3.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Intrepid Travel</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>123</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>53</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-4.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Defendify </a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>64</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>56</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-5.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Twisters </a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>34</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>66</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-6.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Fireworks</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>12</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>12</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-1.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Car Toys</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>66</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">New York, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>12</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-2.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Carols Daughter</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>18</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">London, UK</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>25</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-3.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Amazon</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>52</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">Tokyo,Japan</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>54</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-4.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Baseball Savings</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>85</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">Chicago, US</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>6</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                      <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                          <a href="company-details.html">
                            <img
                              src="assets/imgs/brands/brand-5.png"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                        <div className="info-text mt-10">
                          <h5 className="font-bold">
                            <a href="company-details.html">Ashford</a>
                          </h5>
                          <div className="mt-5">
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <img
                              alt="jobBox"
                              src="assets/imgs/template/icons/star.svg"
                            />
                            <span className="font-xs color-text-mutted ml-10">
                              <span>(</span>
                              <span>25</span>
                              <span>)</span>
                            </span>
                          </div>
                          <span className="card-location">Toronto, Italia</span>
                          <div className="mt-30">
                            <a
                              className="btn btn-grey-big"
                              href="jobs-grid.html"
                            >
                              <span>67</span>
                              <span> Jobs Open </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" />
                  </div>
                  <div className="paginations">
                    <ul className="pager">
                      <li>
                        <a className="pager-prev" href="#" />
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          1
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          2
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          3
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          4
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          5
                        </a>
                      </li>
                      <li>
                        <a className="pager-number active" href="#">
                          6
                        </a>
                      </li>
                      <li>
                        <a className="pager-number" href="#">
                          7
                        </a>
                      </li>
                      <li>
                        <a className="pager-next" href="#" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="section-box">
          <div className="container">
            <div className="panel-white pt-30 pb-30 pl-15 pr-15">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-10">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/microsoft.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/sony.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/acer.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/nokia.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/asus.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/casio.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/dell.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/panasonic.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/vaio.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="swiper-slide">
                      {" "}
                      <img
                        src="assets/imgs/page/dashboard/sony.svg"
                        alt="jobBox"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="ModalApplyJobForm"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content apply-job-form">
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body pl-30 pr-30 pt-50">
              <div className="text-center">
                <p className="font-sm text-brand-2">Job Application </p>
                <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">
                  Start your career today
                </h2>
                <p className="font-sm text-muted mb-30">
                  Please fill in your information and send it to the employer.{" "}
                </p>
              </div>
              <form
                className="login-register text-start mt-20 pb-30"
                action="#"
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="input-1">
                    Full Name *
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    required=""
                    name="fullname"
                    placeholder="Steven Job"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="input-2">
                    Email *
                  </label>
                  <input
                    className="form-control"
                    id="input-2"
                    type="email"
                    required=""
                    name="emailaddress"
                    placeholder="stevenjob@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="number">
                    Contact Number *
                  </label>
                  <input
                    className="form-control"
                    id="number"
                    type="text"
                    required=""
                    name="phone"
                    placeholder="(+01) 234 567 89"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="des">
                    Description
                  </label>
                  <input
                    className="form-control"
                    id="des"
                    type="text"
                    required=""
                    name="Description"
                    placeholder="Your description..."
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="file">
                    Upload Resume
                  </label>
                  <input
                    className="form-control"
                    id="file"
                    name="resume"
                    type="file"
                  />
                </div>
                <div className="login_footer form-group d-flex justify-content-between">
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Agree our terms and policy
                    </span>
                    <span className="checkmark" />
                  </label>
                  <a className="text-muted" href="page-contact.html">
                    Lean more
                  </a>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-default hover-up w-100"
                    type="submit"
                    name="login"
                  >
                    Apply Job
                  </button>
                </div>
                <div className="text-muted text-center">
                  Do you need support?{" "}
                  <a href="page-contact.html">Contact Us</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-20">
        <div className="container">
          <div className="box-footer">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-25 text-center text-md-start">
                <p className="font-sm color-text-paragraph-2">
                  © 2022 -{" "}
                  <a
                    className="color-brand-2"
                    href="https://themeforest.net/item/jobbox-job-portal-html-bootstrap-5-template/39217891"
                    target="_blank"
                  >
                    JobBox{" "}
                  </a>
                  Dashboard <span> Made by</span>
                  <a
                    className="color-brand-2"
                    href="http://alithemes.com"
                    target="_blank"
                  >
                    {" "}
                    AliThemes
                  </a>
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-center text-md-end mb-25">
                <ul className="menu-footer">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
    </>
  )
}
