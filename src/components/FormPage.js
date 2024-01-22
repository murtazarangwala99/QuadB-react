import React, { useState, useContext } from "react";
import { DataContext } from "../App";
import { useParams } from "react-router-dom";
const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const movieData = useContext(DataContext);
  const movieId = useParams();

  const filteredData = movieData.filter((e) => e.show.id === movieId.movieId);
  const { show } = { ...filteredData[0] };
  const { name, schedule } = { ...show };
  if (!schedule) {
    return <h2 className="text-center text-3xl font-bold">No Slot Available</h2>;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert form data to JSON string
    const formDataJSON = JSON.stringify(formData);
    // console.log(formDataJSON);

    // Store JSON string in localStorage
    localStorage.setItem("formData", formDataJSON);

    // Reset From Data
    setFormData({
      name: "",
      email: "",
      number: "",
    });
  };

  return (
    <div className="flex items-center  flex-col m-8 ">
      <h2 className="font-extrabold text-3xl mb-6">Book Your Ticket Here</h2>
      <div className="border-2 p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <label>
            Movie Name:
            <input
              type="text"
              name="name"
              value={name}
              readOnly
              className="mx-4 border-2 rounded-md px-2 py-1"
            />
          </label>
          <br />
          <label>
            Time:
            <input
              type="time"
              value={schedule?.time}
              readOnly
              className="mx-4 border-2 rounded-md px-2 py-1"
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="name"
              name="name"
              value={formData.name}
              className="mx-4 border-2 rounded-md px-2 py-1"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              className="mx-4 border-2 rounded-md px-2 py-1"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Number:
            <input
              type="number"
              name="number"
              value={formData.number}
              className="mx-4 border-2 rounded-md px-2 py-1"
              onChange={handleChange}
            />
          </label>
          <br />
          <button
            type="submit"
            className="px-3 py-2 m-2 bg-slate-200 hover:bg-slate-400 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
