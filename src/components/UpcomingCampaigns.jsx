import React from "react";

const UpcomingCampaigns = () => {
  return (
    <div className="my-15 text-center w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-[#8A2BE2]">
        Here are some Upcoming campaigns
      </h2>
      <table className="table mt-15">
        {/* head */}
        <thead>
          <tr className="border-2 border-black">
            <th>#</th>
            <th>Campaign Title</th>
            <th>Campaign Type</th>
            <th>Start Date</th>
          </tr>
        </thead>

        <tbody className="border-2">
          <tr className="border border-black">
            <td>1</td>
            <td>Hope for Tomorrow: Support HelpingHands Today</td>
            <td>General Fundraising</td>
            <td>2025-08-30</td>
          </tr>
          <tr className="border border-black">
            <td>2</td>
            <td>Fighting for a Cure: Help LifeMed Save Lives</td>
            <td>Health & Medical</td>
            <td>2025-07-25</td>
          </tr>
          <tr className="border border-black">
            <td>3</td>
            <td>Invest in the Future: Fund EduBright and Empower Dreams</td>
            <td>Education & Scholarship</td>
            <td>2025-08-05</td>
          </tr>
          <tr className="border border-black">
            <td>4</td>
            <td>Together for Change: Support EmpowerUnited Now</td>
            <td>Community & Social </td>
            <td>2025-06-06</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingCampaigns;
