import React from "react";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyCampaigns = ({ campaign, campaigns, setCampaigns }) => {
  const { user } = useContext(AuthContext);
  const { title, type, date, _id, email } = campaign;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/campaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
              const remainingCampaigns = campaigns.filter(
                (cam) => cam._id !== id
              );
              setCampaigns(remainingCampaigns);
            }
          });
      }
    });
  };

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
            <Link onClick={() => handleDelete(_id)} className="btn-primary btn">
              <MdDelete />
            </Link>
          </td>
        </tr>
      )}
    </>
  );
};

export default MyCampaigns;
