// api.js

// Define the URL of your API endpoint
const API_URL = "http://localhost:5001/api/data";

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
