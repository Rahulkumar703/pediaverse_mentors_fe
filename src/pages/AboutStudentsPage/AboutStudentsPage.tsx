import { StudentCardExpanded } from '@/components/Cards'
import TabsComponent from '@/components/Tabs/Tabs'
import { useStudentById } from '@/hooks/students/useStudentById';
import { ChevronLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { BasicDetails } from './sections/BasicDetails';
import { MentorObservations } from './sections/MentorObservations';
import { Career } from './sections/Career';

export default function AboutStudentsPage() {
  const { id } = useParams();

  const { data: student, isLoading, error } = useStudentById(id ?? "");

  if (!id) return <p>Invalid student ID.</p>;

  if (isLoading) return <p>Loading...</p>;
  if (error || !student) return <p>Error fetching student details.</p>;

  console.log(student);

  const tabs = [
    { id: "basic_details", label: "Basic Details", content: <BasicDetails student={student.student} educations={student.education} skills={student.skills} extracurriculars={student.extracurricularsData} /> },
    { id: "mentor_observations", label: "Mentor Observations", content: <MentorObservations observations={student.observations} /> },
    { id: "career_recommendations", label: "Career Recommendations", content: <Career /> },
  ];


  return (
    <div className='w-full p-5 flex flex-col gap-5'>
      <div className='flex flex-row gap-2 text-primary-main'>
        <ChevronLeft />
        <p>Back to Students List</p>
      </div>
      <StudentCardExpanded student={student.student} />
      <TabsComponent tabs={tabs} />
    </div>
  )
}
