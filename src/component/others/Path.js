import React from "react";
import "./path.css";
import BreadCrumbs from "./BreadCrumbs";
import { breadcrumbs } from "../../data";
const Path = () => {
  return <BreadCrumbs breadcrumbs={breadcrumbs} />;
};

export default Path;
