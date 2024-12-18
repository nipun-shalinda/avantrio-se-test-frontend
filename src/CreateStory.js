import axios from "axios";
import { useEffect, useState } from "react";

const CreateStory = () => {
  const [stories, setStories] = useState([]);
  const apiUrl = "http://localhost:3000/api";

  const fetchStories = async () => {
    const stories = await axios.get(`${apiUrl}/stories`)
    setStories(stories)
  }

  const ctreateStories = async (storyData)

   await axios.post(`${aiUrl}/stories`)
  }

  useEffect(() => {

    fetchStories()

  });

  return <div>

    ht
  </div>;
};

export default CreateStory;
