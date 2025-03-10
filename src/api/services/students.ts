import apiClient from "../apiClient";

export const fetchStudents = async () => {
    const response = await apiClient.get("/students");
    return response.data;
};

export const fetchStudentById = async (id: string) => {
    const response = await apiClient.post(`/students/student`, {
        id: id
    });
    return response.data;
};