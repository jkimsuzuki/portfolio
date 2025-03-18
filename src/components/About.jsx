/**
 * @copyright 2025 Joseph Yu Kim-Suzuki
 * @license Apache-2.0
 */


const aboutItems = [
    {
      label: 'Languages Spoken',
      number: 3
    },
    {
      label: 'Languages Spoken',
      number: 3
    }
  ];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
              <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
               Welcome to my site! I am a very strong believer in working creatively and efficiently.<br />My work ethic revolves around a professional and stoic philosophy while maintaining communication and respect at the core. Combining my artistic, athletic and international background, I strongly value team, leadership, creativity and responsibility.  I love the idea of creating and being a part of something unmeasurably greater than myself. I believe in finding problems to solve and not waiting for something to go wrong. And you can trust that I will be a team player and be there for my team members and colleagues. I look forward to the opportunity to contribute my skills and experiences in a unique and creative manner for the company.

              </p>

              <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({label, number}, key) => (
                        <div key={key}>
                          <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                          </div> 


                          <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }

                <img 
                  src="/images/logo.svg" 
                  alt="Logo"
                  width={30}
                  height={30} 
                  className="ml-auto md:w-[40px] md:h-[40px]" />
              </div>
            </div>

        </div>
    </section>
  )
}

export default About
