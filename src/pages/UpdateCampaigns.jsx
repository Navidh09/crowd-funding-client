import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCampaigns = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const singleCampaign = useLoaderData();

  const { date, description, title, taka, type, photo, _id } = singleCampaign;

  const handleUpdateCampaign = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const type = e.target.type.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const taka = e.target.taka.value;
    const description = e.target.description.value;
    const updateCampaign = {
      title,
      date,
      description,
      taka,
      type,
      photo,
      name,
      email,
    };
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/update/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCampaign),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              navigate("/myCampaign");
              Swal.fire("Saved!", "", "success");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto pt-10">
      <h4 className="text-3xl font-bold pb-10 text-center text-[#8A2BE2]">
        Campaign Name: <span className="text-red-500">{title}</span>
      </h4>
      <form onSubmit={handleUpdateCampaign} className="w-full text-center">
        <div className="mb-2">
          <legend className="fieldset-legend w-3/4 mx-auto mb-1 text-xl">
            Title :
          </legend>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="campaign title"
            className="input input-lg w-3/4"
            required
          />
        </div>
        <div className="w-3/4 mx-auto md:flex gap-4 mb-2">
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">
              Campaign type :
            </legend>
            <select
              name="type"
              defaultValue={type}
              className="select select-bordered w-full input-lg"
              required
            >
              <option disabled selected>
                Select One
              </option>
              <option value={"Personal Issue"}>Personal Issue</option>
              <option value={"Startup"}>Startup</option>
              <option value={"Business"}>Business</option>
              <option value={"Creative Ideas"}>Creative Ideas</option>
            </select>
          </div>
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">
              Minimum donation amount :
            </legend>
            <input
              type="number"
              name="taka"
              defaultValue={taka}
              placeholder="BDT"
              className="input input-lg w-full font-semibold"
              required
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto flex gap-4 mb-2">
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">Photo :</legend>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="enter photo-URL here"
              className="input input-lg w-full"
              required
            />
          </div>
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">
              Deadline Date :
            </legend>
            <input
              type="date"
              name="date"
              defaultValue={date}
              className="w-full input-lg input"
              required
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto md:flex gap-4 mb-2">
          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">
              User Email :
            </legend>
            <input
              type="text"
              name="email"
              value={user.email}
              className="input input-lg w-full font-semibold"
              disabled
            />
          </div>

          <div className="w-full">
            <legend className="fieldset-legend mb-1 text-xl">Username :</legend>
            <input
              type="text"
              disabled
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
            defaultValue={description}
            name="description"
            className="textarea w-full"
            placeholder="write description here"
            required
          ></textarea>
        </div>
        <input
          className="btn mt-3 w-3/4 text-xl h-12 hover:bg-[#8A2BE2] hover:text-white text-[#8A2BE2]"
          type="submit"
          value="Update Campaign"
        />
      </form>
    </div>
  );
};

export default UpdateCampaigns;
