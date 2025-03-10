import { Badge } from '@/components/ui/badge';
import { EducationType, ExtracurricularType, SkillType, StudentType } from '@/types';
import { Mail, MapPin, Phone, User } from 'lucide-react';

interface BasicDetailsProps {
    student: StudentType,
    educations: EducationType[],
    skills: SkillType[],
    extracurriculars: ExtracurricularType[];
}

export default function BasicDetails({
    student,
    educations,
    skills,
    extracurriculars,
}: BasicDetailsProps) {

    // const informationsData: any = {

    //     educational: [
    //         {
    //             institute: 'Stanford University',
    //             course: 'Bachelor of Science in Computer Science',
    //             startYear: 2022,
    //             endYear: null
    //         },
    //         {
    //             institute: 'Lincoln High School',
    //             course: 'High School Diploma',
    //             startYear: 2018,
    //             endYear: 2022
    //         },

    //     ],
    //     skillsAndInterests: {
    //         techSkills: [
    //             {
    //                 id: 'python',
    //                 label: 'Python',
    //             },
    //             {
    //                 id: 'javaScript',
    //                 label: 'JavaScript',
    //             },
    //             {
    //                 id: 'machine_learning',
    //                 label: 'Machine Learning',
    //             },
    //             {
    //                 id: 'data_analysis',
    //                 label: 'Data Analysis',
    //             }
    //         ],
    //         softSkills: [
    //             {
    //                 id: 'team_work',
    //                 label: 'Team Work'
    //             },
    //             {
    //                 id: 'problem_solving',
    //                 label: 'Problem Solving'
    //             }
    //         ],
    //         interests: [
    //             {
    //                 id: 'artificial_intelligence',
    //                 label: 'Artificial Intelligence',
    //             },
    //             {
    //                 id: 'web_development',
    //                 label: 'Web Development'
    //             }
    //         ]
    //     },
    //     extracurricular: [
    //         {
    //             id: '1',
    //             label: 'Member of the Robotics Club',
    //         },
    //         {
    //             id: '2',
    //             label: 'Volunteer at Code.org workshops'
    //         }
    //     ],
    // };

    console.log(skills);

    return (
        <div className='flex flex-row w-full justify-between'>
            <div className='w-1/2 flex flex-col gap-5'>
                <div className=' flex flex-col gap-5 items-start justify-start'>
                    <p className='font-bold text-light-300 text-lg'>Personal Information</p>
                    <div className='flex flex-col items-start justify-start text-light-200 gap-2'>
                        <div className='flex flex-row gap-2'>
                            <User />
                            {student.age} years old
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Mail />
                            {student.mail}
                        </div>
                        <div className='flex flex-row gap-2'>
                            <MapPin />
                            {student.location}
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Phone />
                            {student.phoneNumber} years old
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-start justify-start'>
                    <p className='font-bold text-light-300 text-lg my-3'>Educational Background</p>
                    {
                        educations.map((edu: EducationType, index: number) => (
                            <div className='flex flex-col items-start justify-start text-light-200' key={index}>
                                <div className='flex flex-row gap-2 text-black'>
                                    {edu.institute}
                                </div>
                                <div className='flex flex-row gap-2'>
                                    {edu.course}
                                </div>
                                <div className='flex flex-row gap-2'>
                                    {edu.startYear} - {edu.endYear ? edu.endYear : 'Present'}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-1/2 flex flex-col gap-5'>
                <div>
                    <p className='font-bold text-light-300 text-lg my-3'>Skills</p>
                    <div className="w-full flex flex-wrap gap-3">
                        {skills && skills.map((skill: SkillType) => (
                            <Badge
                                key={skill.id}
                                className="bg-gray-200 text-center px-2 text-sm rounded-md whitespace-nowrap"
                            >
                                {skill.skillName}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-start justify-start'>
                    <p className='font-bold text-light-300 text-lg my-3'>Extracurricular Activities</p>
                    <ul className="mt-2 list-disc list-inside">
                        {
                            extracurriculars && extracurriculars.map((ext, index) => (
                                <li key={index} className="text-sm text-gray-700">{ext.activity}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
