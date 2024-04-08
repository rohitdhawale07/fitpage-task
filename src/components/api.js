// api.js

// Define the URL of your API endpoint
const API_URL = "https://mocki.io/v1/086d86aa-6c22-4e43-a00d-7e388ba0a54a";

// Function to fetch data from the API
const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

export default fetchData;
