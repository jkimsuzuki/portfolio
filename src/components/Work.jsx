/**
 * @copyright 2025 Joseph Yu Kim-Suzuki
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: '/images/freeCodeCamp.png',
      title: 'FreeCodeCamp Responsive Web Design Certification',
      tags: ['HTML', 'CSS'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/images/freeCodeCamp.png',
      title: 'FreeCodeCamp JavaScript Algorithms and Data Structures Certification',
      tags: ['JavaScript', 'OOP'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/the-odin-project.png',
      title: 'The Odin Project Foundations',
      tags: ['HTML', 'CSS', 'JavaScript'],
      projectLink: ''
    },
    {
      imgSrc: '/images/the-odin-project.png',
      title: 'The Odin Project Full Stack Ruby on Rails',
      tags: ['Ruby', 'React', 'Ruby on Rails'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/KodeKloudDocker.png',
      title: 'KodeKloud Dockers for Absolute Beginners',
      tags: ['Docker', 'Containerization'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/CKA.png',
      title: 'KodeKloud Kubernetes for Beginners',
      tags: ['Kubernetes', 'Orchestration'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
    {
      imgSrc: '/images/GCP.png',
      title: 'KodeKloud GCP Cloud Digital Leader Certification Course',
      tags: ['GCP', 'DevOps'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
    {
      imgSrc: '/images/MySQLCourse.webp',
      title: 'The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert',
      tags: ['MySQL', 'Databases'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
    {
      imgSrc: '/images/grafana-logo.png',
      title: 'Grafana Beginners to Advance Crash Course',
      tags: ['Grafana', 'Integrations'],
      projectLink: '/images/certifications/grafana.pdf'
    },
  ];


const Work = () => {
  return (
    <section 
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My Course & Certification Highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
                />
            ))}
        </div>

      </div>
    </section>
  )
}

export default Work
