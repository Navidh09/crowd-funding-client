import { useLoaderData } from "react-router";
import MyCampaigns from "../components/MyCampaigns";

const MyCampaign = () => {
  const campaigns = useLoaderData();

  return (
    <div>
      <h1 className="text-center mt-10 text-4xl font-semibold text-[#8A2BE2] underline">
        All Campaigns
      </h1>
      <div className="overflow-x-auto border rounded-box bg-base-300 w-11/12 mx-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-2 border-black">
              <th>Campaign Title</th>
              <th>Campaign Type</th>
              <th>Deadline Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <MyCampaigns campaign={campaign} key={campaign._id}></MyCampaigns>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
