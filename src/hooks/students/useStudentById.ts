import { fetchStudentById } from "@/api/services/students";
import { EducationType, ExtracurricularType, SkillType, StudentType } from "@/types";
import { ObservationType } from "@/types/ObservationType";
import { useQuery } from "@tanstack/react-query";

export interface StudentDetailsType {
    student: StudentType;
    education: EducationType[];
    skills: SkillType[];
    extracurricularsData: ExtracurricularType[];
    observations: ObservationType[];
}

export const useStudentById = (id: string) => {
  return useQuery<StudentDetailsType>({
    queryKey: ["student", id],
    queryFn: () => fetchStudentById(id),
    enabled: !!id, 
  });
};