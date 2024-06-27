import { Link } from "react-router-dom";

export const HomeCard= ({ to, imgSrc, imgAlt, title,classnames }) => {
  return (
    <div className="col-4 col-lg-4 ">
      <Link to={to}>
        <div className={`p-4 card-home ${classnames}`} >
          <div className="text-center">
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <br />
          <div className="text-center">{title}</div>
        </div>
      </Link>
    </div>
  );
};

