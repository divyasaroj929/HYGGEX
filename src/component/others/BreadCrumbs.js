import React from "react";

import breadcrumbararrowicon from "../../img/breadcrumbarrowicon.svg";
import homelogo from "../../img/homelogo.svg";
const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="breadcrumbs">
      {breadcrumbs.map((crumb, index) => {
        console.log(crumb.label);
        return (
          <>
            <span key={index}>
              {index == 0 && <img src={homelogo} alt="" />}
              <h1>{crumb.label}</h1>
              {index !== breadcrumbs.length - 1 && (
                <img
                  src={breadcrumbararrowicon}
                  className="breadcrumb-arrow-icon"
                />
              )}
            </span>
          </>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
