import { useLoaderData } from "react-router-dom";
import { projectImages } from "../constants/image.index";
import "../styles/project.css";

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  desc: string;
  color: string;
}

interface ProjectsLoaderData {
  projects: Project[];
}

export default function ProjectsPage() {
  const { projects } = useLoaderData() as ProjectsLoaderData;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={projectImages.project}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: project.color }}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Project — {project.id}</span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.category}</p>
                
                <p className="text-gray-700 mb-4 line-clamp-3">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    View Project
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
