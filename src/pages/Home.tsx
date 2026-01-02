// @ts-nocheck
import AsciiVideo from '../components/rune/AsciiVideo';
import AsciiVideoJsonl from '../components/rune/AsciiVideoJsonl';
import './Home.css';

const Home = () => {
  const projects = [
    {
      name: 'rune',
      description: 'Offline C++ video to ascii art converter with browser interface',
      url: 'https://github.com/NeelKondapalli/rune'
    },
    {
      name: 'sure',
      description: 'Critize claims on X posts conditioned on prior research',
      url: 'https://github.com/NeelKondapalli/sure'
    },
    {
      name: 'neptune',
      description: 'Multimodal music gen & editing with Meta MusicGen',
      url: 'https://github.com/NeelKondapalli/neptunev1'
    },
    {
      name: 'solar',
      description: 'Natural language wallet transactions on the Flare Mainnet with Gemini',
      url: 'https://github.com/NeelKondapalli/solarv1'
    },
    {
      name: 'aitokenize',
      description: 'AI tokenization platform for model monetization',
      url: 'https://github.com/NeelKondapalli/aitokenize'
    }
  ];

  const experiences = [
    {
      company: 'Cubist Systematic Strategies',
      role: 'Incoming Quantitative Developer Intern',
      url: 'https://point72.com/cubist/'
    },
    {
      company: 'Tower Research Capital',
      role: 'Software Engineer Intern',
      url: 'https://tower-research.com/'
    },
    {
      company: 'Carbyne',
      role: 'Technical Consultant',
      url: 'https://carbyne.com/'
    },
    {
      company: 'Berkeley SkyDeck',
      role: 'Software Engineer Intern',
      url: 'https://skydeck.berkeley.edu/'
    },
    {
      company: 'TetraScience',
      role: 'Machine Learning Intern',
      url: 'https://www.tetrascience.com/'
    },
  ];

  return (
    <div className="home">
      <div className="video-container">
        {/* <AsciiVideo framesPath="/horse" /> */}
        <AsciiVideoJsonl framesPath="/horse" preferGzip={false} />
      </div>

      <div className="content">
        <h1>hi i'm neel kondapalli👋</h1>
        <p className="tagline">
          i'm an eecs student @ berkeley interested in systems and distributed engineering
        </p>

        <section className="section">
          <h2>Experience</h2>
          <div className="list">
            {experiences.map((exp, index) => (
              <div key={index} className="list-item">
                <a className="company" href={exp.url} target="_blank" rel="noopener noreferrer ">
                  <span className="company">{exp.company}</span>
                </a>
                <span> - {exp.role}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Projects</h2>
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
          <a href="mailto:neel2h06@gmail.com">Email</a>
          <a href="https://x.com/neelkon" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/neel-kondapalli" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/NeelKondapalli" target="_blank" rel="noopener noreferrer">GitHub</a>
        </section>
      </div>
    </div>
  );
};

export default Home;
