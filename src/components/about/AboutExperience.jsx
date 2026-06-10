import React from 'react';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
	{
		id: 1,
		role: 'Full-Stack Developer',
		company: 'BitNorm',
		location: 'Remote, Netherlands',
		period: 'Jul 2025 – Present',
		points: [
			'Contributing to BitNorm’s cloud-based analytics platform, shipping TradingView-inspired charting functionalities and sophisticated analytical dashboards supporting 50K+ users',
			'Architecting scalable backend APIs with Node.js, Express, PostgreSQL, prioritizing clean architecture and improving data processing efficiency by 20% during load testing',
			'Implemented 10+ reusable React + TypeScript components for complex market data dashboards, optimizing frontend rendering and reducing UI edge cases by 15%'
		]
	},
	{
		id: 2,
		role: 'Full-Stack Developer',
		company: 'Buildspace',
		location: 'Remote, United States',
		period: 'Apr 2025 – Jul 2025',
		points: [
			'Designed and deployed an AI-driven, full-stack application from concept to launch in 4 weeks using React, TypeScript, and high-performance backend APIs',
			'Achieved 100% milestone completion; optimized rendering pathways and client state management for 35% faster seamless performance'
		]
	},
	{
		id: 3,
		role: 'Front-End Developer',
		company: 'StuDev, University of Pécs',
		location: 'Pécs, Hungary',
		period: 'Sep 2024 – Mar 2025',
		points: [
			'Enhanced UI responsiveness by 40% and improved user engagement by 25% using React + TypeScript optimizations and scalable frontend design patterns',
			'Revamped analytical tracking interfaces with Tailwind CSS, contributing to a 30% reduction in bounce rate; integrated data pipelines with secure PostgreSQL systems'
		]
	}
];

const AboutExperience = () => {
	return (
		<div className="mt-10 sm:mt-20 text-left">
			<h2 className="font-general-semibold text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-8 flex items-center gap-3">
				<FiBriefcase className="text-2xl text-indigo-500 dark:text-indigo-400" />
				Work Experience
			</h2>
			<div className="space-y-8">
				{experiences.map((exp) => (
					<div 
						key={exp.id} 
						className="p-6 sm:p-8 bg-secondary-light dark:bg-ternary-dark rounded-xl border border-ternary-light dark:border-secondary-dark hover:shadow-md transition-shadow duration-300"
					>
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
							<div>
								<h3 className="text-xl font-bold text-primary-dark dark:text-primary-light">
									{exp.role}
								</h3>
								<p className="text-indigo-500 dark:text-indigo-400 font-medium mt-1">
									{exp.company} <span className="text-gray-400 dark:text-gray-500 font-normal">| {exp.location}</span>
								</p>
							</div>
							<span className="text-xs sm:text-sm px-3 py-1 bg-primary-light dark:bg-primary-dark text-gray-600 dark:text-gray-400 font-medium rounded-full border border-ternary-light dark:border-secondary-dark self-start sm:self-auto">
								{exp.period}
							</span>
						</div>
						<ul className="list-disc list-outside ml-5 space-y-2 text-ternary-dark dark:text-ternary-light text-md leading-relaxed">
							{exp.points.map((point, idx) => (
								<li key={idx} className="pl-1">
									{point}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutExperience;
