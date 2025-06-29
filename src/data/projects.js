// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';

export const projectsData = [
  {
	id: 'tech-ecommerce-shop',
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
	id: 'lip-reader-ai',
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
	id: 'ai-link-summarizer',
	title: 'A.I. Link Summarizer',
	category: 'Web Application',
	img: UIImage1,
	ProjectHeader: {
	  title: 'A.I. Link Summarizer',
	  publishDate: '2025',
	  tags: 'Next.js / Node.js / OpenAI API / Tailwind',
	},
	description: 'A modern web tool that takes a URL and returns a short, intelligent summary using OpenAI’s language model. Built with a clean UI using Next.js and integrated with OpenAI’s API for real-time content summarization.'
  },
  {
	id: 'playstore-data-analytics',
	title: 'Play Store Data Analytics',
	category: 'Data Analytics',
	img: require('../images/playstore-dashboard1.png').default,
	ProjectHeader: {
	  title: 'Play Store Data Analytics',
	  tags: 'Python / Excel / SQL / Power BI',
	},
	description: 'A comprehensive end-to-end data analytics project focused on Play Store data. Leveraging Python, Excel, SQL, and Power BI, this project delivers actionable insights through interactive dashboards, uncovering trends and patterns in app performance and user engagement.'
  },
  {
	id: 'web-traffic-analytics',
	title: 'Web Traffic Analytics & Visualization',
	category: 'Data Analytics',
	img: require('../images/analytics-dashboard1.png').default,
	ProjectHeader: {
	  title: 'Web Traffic Analytics & Visualization',
	  tags: 'Python / Web Scraping / Tableau',
	},
	description: 'This project combines web scraping and data visualization to analyze the distribution of therapeutic centers in Poland. Using Python for data extraction and Tableau for interactive dashboards, it provides valuable insights into the geographic spread and accessibility of therapy services.'
  },
  {
	id: 'vulnerability-scanner',
	title: 'Vulnerability Scanner',
	category: 'Cybersecurity',
	img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
	ProjectHeader: {
	  title: 'Vulnerability Scanner',
	  tags: 'Python / Requests / Security',
	},
	description: 'A Python-based tool for scanning web applications for vulnerabilities such as XSS, SQL Injection, Directory Traversal, Command Injection, and more. Features interactive CLI, category-based scanning, and easy extensibility for security researchers and developers.'
  },
  {
    id: 'security-log-analyzer',
    title: 'Security Log Analyzer',
    category: 'Cybersecurity',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    ProjectHeader: {
      title: 'Security Log Analyzer',
      tags: 'Python / Cybersecurity / Log Analysis / Visualization',
    },
    description: 'A sophisticated Python-based log analysis tool for cybersecurity professionals. Detects, analyzes, and visualizes potential security threats from web server logs. Features include IP request analysis, suspicious activity detection, endpoint access tracking, threat scoring, geolocation insights, and interactive visualizations. Generates CSV, JSON, and HTML reports for comprehensive threat intelligence.'
  }
];
