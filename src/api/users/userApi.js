const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};
