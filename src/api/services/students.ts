import apiClient from "../apiClient";

export const fetchStudents = async () => {
  try {
    const response = await apiClient.get("/students");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching students, returning sample data:", error);
    return []; // Return sample data as fallback
  }
};

export const fetchStudentById = async (id: string) => {
  try {
    const response = await apiClient.get(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching student by ID, searching sample data:", error);
    return [];
  }
};

