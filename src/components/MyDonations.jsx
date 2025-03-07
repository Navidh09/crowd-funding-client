import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyDonations = ({ donation }) => {
  const { title, description, taka, type, photo, email } = donation;
  const { user } = useContext(AuthContext);

  return (
    <>
      {user.email === email && (
        <div className="card card-side max-w-120 bg-base-100 shadow-lg mt-10">
          <figure>
            <img
              src={photo}
              alt="campaign-image"
              className="max-w-48 max-h-48"
            />
          </figure>
          <div className="card-body text-lg">
            <h2 className="card-title text-3xl font-bold">{title}</h2>
            <p>
              Campaign: <span className="font-semibold">{type}</span>
            </p>
            <p>{description}</p>
            <p>
              Donated Amount:
              <span className="font-bold"> {taka}</span> BDT
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MyDonations;
