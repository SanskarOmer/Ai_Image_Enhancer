import axios from "axios";

const BASE_URL = "https://techhk.aoscdn.com/";
const API_KEY = ""

// Main function
export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log("Image Uploaded Successfully, Task ID:", taskId);

        const enhancedImageData = await fetchEnhancedImageAPI(taskId);
        console.log("Enhanced Image Data:", enhancedImageData);

        return enhancedImageData;
    } catch (error) {
        console.log("Error enhancing image:", error.message);
    }
};

export default enhancedImageAPI;

// Upload image and get taskId
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);


    const { data } = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        }
    );
    if (!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task ID not found.");
    }
    return data.data.task_id;

};

// Fetch enhanced image using taskId
const fetchEnhancedImageAPI = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image! Image not found.");
  }

  return data.data;
};
