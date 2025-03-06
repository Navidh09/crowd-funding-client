import { useLoaderData, useParams } from "react-router";

const CampaignDetails = () => {
  const { id } = useParams();
  const singleCampaign = useLoaderData();

  const { date, description, title, taka, type, photo, email, name } =
    singleCampaign;

  console.log(title, id);

  return (
    <div className="card bg-base-100 w-screen mx-auto shadow-sm mt-10">
      <figure>
        <img className="w-2/4" src={photo} alt="campaign-title" />
      </figure>
      <div className="card-body w-2/4 mx-auto text-xl">
        <h2 className="card-title text-4xl">{title}</h2>
        <p className="mb-4 text-xl">Campaign Type: {type}</p>
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
      </div>
    </div>
  );
};

export default CampaignDetails;
