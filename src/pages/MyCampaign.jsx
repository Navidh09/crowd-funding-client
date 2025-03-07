import { useLoaderData } from "react-router";
import MyCampaigns from "../components/MyCampaigns";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyCampaign = () => {
  const loadCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(loadCampaigns);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-center mt-10 text-4xl font-semibold text-[#8A2BE2] underline">
        My Campaigns
      </h1>
      <div className="overflow-x-auto border rounded-box bg-base-300 w-11/12 mx-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-2 border-black">
              <th>#</th>
              <th>Campaign Title</th>
              <th>Campaign Type</th>
              <th>Deadline Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns
              .filter((campaign) => user.email === campaign.email)
              .map((campaign, idx) => (
                <MyCampaigns
                  campaign={campaign}
                  campaigns={campaigns}
                  setCampaigns={setCampaigns}
                  key={campaign._id}
                  idx={idx}
                ></MyCampaigns>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
