import { useLoaderData } from "react-router";
import MyDonations from "../components/MyDonations";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyDonation = () => {
  const loaderDonation = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-center mt-10 font-bold text-5xl text-[#8A2BE2]">
        My Donations
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
        {loaderDonation
          .filter((donation) => user.email === donation.email)
          .map((donation) => (
            <MyDonations key={donation._id} donation={donation}></MyDonations>
          ))}
      </div>
    </div>
  );
};

export default MyDonation;
