import { Brain } from 'lucide-react'

export default function Career() {
    return (
        <div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <Brain className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">AI-Generated Career Recommendation</h3>
                    <p className="text-gray-600 mt-1">
                      Based on {'student.name'}'s performance in {'student.course'}, the following career paths are recommended:
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
 
    )
}
