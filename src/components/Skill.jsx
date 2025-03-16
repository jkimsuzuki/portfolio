/**
 * @copyright 2025 Joseph Yu Kim-Suzuki
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./Skillcard";


const skillItem = [
    {
      imgSrc: '/images/html.svg',
      label: 'HTML',
      desc: 'Front End Programming'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/ruby.svg',
      label: 'Ruby',
      desc: 'Back End Programming'
    },
    
    {
      imgSrc: '/images/mysql.svg',
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: '/images/docker.svg',
      label: 'Docker',
      desc: 'Containerization'
    },
    {
      imgSrc: '/images/grafana.svg',
      label: 'Grafana',
      desc: 'Monitoring & Observability'
    },
    {
      imgSrc: '/images/kubernetes.svg',
      label: 'Kubernetes',
      desc: 'Orchestration'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
              Essential Tools I Use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
              Discover the powerful tools and technologies I took courses on to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                          key={key}
                          imgSrc={imgSrc}
                          label={label}
                          desc={desc}
                          classes="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill
