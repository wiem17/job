import React from 'react'

function Footer() {
  return (
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
  )
}

export default Footer
