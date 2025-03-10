import { StudentCardProfile } from '@/components/Cards'
import { useStudents } from '@/hooks/students/useStudents'
import { StudentType } from '@/types';

export default function StudentsProfilePage() {

  const { data: students, isLoading, error } = useStudents();

  console.log(students)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts.</p>;

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
      {students && students.map((student: StudentType, index: number) => (
        <StudentCardProfile key={index} id={student.id!} name={student.name} rollNo={student.rollNo} course={student.course} />
      ))}
    </div>
  )
}
