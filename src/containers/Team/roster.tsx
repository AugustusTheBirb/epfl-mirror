import React, { useState } from 'react';
import './roster.css';
import PageHead from '../../components/Head/PageHead';

const TeamRoster = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const students = [
    {
      name: "Milo Sanders",
      headrole: "Head of Wet Lab",
      role: "Research & Design Experiments",
      description: "You'll usually find him in the wet lab, running simulations.",
      traits: "His curiosity, reliability, and sharp analytical mind.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/3.webp",
    },
    {
      name: "Cynthia Rabay",
      headrole: "Head of Burn Measurement & Safety",
      role: "Drone, Outreach & Sponsorship",
      description: "You’ll usually find her setting our gel on fire or pitching Pyronix to sponsors.",
      traits: "Her bold creativity and unwavering commitment.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/7.webp",
    },
    {
      name: "Sarah Bianchi",
      headrole: "Head of Experiment Design",
      role: "Test Bench Design & Wet Lab",
      description: "You'll usually find her at the test bench, in the wet lab or running simulations.",
      traits: "Her kindness, discipline, and exceptional attention to detail.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/4.webp",
    },
    {
      name: "Tessnim Bechrifa",
      headrole: "Head of Social Media",
      role: "Content Creation, Modeling & Test Bench",
      description: "You'll usually find her coding models or capturing content behind the camera.",
      traits: "Her sharp intuition, calm leadership, and contagious enthusiasm.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/1.webp",
    },
    {
      name: "Nafi Anna Dramé",
      headrole: "Head of Human Practices",
      role: "Test Bench, Sponsorship & Graphic Design",
      description: "You’ll usually find her engaging with stakeholders or running experiments.",
      traits: "Her broad perspective, sharp thinking, and outstanding communication skills.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/5.webp",
    },
    {
      name: "Elyse Peguret",
      headrole: "Head of Wiki",
      role: "Wiki Design & Content",
      description: "You’ll usually find her illustrating the wiki or shaping its text.",
      traits: "She brings the same creativity to the details that define our team spirit, from our look to our travels.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/10.webp",
    },
    {
      name: "Khaoula Wakkach",
      headrole: "Head of Modeling",
      role: "Drone & Wiki Content ",
      description: "You'll usually find her running simulations or enhancing the wiki.",
      traits: "Her precision, quiet determination, and fearless problem-solving.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/2.webp",
    },
    {
      name: "David Farah",
      headrole: "Head of Drone",
      role: "Drone Assembly & Testing",
      description: "You'll usually find him assembling our drone or simulating it.",
      traits: "His hands-on mindset and problem-solving finesse.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/9.webp",
    },
    {
      name: "Andrea Simonato",
      headrole: "Head of Sponsorship & Business Development",
      role: "Business Development & Sponsorship",
      description: "You'll usually find him crafting emails to future sponsors or sketching out product ideas.",
      traits: "His direct communication and determination to get things done right.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/8.webp",
    },
    {
      name: "Julie Jasmijn Delis",
      headrole: "Head of Research",
      role: "Graphic Design",
      description: "You’ll usually find her diving into research papers or sketching visuals that bring Pyronix to life.",
      traits: "Her creativity across disciplines, attention to detail, and thoughtful approach.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/6.webp",
    }
  ];

  const supervisors = {
    tas: [
      {
        name: "Nicolas Manuel Goldbach",
        role: "Wetlab Specialist",
        description: "Our Wetlab specialist and main assistant, Nico, used his wetlab experience and network to guide us in the right direction.",
        image: "https://static.igem.wiki/teams/5590/teamphotos2/img-7448.webp"
      },
      {
        name: "Camilla Di Guilo",
        role: "Head Wetlab Assistant",
        description: "Our head Wetlab assistant and fashion director. Her in Lab experience saved us more than once and her valuable knowledge about fluids helped us test the capabilities of our gel.",
        image: "https://static.igem.wiki/teams/5590/teamphotos2/img-7455.webp"
      },
      {
        name: "Julius Wenckstern",
        role: "Modeling & Data Specialist",
        description: "His insights on the models and data have helped us develop drone models. He also helped us see the limits of what we could do and always kept check of the deadlines.",
        image: "https://static.igem.wiki/teams/5590/teamphotos2/img-7457-1.webp"
      }
    ],
    pi: {
      name: "Brian McCabe",
      role: "Principal Investigator",
      description: "Head of the Brain Mind Institute at EPFL, Brian has led the EPFL iGEM teams to gold for multiple years. His experience and advice has kept us on the right track while his network allowed us to expand.",
      image: "https://static.igem.wiki/teams/5590/teamphotos2/brian-mccabe.webp"
    }
  };

  return (
    <div className="team-roster">
      {/* Hero Section */}
      <PageHead 
        title="Meet the Team"
        subtitle="The minds behind Pyronix"
        backgroundUrl="https://static.igem.wiki/teams/5590/teamphotos/grouponepfl.webp"
        
      />


      <div className="team-description">
        <p className="description-text">
          Our team was formed in fall 2024 out of 10 motivated students from multiple backgrounds, 3 TAs with each their own field of expertise and one PI providing guidance and experience to the team.
        </p>
        
        <p className="description-text">
          The students on our team are a mix of different backgrounds, countries, passions and study programs. Including both driven sportsmen and artists, our team includes students from two of the multiple engineering tracks at EPFL, Life Science Engineering and Computer Science.
        </p>
      </div>

      {/* Students Section */}
      <div className="students-section">
        <h2 className="section-title">The Students</h2>

        <div className="members-grid">
          {students.map((student, index) => (
            <div
              key={index}
              className={`member-card ${hoveredMember === student.name ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredMember(student.name)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Background Image */}
              <img
                src={student.image}
                alt={student.name}
                className="member-image"
              />

              {/* Default Overlay with Name */}
              <div className="default-overlay">
                <h3 className="member-name">{student.name}</h3>
                <p className="member-headrole">{student.headrole}</p>
              </div>

              {/* Hover Overlay with Full Info */}
              <div className="hover-overlay student-overlay">
                <h3 className="member-name">{student.name}</h3>
                <p className="member-headrole">{student.headrole}</p>
                <p className="member-role-hover">{student.role}</p>
                <p className="member-description">{student.description}</p>
                <p className="member-traits">
                  <strong>What sets them apart?</strong> {student.traits}
                </p> 
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supervisors Section */}
      <div className="supervisors-section">
        <h2 className="section-title">The Supervisors</h2>
        
        {/* TAs */}
        <h3 className="subsection-title">Teaching Assistants</h3>

        <div className="members-grid">
          {supervisors.tas.map((ta, index) => (
            <div
              key={index}
              className={`member-card ${hoveredMember === ta.name ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredMember(ta.name)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img
                src={ta.image}
                alt={ta.name}
                className="member-image"
              />

              {/* Default Overlay */}
              <div className="default-overlay">
                <h4 className="member-name-ta">{ta.name}</h4>
                <p className="member-role-ta">{ta.role}</p>
              </div>

              {/* Hover Overlay */}
              <div className="hover-overlay ta-overlay">
                <h4 className="member-name-ta">{ta.name}</h4>
                <p className="member-role-hover">{ta.role}</p>
                <p className="member-description">{ta.description}</p>
                <div>
                  ✨ 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PI */}
        <h3 className="subsection-title">Principal Investigator</h3>

        <div
          className={`member-card pi-card ${hoveredMember === supervisors.pi.name ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredMember(supervisors.pi.name)}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <img
            src={supervisors.pi.image}
            alt={supervisors.pi.name}
            className="member-image"
          />

          {/* Default Overlay */}
          <div className="default-overlay">
            <h4 className="member-name-pi">{supervisors.pi.name}</h4>
            <p className="member-role-pi">{supervisors.pi.role}</p>
          </div>

          {/* Hover Overlay */}
          <div className="hover-overlay pi-overlay">
            <h4 className="member-name-pi">{supervisors.pi.name}</h4>
            <p className="member-role-hover-pi">{supervisors.pi.role}</p>
            <p className="member-description-pi">{supervisors.pi.description}</p>
            <div>
                  ✨ 
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamRoster;