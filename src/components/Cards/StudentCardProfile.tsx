import { StudentType } from '@/types';
import { useNavigate } from 'react-router-dom'

export type StudentProfilePageProps = Pick<StudentType, 'id' | 'name' | 'rollNo' | 'course'>;

export default function StudentCardProfile({
  id,
  name,
  course,
  rollNo
}: StudentProfilePageProps) {

  const navigate = useNavigate();

  return (
    <div className='p-5 flex flex-col justify-between w-full gap-5 shadow-md border border-light-100 rounded-lg cursor-pointer' onClick={() => navigate(`/about-students/${id}`)}>
      <div className='flex flex-row justify-start items-center gap-5'>
        <img src='https://randomuser.me/api/portraits/men/1.jpg' className='h-16 w-16 rounded-full' />
        <div className='flex flex-col items-start jsutify-center'>
          <p>{name}</p>
          <p className='text-light-200'>{course}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <p>Progress</p>
          <p>78%</p>
        </div>
        <div className='w-full bg-primary-main h-3 rounded-md'/>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div>
          <p className='text-light-200'>Student ID</p>
          <p>{rollNo}</p>
        </div>
        <div>
        <p className='text-light-200'>Last Updated</p>
        <p>2 Days Ago</p>
        </div>
      </div>
    </div>
  )
}
