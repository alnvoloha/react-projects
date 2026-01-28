import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export function CreateNote() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [errors, setErrors] = useState({});

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // приятный UX: как только человек вводит title, ошибка исчезает
    if (name === "title" && errors.title) {
      setErrors((prev) => ({ ...prev, title: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title cannot be empty";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const note = {
        title: formData.title.trim(),
        body: formData.body,
        authorId: user.id,
        createdAt: new Date().toISOString(),
      };

      const response = await axios.post("http://localhost:5000/notes", note);
      dispatch({ type: "ADD_NOTE", payload: response.data });

      navigate("/notes");
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <div className="prose mx-auto flex flex-col gap-6 bg-white p-6">
      <h1 className="text-3xl font-bold text-gray-700 text-center">
        Create Note
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          placeholder="Note title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        {errors.title && <div className="text-red-400">{errors.title}</div>}

        <textarea
          name="body"
          placeholder="Note content (optional)"
          value={formData.body}
          onChange={handleChange}
          className="border p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 hover:bg-green-600"
          >
            Create
          </button>

          <button
            type="button"
            onClick={() => navigate("/notes")}
            className="bg-gray-500 text-white px-4 py-2 hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
