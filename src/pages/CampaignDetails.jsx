import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const CampaignDetails = () => {
  const singleCampaign = useLoaderData();
  const { user } = useContext(AuthContext);

  const { date, description, title, taka, type, photo, email, name, _id } =
    singleCampaign;
  const handleDonate = () => {
    const donation = {
      title,
      description,
      taka,
      type,
      photo,
      email: user.email,
    };
    fetch("http://localhost:4000/donations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
