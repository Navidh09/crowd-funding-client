import { useLoaderData } from "react-router";
import MyDonations from "../components/MyDonations";

const MyDonation = () => {
  const loaderDonation = useLoaderData();

  return (
    <div>
      <h2 className="text-center mt-10 font-bold text-5xl text-[#8A2BE2]">
        My Donations
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
        {loaderDonation.map((donation) => (
          <MyDonations key={donation._id} donation={donation}></MyDonations>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
