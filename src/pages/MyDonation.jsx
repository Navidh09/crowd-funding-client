import { useLoaderData } from "react-router";
import MyDonations from "../components/MyDonations";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyDonation = () => {
  const loaderDonation = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-center text-4xl mb-10 font-semibold text-[#8A2BE2] underline">
        My Donations
      </h2>
      {loaderDonation.length === 0 ? (
        <p className="text-center font-bold text-2xl text-red-500">
          You have no donations to show
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
          {loaderDonation
            .filter((donation) => user.email === donation.email)
            .map((donation) => (
              <MyDonations key={donation._id} donation={donation}></MyDonations>
            ))}
        </div>
      )}
    </div>
  );
};

export default MyDonation;
