import { Link } from "react-router-dom";
import { HomeCard } from "./home-card";

export const MediumCard= ({ to, imgSrc, imgAlt, title,classnames }) => {
  return (
  <HomeCard to={'easy'} imgSrc={"src/assets/local_fire_department_24dp_FILL0_wght400_GRAD0_opsz24.svg"} imgAlt={'waterdrop'} title={'Medium'} classnames={'card-medium'} />
  );
};

