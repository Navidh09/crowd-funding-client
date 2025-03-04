import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);

  const handleAddCampaign = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const type = e.target.type.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const taka = e.target.taka.value;
    const description = e.target.description.value;

    console.log(title, type, name, photo, date, email, taka, description);
  };
  return (
    <div className="w-11/12 mx-auto pt-10">
      <h4 className="text-3xl font-bold pb-10 text-center text-[#8A2BE2]">
        Add New Campaign
      </h4>
      <form onSubmit={handleAddCampaign} className="w-full text-center">
        <div className="mb-2">
          <legend className="fieldset-legend w-3/4 mx-auto mb-1 text-xl">
            Title :
          </legend>
          <input
            type="text"
            name="title"
            placeholder="campaign title"
            className="input input-lg w-3/4"
          />
        </div>
        <div className="w-3/4 mx-auto md:flex gap-4 mb-2">
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">
              Campaign type :
            </legend>
            <select
              name="type"
              className="select select-bordered w-full input-lg"
            >
              <option disabled selected>
                Select One
              </option>
              <option value={"personalIssue"}>Personal Issue</option>
              <option value={"startup"}>Startup</option>
              <option value={"business"}>Business</option>
              <option value={"creativeIdeas"}>Creative Ideas</option>
            </select>
          </div>
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">
              Minimum donation amount :
            </legend>
            <input
              type="number"
              name="taka"
              placeholder="BDT"
              className="input input-lg w-full font-semibold"
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto flex gap-4 mb-2">
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">Photo :</legend>
            <input
              type="text"
              name="photo"
              placeholder="enter photo-URL here"
              className="input input-lg w-full"
            />
          </div>
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">
              Deadline Date :
            </legend>
            <input type="date" name="date" className="w-full input-lg input" />
          </div>
        </div>
        <div className="w-3/4 mx-auto md:flex gap-4 mb-2">
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">Username :</legend>
            <input
              type="text"
              name="email"
              value={user.email}
              className="input input-lg w-full font-semibold"
            />
          </div>

          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">Username :</legend>
            <input
              type="text"
              name="name"
              value={user.displayName ? user.displayName : "Unknown User"}
              className="input input-lg w-full font-semibold"
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto">
          <legend className="fieldset-legend mb-1 text-xl">
            Description :
          </legend>
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="write description here"
          ></textarea>
        </div>
        <input
          className="btn mt-3 w-3/4 text-xl h-12 hover:bg-[#8A2BE2] hover:text-white text-[#8A2BE2]"
          type="submit"
          value="Add Campaign"
        />
      </form>
    </div>
  );
};

export default AddCampaign;
