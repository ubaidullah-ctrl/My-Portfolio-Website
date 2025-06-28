// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';

export const projectsData = [
  {
	id: 1,
	title: 'Tech E-commerce Shop (Singitronic)',
	category: 'Web Application',
	img: WebImage1,
	ProjectHeader: {
	  title: 'Tech E-commerce Shop (Singitronic)',
	  publishDate: '2025',
	  tags: 'Next.js / Node.js / MySQL / Prisma / Tailwind',
	},
	description: 'A full-featured eCommerce platform for electronics with a powerful admin dashboard. Built from scratch with authentication, product management, and order handling. Includes advanced testing, real database integration, and full documentation based on real software engineering workflows.'
  },
  {
	id: 2,
	title: 'Lip Reader A.I',
	category: 'AI / Computer Vision',
	img: WebImage2,
	ProjectHeader: {
	  title: 'Lip Reader A.I',
	  publishDate: '2025',
	  tags: 'PyTorch / MediaPipe / OpenCV / Python',
	},
	description: 'An A.I.-based lip-reading application that performs silent speech recognition using computer vision. It captures live video from your webcam, analyzes facial and lip movements, and predicts spoken words using a pretrained deep learning model.'
  },
  {
	id: 3,
	title: 'A.I. Link Summarizer',
	category: 'Web Application',
	img: UIImage1,
	ProjectHeader: {
	  title: 'A.I. Link Summarizer',
	  publishDate: '2025',
	  tags: 'Next.js / Node.js / OpenAI API / Tailwind',
	},
	description: 'A modern web tool that takes a URL and returns a short, intelligent summary using OpenAI’s language model. Built with a clean UI using Next.js and integrated with OpenAI’s API for real-time content summarization.'
  }
];
