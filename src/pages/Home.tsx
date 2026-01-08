// @ts-nocheck
import AsciiVideo from '../components/rune/AsciiVideo';
import AsciiVideoJsonl from '../components/rune/AsciiVideoJsonl';
import AsciiImageJsonl from '../components/rune/AsciiImageJsonl';
import ThemeToggle from '../components/ThemeToggle';
import './Home.css';

const Home = () => {
  const projects = [
    {
      name: 'rune',
      description: 'c++ video/image to ascii art converter',
      url: 'https://github.com/NeelKondapalli/rune'
    },
    {
      name: 'sure',
      description: 'critize X posts based on prior research',
      url: 'https://github.com/NeelKondapalli/sure'
    },
    {
      name: 'neptune',
      description: 'music creation & editing with Meta MusicGen',
      url: 'https://github.com/NeelKondapalli/neptunev1'
    },
    {
      name: 'solar',
      description: 'agentic wallet interactions on the Flare Mainnet',
      url: 'https://github.com/NeelKondapalli/solarv1'
    },
    {
      name: 'aitokenize',
      description: 'tokenization platform for model monetization',
      url: 'https://github.com/NeelKondapalli/aitokenize'
    }
  ];

  const experiences = [
    {
      company: 'cubist systematic strategies',
      role: 'incoming quant developer intern',
      url: 'https://point72.com/cubist/',
      asciiPath: '/logos/p72',
      fontSize: 6,
      offsetX: -245
    },
    {
      company: 'tower research capital',
      role: 'software engineer intern',
      url: 'https://tower-research.com/',
      asciiPath: '/logos/tower',
      fontSize: 6,
      offsetX: -245
    },
    {
      company: 'berkeley skydeck',
      role: 'software engineer intern',
      url: 'https://skydeck.berkeley.edu/',
      asciiPath: '/logos/skydeck',
      fontSize: 8.5,
      offsetX: -250
    },
    {
      company: 'tetrascience',
      role: 'machine learning intern',
      url: 'https://www.tetrascience.com/',
      asciiPath: '/logos/tetra',
      fontSize: 8.5,
      offsetX: -250
    },
  ];

  return (
    <div className="home">
      <ThemeToggle />
      <br/>
      <div className="video-container">
        {/* <AsciiVideo framesPath="/horse" /> */}
        <AsciiVideoJsonl framesPath="/horse_shrinked" preferGzip={true} />
      </div>

      <div className="content">
        <h1>hi i'm neel kondapalli</h1>
        <p className="tagline">
          i'm an eecs student @ berkeley interested in infrastructure and distributed systems
        </p>

        <section className="section">
          <h2>experience</h2>
          <div className="list">
            {experiences.map((exp, index) => (
              <div key={index} className="list-item-with-hover">
                 {exp.asciiPath && (
                  <div
                    className="ascii-hover-image"
                    style={{
                      transform: `translateX(${exp.offsetX || 0}px)`
                    }}
                  >
                    <AsciiImageJsonl
                      framesPath={exp.asciiPath}
                      preferGzip={true}
                      fontSize={exp.fontSize}
                    />
                  </div>
                )}
                <div className="list-item">
                  <a className="company" href={exp.url} target="_blank" rel="noopener noreferrer ">
                    <span className="company">{exp.company}</span>
                  </a>
                  <span> - {exp.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>projects</h2>
          <div className="list">
            {projects.map((project, index) => (
              <div key={index} className="list-item">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
                <span> - {project.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section socials">
          <a href="mailto:neel2h06@gmail.com">email</a>
          <a href="https://x.com/neelkon" target="_blank" rel="noopener noreferrer">x</a>
          <a href="https://linkedin.com/in/neel-kondapalli" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://github.com/NeelKondapalli" target="_blank" rel="noopener noreferrer">github</a>
        </section>
      </div>
    </div>
  );
};

export default Home;
