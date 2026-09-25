import ScreenHeader from '../components/common/ScreenHeader'
import { skills } from '../data/portfolio'

export default function SkillsScreen() {
  const groups = [['Frontend', skills.frontend], ['Backend', skills.backend], ['Data & platform', skills.dataAndPlatform], ['Project tooling', skills.projectTools]]

  return <div className="screen-inner">
    <ScreenHeader index="05" eyebrow="Skills" title="A focused JavaScript-centered toolkit." description="No skill levels or percentages are added because the resume does not provide them." />
    <div className="skills-dashboard">
      {groups.map(([label, items], i) => <article className="app-card skill-group" key={label}><div className="group-number">0{i + 1}</div><span className="card-kicker">{label}</span><div className="skill-list">{items.map((item) => <div key={item}>{item}<span>↗</span></div>)}</div></article>)}
      <article className="app-card nontech"><div><span className="card-kicker">Non-technical skills</span><p>Listed exactly as presented in the resume.</p></div><div className="tag-row">{skills.nonTechnical.map((item) => <span key={item}>{item}</span>)}</div></article>
    </div>
  </div>
}
