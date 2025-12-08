import { useState, useEffect } from 'react';

const MorphingCVDark = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [glitchElements, setGlitchElements] = useState({});

  const careers = [
    {
      title: "SOFTWARE ENGINEER",
      summary: "Experienced professional with expertise in developing innovative solutions and driving technological advancement.",
      skills: [
        { name: "Python, JavaScript, React", level: 90 },
        { name: "System Architecture", level: 85 },
        { name: "Problem Solving", level: 95 }
      ],
      exp1: { title: "Senior Software Engineer", company: "Tech Innovations Inc." },
      exp2: { title: "Full Stack Developer", company: "Digital Solutions Ltd." }
    },
    {
      title: "AUTOMOTIVE MECHANIC",
      summary: "Skilled technician specializing in vehicle diagnostics, repair, and maintenance across all major automotive systems.",
      skills: [
        { name: "Engine Diagnostics", level: 95 },
        { name: "Hydraulic Systems", level: 88 },
        { name: "Electrical Troubleshooting", level: 82 }
      ],
      exp1: { title: "Master Mechanic", company: "Premium Auto Service" },
      exp2: { title: "Automotive Technician", company: "Fast Lane Repairs" }
    },
    {
      title: "EXECUTIVE ADMINISTRATOR",
      summary: "Detail-oriented professional managing complex schedules, coordinating teams, and optimizing operational efficiency.",
      skills: [
        { name: "Office Management", level: 92 },
        { name: "Microsoft Office Suite", level: 96 },
        { name: "Project Coordination", level: 89 }
      ],
      exp1: { title: "Executive Assistant", company: "Global Enterprises Corp" },
      exp2: { title: "Office Manager", company: "Summit Solutions" }
    },
    {
      title: "CONSTRUCTION FOREMAN",
      summary: "Experienced supervisor overseeing building projects, managing crews, and ensuring safety compliance on job sites.",
      skills: [
        { name: "Blueprint Reading", level: 93 },
        { name: "Safety Management", level: 97 },
        { name: "Heavy Equipment Operation", level: 86 }
      ],
      exp1: { title: "Site Supervisor", company: "BuildRight Construction" },
      exp2: { title: "Construction Lead", company: "Foundation Builders LLC" }
    },
    {
      title: "CULINARY CHEF",
      summary: "Creative culinary artist crafting exceptional dishes with emphasis on flavor innovation and presentation excellence.",
      skills: [
        { name: "French Cuisine", level: 91 },
        { name: "Menu Development", level: 88 },
        { name: "Kitchen Management", level: 85 }
      ],
      exp1: { title: "Executive Chef", company: "Le Gourmet Restaurant" },
      exp2: { title: "Sous Chef", company: "Culinary Excellence Bistro" }
    }
  ];

  const currentCareer = careers[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger glitch effect
      setGlitchElements({
        title: true,
        summary: true,
        skills: true,
        exp: true
      });

      // Change content after glitch
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % careers.length);
        setGlitchElements({});
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.cvContainer}>
        <div style={styles.scanLine} />
        <div style={styles.status}>
          <div style={styles.statusDot} />
          <span>UPDATING...</span>
        </div>
        <div style={styles.cornerTopLeft} />
        <div style={styles.cornerBottomRight} />

        <div style={styles.header}>
          <div style={styles.name}>ALEX MORGAN</div>
          <div 
            style={{
              ...styles.title,
              ...(glitchElements.title ? styles.glitch : {})
            }}
          >
            {currentCareer.title}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <span style={styles.arrow}>▸</span>
            Professional Summary
          </div>
          <div 
            style={{
              ...styles.content,
              ...(glitchElements.summary ? styles.glitch : {})
            }}
          >
            {currentCareer.summary}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <span style={styles.arrow}>▸</span>
            Skills
          </div>
          <div style={styles.content}>
            {currentCareer.skills.map((skill, idx) => (
              <div key={idx} style={styles.skillContainer}>
                <div 
                  style={{
                    ...(glitchElements.skills ? styles.glitch : {})
                  }}
                >
                  {skill.name}
                </div>
                <div style={styles.skillBar}>
                  <div 
                    style={{
                      ...styles.skillFill,
                      width: `${skill.level}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <span style={styles.arrow}>▸</span>
            Experience
          </div>
          <div style={styles.experienceItem}>
            <div 
              style={{
                ...styles.jobTitle,
                ...(glitchElements.exp ? styles.glitch : {})
              }}
            >
              {currentCareer.exp1.title}
            </div>
            <div 
              style={{
                ...styles.company,
                ...(glitchElements.exp ? styles.glitch : {})
              }}
            >
              {currentCareer.exp1.company}
            </div>
            <div style={styles.date}>2020 - Present</div>
          </div>
          <div style={styles.experienceItem}>
            <div 
              style={{
                ...styles.jobTitle,
                ...(glitchElements.exp ? styles.glitch : {})
              }}
            >
              {currentCareer.exp2.title}
            </div>
            <div 
              style={{
                ...styles.company,
                ...(glitchElements.exp ? styles.glitch : {})
              }}
            >
              {currentCareer.exp2.company}
            </div>
            <div style={styles.date}>2018 - 2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Courier New', monospace",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  cvContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '533px',
    background: '#0f1419',
    border: '2px solid #00d9ff',
    boxShadow: '0 0 20px rgba(0, 217, 255, 0.4), inset 0 0 20px rgba(0, 217, 255, 0.1)',
    padding: '27px',
    zIndex: 1,
  },
  scanLine: {
    position: 'absolute',
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(0, 255, 150, 0.7), transparent)',
    top: 0,
    left: 0,
    animation: 'scan 3s linear infinite',
    pointerEvents: 'none',
    zIndex: 10,
  },
  cornerTopLeft: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    border: '2px solid #00d9ff',
    borderRight: 'none',
    borderBottom: 'none',
    top: '-2px',
    left: '-2px',
  },
  cornerBottomRight: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    border: '2px solid #00d9ff',
    borderLeft: 'none',
    borderTop: 'none',
    bottom: '-2px',
    right: '-2px',
  },
  status: {
    position: 'absolute',
    top: '7px',
    right: '7px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#00ff96',
    fontSize: '8px',
  },
  statusDot: {
    width: '5px',
    height: '5px',
    background: '#00ff96',
    borderRadius: '50%',
    animation: 'pulse 1.5s infinite',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid rgba(0, 217, 255, 0.3)',
    paddingBottom: '13px',
  },
  name: {
    fontSize: '24px',
    color: '#ffffff',
    textShadow: '0 0 15px rgba(0, 217, 255, 0.6)',
    marginBottom: '7px',
    letterSpacing: '2px',
  },
  title: {
    fontSize: '13px',
    color: '#00ff96',
    textShadow: '0 0 10px rgba(0, 255, 150, 0.6)',
    minHeight: '20px',
    transition: 'all 0.3s ease',
  },
  section: {
    margin: '17px 0',
    position: 'relative',
  },
  sectionTitle: {
    color: '#00d9ff',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    marginRight: '7px',
    animation: 'blink 1s infinite',
  },
  content: {
    color: '#b8c5d0',
    lineHeight: '1.8',
    fontSize: '9px',
    transition: 'all 0.3s ease',
  },
  skillContainer: {
    marginBottom: '5px',
  },
  skillBar: {
    background: 'rgba(0, 217, 255, 0.15)',
    height: '5px',
    margin: '5px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  skillFill: {
    background: 'linear-gradient(90deg, #00d9ff, #00ff96)',
    height: '100%',
    transition: 'width 0.5s ease',
    boxShadow: '0 0 10px rgba(0, 217, 255, 0.8)',
  },
  experienceItem: {
    margin: '10px 0',
    paddingLeft: '13px',
    borderLeft: '2px solid rgba(0, 217, 255, 0.3)',
  },
  jobTitle: {
    color: '#00ff96',
    fontWeight: 'bold',
    minHeight: '13px',
    transition: 'all 0.3s ease',
  },
  company: {
    color: '#8b9eb5',
    fontSize: '9px',
    minHeight: '12px',
    transition: 'all 0.3s ease',
  },
  date: {
    color: '#5a6b7d',
    fontSize: '8px',
  },
  glitch: {
    animation: 'glitch 0.3s ease',
  },
};

// Add CSS animations as a style tag
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes scan {
    0% { top: 0; opacity: 0; }
    50% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 5px #00ff96; }
    50% { opacity: 0.3; box-shadow: 0 0 15px #00ff96; }
  }

  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    60% { transform: translate(-2px, -2px); }
    80% { transform: translate(2px, 2px); }
    100% { transform: translate(0); }
  }
`;
document.head.appendChild(styleSheet);

export default MorphingCVDark;