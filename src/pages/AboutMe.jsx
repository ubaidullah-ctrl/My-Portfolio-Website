import AboutMeBio from '../components/about/AboutMeBio';
import AboutExperience from '../components/about/AboutExperience';
import AboutEducation from '../components/about/AboutEducation';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto px-4 md:px-0"
			>
				<AboutMeBio />
				<AboutExperience />
				<AboutEducation />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
