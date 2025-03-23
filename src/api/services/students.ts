import apiClient from "../apiClient";

export const fetchStudents = async () => {
    const response = await apiClient.get("/students");
    console.log(response);
    return response.data;
};

export const fetchStudentById = async (id: string) => {
    const response = await apiClient.get(`/students/${id}`);
    return response.data;
};