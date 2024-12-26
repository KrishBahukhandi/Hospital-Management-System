const BASE_URL = "http://localhost:5000/api"; // Base URL for API

// Utility function to make API requests
const makeRequest = async (endpoint, method, body = null) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }2
    return data;
  } catch (error) {
    console.error(`Error in ${method} ${endpoint}:`, error.message);
    return { error: error.message };
  }
};

// Function to handle signup
export const signupUser = async (formData) => {
  return await makeRequest("auth/signup", "POST", formData);
};

// Function to handle login
export const loginUser = async (credentials) => {
  return await makeRequest("auth/login", "POST", credentials);
};

// Add other API-related functions as needed
// Example: Fetching user profile
export const fetchUserProfile = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    return { error: error.message };
  }
};
