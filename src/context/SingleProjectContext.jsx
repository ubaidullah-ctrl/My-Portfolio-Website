import { useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();


export const SingleProjectProvider = ({ children }) => {
	const { id } = useParams();
	// Find project by id (id from params is string, project id is number)
	const project = singleProjectDataJson.find(
		(p, idx) => String(p.ProjectHeader && p.ProjectHeader.title ? idx + 1 : p.id) === id || String(p.id) === id
	) || singleProjectDataJson.find((p, idx) => String(idx + 1) === id);

	const [singleProjectData, setSingleProjectData] = useState(project);

	return (
		<SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData }}>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
