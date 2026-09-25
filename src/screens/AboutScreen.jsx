import ScreenHeader from '../components/common/ScreenHeader'
import { profile } from '../data/portfolio'

export default function AboutScreen() {
  return <div className="screen-inner">
    <ScreenHeader index="02" eyebrow="About me" title="Curious by nature. Building toward web development." description="A concise view of the background and direction described in the resume." />
    <div className="about-grid">
      <article className="app-card large-copy"><span className="card-kicker">Background</span><p>{profile.background}</p><p>{profile.intro}</p></article>
      <article className="app-card"><span className="card-kicker">Professional focus</span><h2>Modern JavaScript-based applications.</h2><p>{profile.focus}</p></article>
      <article className="app-card"><span className="card-kicker">Interests</span><h2>{profile.interests}</h2><p>Learning through practical projects and continued exploration of programming technologies.</p></article>
      <article className="app-card strengths-card"><span className="card-kicker">Key strengths</span>{profile.strengths.map((strength, i) => <div className="strength-row" key={strength}><b>0{i + 1}</b><span>{strength}</span></div>)}</article>
    </div>
  </div>
}
