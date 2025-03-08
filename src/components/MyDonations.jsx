const MyDonations = ({ donation }) => {
  const { title, taka, type, photo } = donation;

  return (
    <div className="card card-side max-w-120 bg-base-100 shadow-lg mt-10">
      <figure>
        <img
          src={photo}
          alt="campaign-image"
          className="w-full max-h-48 py-2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p>
          Campaign: <span className="font-semibold">{type}</span>
        </p>
        <p>
          Donated Amount:
          <span className="font-bold"> {taka}</span> BDT
        </p>
      </div>
    </div>
  );
};

export default MyDonations;
