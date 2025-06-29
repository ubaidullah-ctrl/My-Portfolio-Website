
import { analytics1, playstore1, playstore2, playstore3 } from '../images/analyticsImages';
import screenImage from '../images/screen.png';
import chaplinThumbnail from '../images/thumbnail.png';

export const singleProjectData = [
  // --- Existing Projects ---
  {
	ProjectHeader: {
	  title: 'Tech E-commerce Shop (Singitronic)',
	  tags: 'Next.js / Node.js / MySQL / Prisma / Tailwind',
	},
	ProjectImages: [
	  { id: 1, title: 'Home page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a48c092d-1f19-4bae-a480-0b5862630e1c' },
	  { id: 2, title: 'Shop page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/1133effb-0511-40c6-aee5-119404c5af34' },
	  { id: 3, title: 'Single product page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/443ea3e2-4d32-4d15-aa3b-436cbae0eade' },
	  { id: 4, title: 'Register page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/0052cc90-d61a-4a8c-b8d8-02cee1b45d13' },
	  { id: 5, title: 'Login page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/7a377bb3-330f-43a4-860f-400bf7aa0f97' },
	  { id: 6, title: 'Search page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/384c7f55-16ee-4966-b612-a34f5506af51' },
	  { id: 7, title: 'Wishlist page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a20568d6-12fb-42e6-a5ef-583f6e79229a' },
	  { id: 8, title: 'Cart page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/b9d326be-342c-4f6a-af64-34794f6c39eb' },
	  { id: 9, title: 'Checkout page', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a458d931-9df2-4e3d-bf3f-702c1a3ba9e9' },
	  { id: 10, title: 'Admin dashboard - All orders', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/498b07f4-422c-46c5-b2e4-ed2a93306b7a' },
	  { id: 11, title: 'Admin dashboard - All products', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/e26822ab-6c7e-4474-9161-288a5bb3476f' },
	  { id: 12, title: 'Admin dashboard - All categories', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/9e4a54d7-5bbb-4f1b-bdab-43c1079510e1' },
	  { id: 13, title: 'Admin dashboard - All users', img: 'https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/e14e8f2c-4377-42fd-b89b-d4868cc11b11' }
	],
	ProjectInfo: {
	  ClientHeading: 'About Project',
	  CompanyInfo: [
		{ id: 1, title: 'Type', details: 'E-commerce Platform' },
		{ id: 2, title: 'Stack', details: 'Next.js, Node.js, MySQL, Prisma, Tailwind' },
		{ id: 3, title: 'Year', details: '2025' }
	  ],
	  ObjectivesHeading: 'Description',
	  ObjectivesDetails: `Singitronic is a modern online shop for electronics, built from scratch using Next.js, Node.js, and MySQL. The project was developed as a college exam, following the waterfall model for software engineering. It features a custom design, full admin dashboard, and 40+ pages of software documentation. The system is fully responsive and includes advanced features for both users and admins.`,
	  Technologies: [
		{ title: 'Tech Stack', techs: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Prisma'] }
	  ],
	  ProjectDetailsHeading: 'Features',
	  ProjectDetails: [
		{ id: 1, details: 'Modern, custom-designed responsive UI' },
		{ id: 2, details: 'Full authentication and user management' },
		{ id: 3, details: 'Product catalog, search, and filtering' },
		{ id: 4, details: 'Shopping cart, wishlist, and checkout flow' },
		{ id: 5, details: 'Admin dashboard for managing products, orders, users, and categories' },
		{ id: 6, details: 'Manual and ad hoc testing with detailed documentation' },
		{ id: 7, details: 'Waterfall model process and use case diagrams' },
		{ id: 8, details: 'Project management with Plaky and Figma component hierarchy' }
	  ],
	  SocialSharingHeading: 'Share This',
	  SocialSharing: [],
	  github: {
		url: 'https://github.com/ubaidullah-ctrl/Electronic-Ecommerce-Store',
	  }
	},
	// RelatedProject removed
  },
  {
	ProjectHeader: {
	  title: 'Lip Reader A.I',
	  
	  tags: 'PyTorch / MediaPipe / OpenCV / Python',
	},
	ProjectImages: [
	  { id: 1, title: 'Chaplin Thumbnail', img: chaplinThumbnail }
	],
	ProjectInfo: {
	  ClientHeading: 'About Project',
	  CompanyInfo: [
		{ id: 1, title: 'Type', details: 'AI / Computer Vision' },
		{ id: 2, title: 'Stack', details: 'PyTorch, MediaPipe, OpenCV, Python' }
	  ],
	  ObjectivesHeading: 'Description',
	  ObjectivesDetails: 'An A.I.-based lip-reading application that performs silent speech recognition using computer vision. It captures live video from your webcam, analyzes facial and lip movements, and predicts spoken words using a pretrained deep learning model.',
	  Technologies: [
		{ title: 'Tech Stack', techs: ['MediaPipe', 'OpenCV', 'PyTorch', 'LRS3 Model', 'Python', 'Flask', 'TensorFlow Lite'] }
	  ],
	  ProjectDetailsHeading: 'Features',
	  ProjectDetails: [
		{ id: 1, details: 'Live webcam input screen' },
		{ id: 2, details: 'Detection in action: lip-tracked frame' },
		{ id: 3, details: 'Predicted words or output screen' },
		{ id: 4, details: 'System architecture diagram (optional)' },
		{ id: 5, details: 'Terminal logs showing model load + prediction' }
	  ],
	  SocialSharingHeading: 'Share This',
	  SocialSharing: [],
	  github: {
		url: 'https://github.com/ubaidullah-ctrl/Lip-Reader-A.I',
	  }
	},
   // RelatedProject removed
  },
  {
	ProjectHeader: {
	  title: 'A.I. Link Summarizer',
	  publishDate: '2025',
	  tags: 'Next.js / OpenAI GPT-4 / RapidAPI / Redux / Tailwind',
	},
	ProjectImages: [
	  { id: 1, title: 'Main UI', img: screenImage }
	],
	ProjectInfo: {
	  ClientHeading: 'About Project',
	  CompanyInfo: [
		{ id: 1, title: 'Type', details: 'Web Tool / AI' },
		{ id: 2, title: 'Stack', details: 'Next.js, Redux, OpenAI GPT-4 (RapidAPI), Tailwind CSS' }
	  ],
	  ObjectivesHeading: 'Description',
	  ObjectivesDetails: `This Next.js project utilizes the power of OpenAI GPT-4 through RapidAPI to create a simple article summarizer. With the combination of Next.js for the frontend, Redux for state management, and OpenAI GPT-4 for natural language processing, this project offers a seamless and efficient way to generate article summaries.`,
	  Technologies: [
		{ title: 'Tech Stack', techs: ['Next.js', 'Redux', 'OpenAI GPT-4', 'RapidAPI', 'Tailwind CSS'] }
	  ],
	  ProjectDetailsHeading: 'Features',
	  ProjectDetails: [
		{ id: 1, details: 'Article Summarization using OpenAI GPT-4' },
		{ id: 2, details: 'Next.js Framework for SSR and fast UI' },
		{ id: 3, details: 'Redux for state management' },
		{ id: 4, details: 'RapidAPI integration for OpenAI GPT-4' },
		{ id: 5, details: 'Simple, clean UI' }
	  ],
	  SocialSharingHeading: 'Share This',
	  SocialSharing: [],
	  github: {
		url: 'https://github.com/ubaidullah-ctrl/AI---Summarizer',
	  }
	},
   // RelatedProject removed
  },
  // --- Analytics Projects ---
  {
	ProjectHeader: {
	  title: 'Play Store Data Analytics',
	  tags: 'Python / Excel / SQL / Power BI',
	},
	ProjectImages: [
	  { id: 1, title: 'Dashboard Page 1', img: playstore1 },
	  { id: 2, title: 'Dashboard Page 2', img: playstore2 },
	  { id: 3, title: 'Dashboard Page 3', img: playstore3 }
	],
	ProjectInfo: {
	  ClientHeading: 'About Project',
	  CompanyInfo: [
		{ id: 1, title: 'Type', details: 'End-to-End Data Analytics' },
		{ id: 2, title: 'Stack', details: 'Python, Excel, SQL, Power BI' }
	  ],
	  ObjectivesHeading: 'Description',
	  ObjectivesDetails: 'A comprehensive end-to-end data analytics project focused on Play Store data. Leveraging Python, Excel, SQL, and Power BI, this project delivers actionable insights through interactive dashboards, uncovering trends and patterns in app performance and user engagement.',
	  Technologies: [
		{ title: 'Tech Stack', techs: ['Python', 'Excel', 'SQL', 'Power BI'] }
	  ],
	  ProjectDetailsHeading: 'Features',
	  ProjectDetails: [
		{ id: 1, details: 'Data cleaning and transformation using Python and Excel' },
		{ id: 2, details: 'SQL for advanced querying and aggregation' },
		{ id: 3, details: 'Interactive Power BI dashboards for deep insights' },
		{ id: 4, details: 'Visual storytelling with multi-page dashboards' }
	  ],
	  SocialSharingHeading: 'Share This',
	  SocialSharing: [],
	  github: {
		url: 'https://github.com/ubaidullah-ctrl/playstore-analytics'
	  }
	}
  },
  {
	ProjectHeader: {
	  title: 'Web Traffic Analytics & Visualization',
	  tags: 'Python / Web Scraping / Tableau',
	},
	ProjectImages: [
	  { id: 1, title: 'Web Traffic Dashboard', img: analytics1 }
	],
	ProjectInfo: {
	  ClientHeading: 'About Project',
	  CompanyInfo: [
		{ id: 1, title: 'Type', details: 'Data Analytics & Visualization' },
		{ id: 2, title: 'Stack', details: 'Python, Tableau' }
	  ],
	  ObjectivesHeading: 'Description',
	  ObjectivesDetails: 'This project combines web scraping and data visualization to analyze the distribution of therapeutic centers in Poland. Using Python for data extraction and Tableau for interactive dashboards, it provides valuable insights into the geographic spread and accessibility of therapy services.',
	  Technologies: [
		{ title: 'Tech Stack', techs: ['Python', 'Requests', 'BeautifulSoup', 'Tableau'] }
	  ],
	  ProjectDetailsHeading: 'Features',
	  ProjectDetails: [
		{ id: 1, details: 'Automated web scraping of real-world healthcare data' },
		{ id: 2, details: 'Data cleaning and export to CSV' },
		{ id: 3, details: 'Interactive Tableau dashboard for geographic analysis' },
		{ id: 4, details: 'Supports families, policymakers, and researchers' }
	  ],
	  SocialSharingHeading: 'Share This',
	  SocialSharing: [],
	  github: {
		url: 'https://github.com/ubaidullah-ctrl/Web-Scraping-Data-Visualization-Therapeutic-Centers-in-Poland'
	  }
	}
  },
  // --- Analytics Projects ---
  {
	ProjectHeader: {
	  title: 'Play Store Data Analytics',
	  tags: 'Python / Excel / SQL / Power BI',
	},
	ProjectImages: [
	  { id: 1, title: 'Dashboard Page 1', img: playstore1 },
	  { id: 2, title: 'Dashboard Page 2', img: playstore2 },
	  { id: 3, title: 'Dashboard Page 3', img: playstore3 }
	],
	ProjectInfo: {
	  ClientHeading: 'About Project',
	  CompanyInfo: [
		{ id: 1, title: 'Type', details: 'End-to-End Data Analytics' },
		{ id: 2, title: 'Stack', details: 'Python, Excel, SQL, Power BI' }
	  ],
	  ObjectivesHeading: 'Description',
	  ObjectivesDetails: 'A comprehensive end-to-end data analytics project focused on Play Store data. Leveraging Python, Excel, SQL, and Power BI, this project delivers actionable insights through interactive dashboards, uncovering trends and patterns in app performance and user engagement.',
	  Technologies: [
		{ title: 'Tech Stack', techs: ['Python', 'Excel', 'SQL', 'Power BI'] }
	  ],
	  ProjectDetailsHeading: 'Features',
	  ProjectDetails: [
		{ id: 1, details: 'Data cleaning and transformation using Python and Excel' },
		{ id: 2, details: 'SQL for advanced querying and aggregation' },
		{ id: 3, details: 'Interactive Power BI dashboards for deep insights' },
		{ id: 4, details: 'Visual storytelling with multi-page dashboards' }
	  ],
	  SocialSharingHeading: 'Share This',
	  SocialSharing: [],
	  github: {
		url: 'https://github.com/ubaidullah-ctrl/playstore-analytics'
	  }
	}
  },
  {
	ProjectHeader: {
	  title: 'Web Traffic Analytics & Visualization',
	  tags: 'Python / Web Scraping / Tableau',
	},
	ProjectImages: [
	  { id: 1, title: 'Web Traffic Dashboard', img: analytics1 }
	],
	ProjectInfo: {
	  ClientHeading: 'About Project',
	  CompanyInfo: [
		{ id: 1, title: 'Type', details: 'Data Analytics & Visualization' },
		{ id: 2, title: 'Stack', details: 'Python, Tableau' }
	  ],
	  ObjectivesHeading: 'Description',
	  ObjectivesDetails: 'This project combines web scraping and data visualization to analyze the distribution of therapeutic centers in Poland. Using Python for data extraction and Tableau for interactive dashboards, it provides valuable insights into the geographic spread and accessibility of therapy services.',
	  Technologies: [
		{ title: 'Tech Stack', techs: ['Python', 'Requests', 'BeautifulSoup', 'Tableau'] }
	  ],
	  ProjectDetailsHeading: 'Features',
	  ProjectDetails: [
		{ id: 1, details: 'Automated web scraping of real-world healthcare data' },
		{ id: 2, details: 'Data cleaning and export to CSV' },
		{ id: 3, details: 'Interactive Tableau dashboard for geographic analysis' },
		{ id: 4, details: 'Supports families, policymakers, and researchers' }
	  ],
	  SocialSharingHeading: 'Share This',
	  SocialSharing: [],
	  github: {
		url: 'https://github.com/ubaidullah-ctrl/web-traffic-dashboard'
	  }
	}
  }
];
