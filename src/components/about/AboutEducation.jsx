import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const AboutEducation = () => {
	return (
		<div className="mt-10 sm:mt-20 text-left">
			<h2 className="font-general-semibold text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-8 flex items-center gap-3">
				<FiBookOpen className="text-2xl text-indigo-500 dark:text-indigo-400" />
				Education
			</h2>
			<div className="p-6 sm:p-8 bg-secondary-light dark:bg-ternary-dark rounded-xl border border-ternary-light dark:border-secondary-dark hover:shadow-md transition-shadow duration-300">
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
					<div>
						<h3 className="text-xl font-bold text-primary-dark dark:text-primary-light">
							University of Pécs
						</h3>
						<p className="text-indigo-500 dark:text-indigo-400 font-medium mt-1">
							Bachelor of Science in Computer Science <span className="text-gray-400 dark:text-gray-500 font-normal">| Hungary</span>
						</p>
					</div>
				</div>
				<div className="space-y-4 mt-6 text-ternary-dark dark:text-ternary-light text-md leading-relaxed">
					<div>
						<span className="font-bold text-primary-dark dark:text-primary-light block sm:inline mr-2">Core Courses:</span>
						<span>Programming (I & II), Web Programming, Algorithms, AI, Data Analysis, Networks, Databases</span>
					</div>
					<div className="border-t border-ternary-light dark:border-secondary-dark pt-4">
						<span className="font-bold text-primary-dark dark:text-primary-light block sm:inline mr-2">Mathematics:</span>
						<span>Discrete Math, Linear Algebra, Calculus, Probability, Statistics</span>
					</div>
					<div className="border-t border-ternary-light dark:border-secondary-dark pt-4">
						<span className="font-bold text-primary-dark dark:text-primary-light block sm:inline mr-2">Systems:</span>
						<span>Software Technologies, Operating Systems</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutEducation;
