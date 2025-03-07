import { Link } from "react-router";
import "animate.css";

const AllCampaigns = ({ campaign, idx }) => {
  const { title, type, date, _id } = campaign;

  return (
    <>
      <tr className="border border-black animate__animated animate__backInDown">
        <th>{idx + 1}</th>
        <td>{title}</td>
        <td>{type}</td>
        <td>{date}</td>
        <td>
          <Link to={`/campaign/${_id}`} className="btn-primary btn">
            See Details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AllCampaigns;
