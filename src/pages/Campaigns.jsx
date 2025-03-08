import { useLoaderData } from "react-router";
import AllCampaigns from "../components/AllCampaigns";

const Campaigns = () => {
  const campaigns = useLoaderData();

  return (
    <div>
      <h1 className="text-center mt-10 text-4xl font-semibold text-[#8A2BE2] underline">
        All Campaigns
      </h1>
      <div className="overflow-x-auto border rounded-box bg-base-300 w-11/12 mx-auto mt-10">
        {campaigns.length > 0 ? (
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
              {campaigns.map((campaign, idx) => (
                <AllCampaigns
                  campaign={campaign}
                  idx={idx}
                  key={campaign._id}
                ></AllCampaigns>
              ))}
            </tbody>
          </table>
        ) : (
          <>
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
            </table>
            <p className="text-center py-7 text-2xl font-bold">
              No Data to show
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Campaigns;
