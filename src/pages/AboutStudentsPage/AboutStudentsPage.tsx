import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useStudentById } from '@/hooks/students/useStudentById'
import { ChevronDown, User, Mail, MapPin, Phone, ThumbsUp, ThumbsDown, Plus, Brain } from 'lucide-react'

// Define StudentType
export type StudentType = {
  id?: string;
  name: string;
  rollNo: string;
  course: string;
  age: number;
  mail: string;
  location: string;
  phoneNumber: string;
  courseYear: number;
  careerObservations?: { title: string; description: string; date: string }[];
  mentorRecommendations?: { strength?: string; weakness?: string; recommendation: string; mentor: string; date: string }[];
}

// Define the expected return type of useStudentById
type StudentDetailsType = {
  student: StudentType;
  // Add other fields if present, e.g., education, skills, etc.
}

export default function AboutStudentsPage() {
<<<<<<< HEAD
  const { id } = useParams();
  const { data: student, isLoading, error, refetch } = useStudentById(id!);

  if (!id) return (
    <p>Invalid student ID.</p>
  );


=======
  const { id } = useParams<{ id: string }>()
  // Specify Error | null for error type instead of any
  const { data: studentData, isLoading, error } = useStudentById(id || '') as {
    data: StudentDetailsType | undefined;
    isLoading: boolean;
    error: Error | null;
  }
  const [studentTab, setStudentTab] = useState('basic')

  const strengths = ["Problem Solving", "Analytical Thinking", "Communication"]
  const weaknesses = ["Time Management", "Public Speaking"]

  // Fallback student data
  const fallbackStudent: StudentType = {
    id: "1",
    name: "John Doe",
    rollNo: "CS001",
    course: "Computer Science",
    age: 21,
    mail: "john.doe@example.com",
    location: "San Francisco, CA",
    phoneNumber: "(555) 123-4567",
    courseYear: 3,
    careerObservations: [
      { title: "Career Interest Assessment", description: "Shows strong potential in software development with a focus on AI.", date: "March 10, 2025" }
    ],
    mentorRecommendations: [
      { strength: "Problem Solving", weakness: "Time Management", recommendation: "Focus on improving time management skills.", mentor: "Dr. Jane Smith", date: "February 15, 2025" }
    ]
  }
>>>>>>> 1b71aa40f1b815c60a59684648de7e2dcd8bfbc9

  if (!id) {
    return <div className="p-6 text-center text-red-600"><p>Invalid student ID</p></div>
  }

<<<<<<< HEAD
  console.log("St", student);

  const tabs = [
    { id: "basic_details", label: "Basic Details", content: <BasicDetails student={student.student} educations={student.education} skills={student.skills} extracurriculars={student.extracurricularsData} /> },
    { id: "mentor_observations", label: "Mentor Observations", content: <MentorObservations observations={student.observations} student={student.student} refetch={refetch}/> },
    { id: "career_recommendations", label: "Career Recommendations", content: <Career /> },
  ];
=======
  if (isLoading) {
    return <div className="p-6 text-center"><p>Loading student profile...</p></div>
  }

  if (error || !studentData) {
    console.log('Using fallback data due to:', error?.message)
    return <div className="p-6 text-center text-red-600"><p>Error fetching student details: {error?.message || 'Student not found'}</p></div>
  }
>>>>>>> 1b71aa40f1b815c60a59684648de7e2dcd8bfbc9

  // Extract the student object from studentData, fallback if undefined
  const student: StudentType = studentData.student || fallbackStudent

  return (
    <div className="p-6">
      <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ChevronDown className="h-4 w-4 transform rotate-90 mr-1" />
        <span>Back to Student List</span>
      </Link>

      {/* Student Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/64" alt={student.name} className="h-16 w-16 rounded-full" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
              <p className="text-gray-500">{student.rollNo} • {student.course}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <div className="flex space-x-2 mb-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Year {student.courseYear}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                studentTab === 'basic'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setStudentTab('basic')}
            >
              Basic Details
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                studentTab === 'observations'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setStudentTab('observations')}
            >
              Mentor Observations
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                studentTab === 'career'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setStudentTab('career')}
            >
              Career Recommendations
            </button>
          </nav>
        </div>

        <div className="p-6">
          {studentTab === 'basic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{student.age} years old</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{student.mail}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{student.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{student.phoneNumber}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Academic Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Roll Number:</span>
                    <span className="text-gray-600">{student.rollNo}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Course:</span>
                    <span className="text-gray-600">{student.course}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Course Year:</span>
                    <span className="text-gray-600">{student.courseYear}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {studentTab === 'observations' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Mentor Observations</h3>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Observation
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Strengths</h4>
                  <ul className="space-y-2">
                    {student.mentorRecommendations?.length
                      ? student.mentorRecommendations
                          .filter(rec => rec.strength)
                          .map((rec, index) => (
                            <li key={index} className="flex items-start">
                              <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                              <div>
                                <p className="font-medium">{rec.strength}</p>
                              </div>
                            </li>
                          ))
                      : strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <div>
                              <p className="font-medium">{strength}</p>
                              <p className="text-sm text-gray-500">
                                {index === 0 && "Excellent at breaking down complex problems"}
                                {index === 1 && "Strong data analysis capabilities"}
                                {index === 2 && "Clear and concise in presentations"}
                              </p>
                            </div>
                          </li>
                        ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Areas for Improvement</h4>
                  <ul className="space-y-2">
                    {student.mentorRecommendations?.length
                      ? student.mentorRecommendations
                          .filter(rec => rec.weakness)
                          .map((rec, index) => (
                            <li key={index} className="flex items-start">
                              <ThumbsDown className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                              <div>
                                <p className="font-medium">{rec.weakness}</p>
                              </div>
                            </li>
                          ))
                      : weaknesses.map((weakness, index) => (
                          <li key={index} className="flex items-start">
                            <ThumbsDown className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                            <div>
                              <p className="font-medium">{weakness}</p>
                              <p className="text-sm text-gray-500">
                                {index === 0 && "Often submits assignments close to deadlines"}
                                {index === 1 && "Hesitant when speaking to large groups"}
                              </p>
                            </div>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>

              <h4 className="font-medium text-gray-800 mb-4">Observation History</h4>
              <div className="space-y-4 pl-4">
                {student.mentorRecommendations?.length ? (
                  student.mentorRecommendations.map((rec, index) => (
                    <div key={index} className="timeline-item pl-6 pb-4">
                      <div className="timeline-dot" />
                      <div>
                        <p className="font-medium">Mentor Feedback</p>
                        <p className="text-sm text-gray-500">{rec.recommendation}</p>
                        <div className="flex items-center mt-1 text-xs text-gray-400">
                          <span>{rec.date}</span>
                          <span className="mx-2">•</span>
                          <span>{rec.mentor}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="timeline-item pl-6 pb-4">
                      <div className="timeline-dot" />
                      <div>
                        <p className="font-medium">Mid-term Evaluation</p>
                        <p className="text-sm text-gray-500">
                          Showing excellent progress in technical skills. Project work demonstrates strong analytical abilities.
                          Recommend focusing on public speaking opportunities to build confidence.
                        </p>
                        <div className="flex items-center mt-1 text-xs text-gray-400">
                          <span>April 15, 2024</span>
                          <span className="mx-2">•</span>
                          <span>Dr. James Wilson</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item pl-6 pb-4">
                      <div className="timeline-dot" />
                      <div>
                        <p className="font-medium">Project Feedback</p>
                        <p className="text-sm text-gray-500">
                          Implemented an impressive machine learning algorithm for the semester project.
                          Code quality was excellent, but documentation could be improved.
                          Suggested joining the AI research group for additional experience.
                        </p>
                        <div className="flex items-center mt-1 text-xs text-gray-400">
                          <span>March 3, 2024</span>
                          <span className="mx-2">•</span>
                          <span>Dr. Sarah Chen</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item pl-6">
                      <div className="timeline-dot" />
                      <div>
                        <p className="font-medium">Initial Assessment</p>
                        <p className="text-sm text-gray-500">
                          Shows strong aptitude for programming and mathematical concepts.
                          Eager to learn and participates actively in discussions.
                          Recommend focusing on collaborative projects to build teamwork skills.
                        </p>
                        <div className="flex items-center mt-1 text-xs text-gray-400">
                          <span>January 20, 2024</span>
                          <span className="mx-2">•</span>
                          <span>Dr. James Wilson</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {studentTab === 'career' && (
            <div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <Brain className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">AI-Generated Career Recommendation</h3>
                    <p className="text-gray-600 mt-1">
                      Based on {student.name}'s performance in {student.course}, the following career paths are recommended:
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2" />
                        <p className="font-medium">Machine Learning Engineer (Primary Recommendation)</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2" />
                        <p>Data Scientist</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-300 mr-2" />
                        <p>AI Research Scientist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Education</h3>
                  <div className="bg-white border border-gray-200 rounded-lg divide-y">
                    <div className="p-4">
                      <h4 className="font-medium">Master's in Machine Learning</h4>
                      <p className="text-sm text-gray-500">Stanford University</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">High Match (92%)</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Master's in Data Science</h4>
                      <p className="text-sm text-gray-500">MIT</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Good Match (85%)</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">PhD in Artificial Intelligence</h4>
                      <p className="text-sm text-gray-500">Carnegie Mellon University</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Potential Match (75%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Internship Opportunities</h3>
                  <div className="bg-white border border-gray-200 rounded-lg divide-y">
                    <div className="p-4">
                      <h4 className="font-medium">ML Research Intern</h4>
                      <p className="text-sm text-gray-500">Google AI</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">High Match (94%)</span>
                        <span className="ml-2 text-xs text-gray-500">Application Deadline: May 30, 2025</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Data Science Intern</h4>
                      <p className="text-sm text-gray-500">Microsoft Research</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Good Match (88%)</span>
                        <span className="ml-2 text-xs text-gray-500">Application Deadline: June 15, 2025</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">AI Product Development Intern</h4>
                      <p className="text-sm text-gray-500">Tesla</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Potential Match (78%)</span>
                        <span className="ml-2 text-xs text-gray-500">Application Deadline: July 1, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-4">Skill Development Plan</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Short-term Goals (3-6 months)</h4>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Complete advanced Python for Data Science course
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Build a portfolio project using TensorFlow
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Join the university's AI research group
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Medium-term Goals (6-12 months)</h4>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Secure a summer internship in ML/AI
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Contribute to an open-source ML project
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Present research at a student conference
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Long-term Goals (1-2 years)</h4>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Apply for graduate programs in ML/Data Science
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Publish a research paper with faculty mentor
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                        Develop specialized expertise in NLP or computer vision
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}