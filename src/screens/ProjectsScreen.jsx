import ScreenHeader from '../components/common/ScreenHeader'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/portfolio'

export default function ProjectsScreen() {
  return <div className="screen-inner">
    <ScreenHeader index="04" eyebrow="Selected work" title="Projects that make the stack tangible." description="Interactive case-study cards keep the original project details easy to scan." />
    <div className="project-grid">{projects.map((project, i) => <ProjectCard key={project.name} project={project} index={i} />)}</div>
  </div>
}
