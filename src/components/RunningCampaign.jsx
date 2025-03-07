import { Link, useLoaderData } from "react-router";

const RunningCampaign = () => {
  const campaigns = useLoaderData();
  const currentDate = new Date().toISOString();

  return (
    <div>
      <h2 className="text-center pt-10 text-4xl text-violet-700 font-semibold">
        Running Campaigns
      </h2>
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
              .filter((campaign) => currentDate < campaign.date)
              .map((campaign, idx) => (
                <tr key={campaign._id} className="border border-black">
                  <td>{idx + 1}</td>
                  <td>{campaign.title}</td>
                  <td>{campaign.type}</td>
                  <td>{campaign.date}</td>
                  <td>
                    <Link
                      to={`/campaign/${campaign._id}`}
                      className="btn-primary btn"
                    >
                      See Details
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RunningCampaign;
