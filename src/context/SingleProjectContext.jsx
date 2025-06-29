import { useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';


const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const { id } = useParams();
  // Find project by unique id (string)
  const project = singleProjectDataJson.find((p) => p.id === id);
  const [singleProjectData, setSingleProjectData] = useState(project);

  return (
	<SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData }}>
	  {children}
	</SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
