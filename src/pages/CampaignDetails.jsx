import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const singleCampaign = useLoaderData();
  const { user } = useContext(AuthContext);

  const { date, description, title, taka, type, photo, email, name, _id } =
    singleCampaign;

  const presentDate = new Date().toISOString();

  const handleDonate = () => {
    const donation = {
      title,
      description,
      taka,
      type,
      photo,
      email: user.email,
    };
    if (presentDate < date) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, donate!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("http://localhost:4000/donations", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(donation),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Your donation has been completed.",
                  icon: "success",
                });
              }
            });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Donation time is EXPIRED!",
      });
    }
  };

  return (
    <div className="card bg-base-100 w-screen mx-auto shadow-sm mt-10">
      <figure>
        <img
          className="w-2/4 max-h-120 max-w-96"
          src={photo}
          alt="campaign-title"
        />
      </figure>
      <div className="card-body w-2/4 mx-auto text-xl">
        <h2 className="card-title text-4xl">{title}</h2>
        <p className="mb-4 text-xl">
          Campaign Type: <span className="font-bold">{type}</span>
        </p>
        <p className="text-lg">{description}</p>
        <p>
          Deadline: <span className="text-red-500 font-semibold">{date}</span>
        </p>
        <p>
          Minimum Donation Amount: <span className="font-bold">{taka}</span> BDT
        </p>
        <p>
          User Name: <span className="font-bold">{name}</span>
        </p>
        <p>
          Email: <span className="font-bold">{email}</span>
        </p>
        <button
          onClick={handleDonate}
          className="btn mt-3 w-3/4 text-xl h-12 hover:bg-[#8A2BE2] hover:text-white text-[#8A2BE2]"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default CampaignDetails;
