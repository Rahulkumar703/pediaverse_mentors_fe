import apiClient from "../apiClient";

// Sample constant data
const SAMPLE_STUDENTS = [
  {
    id: "1",
    name: "John Doe",
    rollNo: "CS001",
    course: "Computer Science",
    age: 20,
    mail: "john.doe@university.com",
    location: "New York",
    phoneNumber: "+1-555-0101",
    courseYear: 2
  },
  {
    id: "2",
    name: "Jane Smith",
    rollNo: "CS002",
    course: "Computer Science",
    age: 21,
    mail: "jane.smith@university.com",
    location: "Boston",
    phoneNumber: "+1-555-0102",
    courseYear: 3
  },
  {
    id: "3",
    name: "Bob Johnson",
    rollNo: "EE001",
    course: "Electrical Engineering",
    age: 19,
    mail: "bob.johnson@university.com",
    location: "Chicago",
    phoneNumber: "+1-555-0103",
    courseYear: 1
  }
];

export const fetchStudents = async () => {
  try {
    const response = await apiClient.get("/students");
    return response.data;
  } catch (error) {
    console.error("Error fetching students, returning sample data:", error);
    return SAMPLE_STUDENTS; // Return sample data as fallback
  }
};

export const fetchStudentById = async (id: string) => {
  try {
    const response = await apiClient.post(`/students/student`, {
      id: id
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching student by ID, searching sample data:", error);
    // Find and return matching student from sample data as fallback
    const student = SAMPLE_STUDENTS.find(student => student.id === id);
    return student || null;
  }
};

// Export the sample data as well if needed elsewhere
export { SAMPLE_STUDENTS };