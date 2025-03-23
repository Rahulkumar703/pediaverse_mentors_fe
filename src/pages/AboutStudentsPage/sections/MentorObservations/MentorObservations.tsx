import { Button } from '@/components/ui/button'
import { SkillsType } from './types';
import Timeline from '@/components/Timeline/Timeline';
import { StudentDetailsType } from '@/hooks/students/useStudentById';
import { DialogModal } from '@/components/DialogModal';
import { useState } from 'react';
import ObservationForm from './form';

type MentorObservationsProps = Pick<StudentDetailsType, 'observations' | 'student'> & {
  refetch: () => void;
};

export default function MentorObservations({
  observations,
  student,
  refetch,
}: MentorObservationsProps) {

  const [open, setOpen] = useState<boolean>(false);
  console.log(observations);

  const skills: SkillsType[] = [
    {
      "id": "1",
      "category": "Strengths",
      "name": "Problem Solving",
      "description": "Excellent at breaking down complex problems"
    },
    {
      "id": "2",
      "category": "Strengths",
      "name": "Analytical Thinking",
      "description": "Strong data analysis capabilities"
    },
    {
      "id": "3",
      "category": "Strengths",
      "name": "Communication",
      "description": "Clear and concise in presentations"
    },
    {
      "id": "4",
      "category": "Areas for Improvement",
      "name": "Time Management",
      "description": "Often submits assignments close to deadlines"
    },
    {
      "id": "5",
      "category": "Areas for Improvement",
      "name": "Public Speaking",
      "description": "Hesitant when speaking to large groups"
    }
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillsType[]>);

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full justify-between items-center flex flex-row'>
        <p className='font-bold text-light-300 text-lg'>Mentor Observations</p>
        <Button className='bg-primary-main text-white hover:bg-primary-main/90' onClick={() => setOpen(true)}>
          Add Observation
        </Button>
      </div>
      <div className='w-full flex flex-row gap-5 my-5'>
        {Object.entries(groupedSkills).map(([category, items]) => (
          <div key={category} className='w-1/2 bg-[#F9FAFB] p-5'>
            <p className='text-light-300 text-md font-semibold'>{category}</p>
            <ul className="mt-2 list-disc list-inside">
              {items.map((skill) => (
                <li key={skill.id} className="text-sm text-gray-700">{skill.name} - {skill.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className=' flex flex-col gap-2'>
        <p className='text-light-300 text-lg font-semibold'>Observation History</p>
        <Timeline observations={observations} />
      </div>
      <DialogModal open={open} setOpen={setOpen} title='Observation' description='Add a new observation'>
        <ObservationForm refetch={refetch} setOpen={setOpen} studentId={student.id!}/>
      </DialogModal>
    </div>
  );
}
