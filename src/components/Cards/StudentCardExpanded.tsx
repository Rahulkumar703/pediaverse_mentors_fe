import { useNavigate } from 'react-router-dom'
import { Badge } from '../ui/badge';
import { StudentType } from '@/types';

export default function StudentCardExpanded({ student }: { student: StudentType }) {

    const navigate = useNavigate();

    return (
        <div className='p-5 flex flex-row justify-between w-full gap-5 shadow-sm border border-light-100 rounded-2xl cursor-pointer bg-white' onClick={() => navigate('/about-students')}>
            <div className='flex flex-row justify-start items-center gap-5'>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' className='h-16 w-16 rounded-full' />
                <div className='flex flex-col items-start jsutify-center'>
                    <p className='font-bold'>{student.name}</p>
                    <p className='text-light-200'>{student.rollNo} • {student.course}</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-1/5'>
                <div className='flex flex-row justify-end items-end gap-2'>
                    <Badge variant="default" className='bg-[#dcfce7] rounded-xl text-[#43875D]'>Active</Badge>
                    <Badge variant="default" className='bg-[#e0e7ff] rounded-xl text-[#9091D4]'>Year {student.courseYear}</Badge>
                </div>
                <div className='flex justify-between'>
                    <p>Overall Progress</p>
                    <p>78%</p>
                </div>
                <div className='w-full bg-primary-main h-3 rounded-md' />
            </div>
        </div>
    )
}
