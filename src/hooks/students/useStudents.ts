import { fetchStudents } from "@/api/services/students";
import { StudentType } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useStudents = () => {
    return useQuery<StudentType[]>({
        queryKey: ["students"],
        queryFn: fetchStudents,
    });
};