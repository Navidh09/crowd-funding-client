import { Link } from "react-router";

const AllCampaigns = ({ campaign, idx }) => {
  const { title, type, date, _id } = campaign;

  return (
    <>
      <tr className="border border-black">
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
