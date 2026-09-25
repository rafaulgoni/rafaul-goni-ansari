import ScreenHeader from '../components/common/ScreenHeader'
import { projects } from '../data/portfolio'

export default function ExperienceScreen({ goTo }) {
  return <div className="screen-inner">
    <ScreenHeader index="03" eyebrow="Experience" title="Project experience, presented honestly." description="The provided resume does not list a formal employment position, so this screen keeps project work separate from job history." />
    <div className="experience-layout">
      <div className="experience-rail"><span>01</span><i /><span>02</span><i /><span>03</span></div>
      <article className="app-card experience-main">
        <div className="experience-badge">PROJECT-BASED EXPERIENCE</div>
        <h2>Hands-on web development through three builds.</h2>
        <p>The resume documents practical work on Fast Delivery, Royal Service, and Artful Abode. Their technologies and problem-solving notes are presented in the Projects screen rather than being recast as formal employment.</p>
        <div className="experience-list">{projects.map((project, i) => <button type="button" key={project.name} onClick={() => goTo('projects')}><span>0{i + 1}</span><strong>{project.name}</strong><em>{project.stack.slice(0, 3).join(' · ')}</em><b>↗</b></button>)}</div>
      </article>
    </div>
  </div>
}
