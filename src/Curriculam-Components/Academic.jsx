import React from 'react';

const Academic = () => {
    return (
        <div className="w-full min-h-screen ">
            <section className="w-full p-4 sm:w-[90%] mx-auto py-8 text-justify">
                <header className="bg-secondary text-primary py-6">
                    <p className="w-[95%] mx-auto px-2 sm:px-6 text-lg sm:text-xl tracking-wider ">
                        The Tamil Nadu State Board, under the <strong>"Samacheer Kalvi"</strong> or Uniform System of School Education, offers a standardized curriculum for students from Class 6 to Class 12. This system ensures uniformity in education across the state, providing equal learning opportunities for all students.
                    </p>
                </header>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 border-black">Curriculum Structure</h2>
                    <div className="space-y-6">
                        
                        <div>
                            <h3 className="text-xl font-semibold text-blue-800">Middle School (Classes 6 to 8):</h3>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg py-2">
                                Builds upon the primary foundation with subjects including Tamil, English, Mathematics, Science, Social Science, and Computer Science. Emphasis is placed on critical thinking and application of knowledge.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-blue-800">High School (Classes 9 and 10):</h3>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg py-2">
                                Prepares students for the Secondary School Leaving Certificate (SSLC) examination. Core subjects include Tamil, English, Mathematics, Science (Physics, Chemistry, Biology), and Social Science (History, Geography, Civics, Economics). The curriculum is designed to provide a comprehensive understanding of each subject.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-blue-800">Higher Secondary (Classes 11 and 12):</h3>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg py-2">
                                Students select a stream—Science, Commerce, or Arts—based on their interests and career aspirations. Each stream offers specialized subjects:
                            </p>
                            <ul className="list-disc ml-8 text-gray-700 text-base sm:text-lg">
                                <li>
                                    <strong>Science Stream:</strong> Physics, Chemistry, Biology/Computer Science, Mathematics.
                                </li>
                                <li>
                                    <strong>Commerce Stream:</strong> Accountancy, Economics, Business Studies, Mathematics/Computer Science.
                                </li>
                                <li>
                                    <strong>Arts Stream:</strong> History, Political Science, Geography, Economics.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 border-black">Assessment and Evaluation</h2>
                    <ul className="list-disc ml-8 text-gray-700 space-y-2 text-base sm:text-lg">
                        <li>
                            <strong>Continuous and Comprehensive Evaluation (CCE):</strong> Implemented to assess students' progress through regular assessments, assignments, and projects, promoting holistic development.
                        </li>
                        <li>
                            <strong>Board Examinations:</strong> Conducted at the end of Classes 10 and 12, these exams are crucial for students' academic progression and higher education opportunities.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 border-black">Educational Resources</h2>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        The Tamil Nadu State Board provides textbooks and learning materials through the Tamil Nadu Textbook and Educational Services Corporation. These resources are designed to be student-friendly, incorporating activities and exercises that enhance understanding.
                    </p>
                </section>
            </section>
        </div>
    );
};

export default Academic;
