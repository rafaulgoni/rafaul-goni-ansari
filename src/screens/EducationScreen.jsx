import ScreenHeader from '../components/common/ScreenHeader'
import { education } from '../data/portfolio'

export default function EducationScreen() {
  return <div className="screen-inner">
    <ScreenHeader index="06" eyebrow="Education" title="Philosophy in the classroom, programming in practice." description="The education entry below follows the resume exactly." />
    <article className="education-card app-card">
      <div className="education-year">{education.dates}</div>
      <div className="education-line"><span /><i /></div>
      <div className="education-content"><span className="card-kicker">{education.institution}</span><h2>{education.degree}</h2><h3>{education.subject}</h3><p>{education.college}</p></div>
      <div className="education-mark">BA</div>
    </article>
  </div>
}
