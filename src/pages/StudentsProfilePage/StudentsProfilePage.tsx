import { StudentCardProfile } from '@/components/Cards'
import { useStudents } from '@/hooks/students/useStudents'
import { StudentType } from '@/types'


export default function StudentsProfilePage() {
  const { data: students, isLoading, error } = useStudents()
  console.log('Students data:', students)

  if (isLoading) {
    return (
      <div className="p-5 text-center">
        <p>Loading students...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-5 text-center text-red-500">
        <p>Error fetching students: {error.message}</p>
      </div>
    )
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
      {students && students.length > 0 ? (
        students.map((student: StudentType) => (
          <StudentCardProfile 
            key={student.id || student.rollNo} 
            id={student.id || ''} 
            name={student.name}
            rollNo={student.rollNo}
            course={student.course}
            
          />
        ))
      ) : (
        <div className="col-span-full text-center">
          <p>No students found</p>
        </div>
      )}
    </div>
  )
}