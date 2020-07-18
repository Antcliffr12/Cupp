import React from "react"
import TopBarStyles from "./topbar.module.scss"
const TopBar = () => {
  return (
    <div className={TopBarStyles.topBar}>
      <div className="container">
        <div className="row">
          <div className={`${TopBarStyles.textWrap} col-auto mr-auto`}>
            <p className="mb-0">
              Got a Plumbing Problem?{" "}
              <a href="tel:3177454774">Call us now: 317.745.4774</a>
            </p>
          </div>
          <div className={`${TopBarStyles.textWrap} col-auto`}>
            <p className="mb-0">
              What an approximate price? <a href="#">Get a free quote.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
