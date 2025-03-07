import React from "react";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { MdDelete, MdModeEdit } from "react-icons/md";

const MyCampaigns = ({ campaign }) => {
  const { user } = useContext(AuthContext);
  const { title, type, date, _id, email } = campaign;

  return (
    <>
      {email === user.email && (
        <tr className="border border-black">
          <td>{title}</td>
          <td>{type}</td>
          <td>{date}</td>
          <td className="space-x-1">
            <Link to={`/update/${_id}`} className="btn-primary btn">
              <MdModeEdit />
            </Link>
            <Link to={`/myCampaign/${_id}`} className="btn-primary btn">
              <MdDelete />
            </Link>
          </td>
        </tr>
      )}
    </>
  );
};

export default MyCampaigns;
