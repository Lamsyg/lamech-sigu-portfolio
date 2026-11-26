import { ArrowUpRight, ShieldCheck, Network, Server, Activity, Database, Hospital } from "lucide-react";

const projects = [
  {
    type: "Infrastructure & surveillance",
    title: "Hospital CCTV Restoration",
    description: "Supported restoration of a hospital surveillance environment, bringing 96 out of 100 cameras back online and identifying the remaining units requiring replacement.",
    tools: ["CCTV", "NVR", "Hikvision", "Dahua"]
  },
  {
    type: "Network engineering",
    title: "Wireless Network Deployment",
    description: "Planned and supported enterprise wireless access point deployment across hospital departments, with attention to coverage, roaming and secure network access.",
    tools: ["UniFi", "VLANs", "PoE", "Wi-Fi"]
  },
  {
    type: "Healthcare systems",
    title: "HMIS & Laboratory Integration",
    description: "Supported HMIS workflows and laboratory equipment integration, coordinating testing, troubleshooting and readiness activities with technical teams.",
    tools: ["HMIS", "COM Ports", "Integration", "User Support"]
  },
  {
    type: "Security",
    title: "Firewall Administration",
    description: "Worked on firewall administration and security controls, including access policies, MFA, web/application controls and network monitoring.",
    tools: ["Sophos", "VPN", "MFA", "IPS"]
  },
  {
    type: "Storage & continuity",
    title: "NAS Backup Infrastructure",
    description: "Worked on Synology NAS configuration and backup planning to support data protection and recovery for organizational endpoints and systems.",
    tools: ["Synology", "Hyper Backup", "NAS", "Backup"]
  },
  {
    type: "Network access",
    title: "Guest Wi-Fi Segmentation",
    description: "Designed a separated guest wireless access approach to reduce exposure of internal hospital resources and improve visitor connectivity management.",
    tools: ["Guest Wi-Fi", "VLAN", "RADIUS", "Firewall"]
  }
];

const skillGroups = [
  ["Networking", "TCP/IP", "VLANs", "Routing & Switching", "MikroTik", "DHCP & DNS"],
  ["Security", "Sophos Firewall", "VPN", "MFA", "IPS", "Access Control"],
  ["Systems", "Windows Server", "Linux", "Active Directory", "Virtualization"],
  ["Infrastructure", "UniFi", "TP-Link Omada", "Synology NAS", "CCTV & NVR"],
  ["Monitoring & Healthcare IT", "Grafana", "HMIS", "Telemedicine", "System Integration"]
];

export default function Home() {
  return (
    <main>
      <header className="container nav">
        <a className="logo" href="#">LAM<span>.</span></a>
        <nav className="navlinks">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="container hero">
        <div>
          <div className="eyebrow">Systems Administrator · IT Infrastructure</div>
          <h1>Building secure<br />systems. <span>Connecting</span><br />possibilities.</h1>
          <p className="lead">I’m Lamech Odhiambo Sigu, an IT professional focused on systems administration, network infrastructure, cybersecurity and healthcare technology. I help keep essential systems connected, secure and dependable.</p>
          <div className="actions">
            <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button" href="#contact">Get in touch</a>
          </div>
        </div>
        <aside className="profile-card">
          <div className="profile-mark">LOS</div>
          <h3>Technology with purpose.</h3>
          <p>Practical infrastructure, reliable operations and secure digital experiences — with a special interest in healthcare IT.</p>
          <div className="profile-tags"><span className="tag">Infrastructure</span><span className="tag">Networking</span><span className="tag">Cybersecurity</span><span className="tag">Healthcare IT</span></div>
        </aside>
      </div>

      <section id="about">
        <div className="container about-layout">
          <div className="section-head">
            <div className="eyebrow">01 / About</div>
            <h2>Technology should make work safer, simpler and more reliable.</h2>
          </div>
          <div>
            <p className="muted">I am a Computer Science and Information Technology graduate with hands-on experience supporting IT operations, network infrastructure, security systems and healthcare technology environments.</p>
            <p className="muted">My work spans troubleshooting and maintaining infrastructure, supporting HMIS users, coordinating system integrations, strengthening network access and documenting technical processes. I enjoy solving practical problems and continuously developing my skills in cloud, automation, cybersecurity and infrastructure monitoring.</p>
            <p className="muted">This portfolio is a growing record of selected projects, technical learning and professional experience.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="section-head"><div className="eyebrow">02 / Capabilities</div><h2>Technical toolkit</h2><p>A selection of technologies and areas I have worked with or am actively developing.</p></div>
          <div className="grid">
            {skillGroups.map(([name, ...skills]) => <div className="card" key={name}><div className="small">{name}</div><div className="skills" style={{marginTop:18}}>{skills.map(s => <span className="skill" key={s}>{s}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-head"><div className="eyebrow">03 / Selected work</div><h2>Projects & practical experience</h2><p>Examples of infrastructure and healthcare IT work. Detailed case studies, diagrams and evidence can be added as each project is documented.</p></div>
          <div className="grid">
            {projects.map((p, i) => <article className="card" key={p.title}><div className="small">0{i+1} · {p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="profile-tags">{p.tools.map(t => <span className="tag" key={t}>{t}</span>)}</div></article>)}
          </div>
        </div>
      </section>

      <section id="focus">
        <div className="container">
          <div className="section-head"><div className="eyebrow">04 / What I’m exploring</div><h2>Always learning. Always improving.</h2><p>Areas I am building deeper capability in as I grow toward senior infrastructure and IT leadership roles.</p></div>
          <div className="grid">
            <div className="card"><Server/><h3>Cloud & Systems</h3><p>Microsoft Azure, AWS, Linux administration and virtualization.</p></div>
            <div className="card"><Activity/><h3>Monitoring & Automation</h3><p>Grafana, infrastructure observability, scripting and workflow automation.</p></div>
            <div className="card"><ShieldCheck/><h3>Security Engineering</h3><p>Identity, network access control, security operations and resilient infrastructure.</p></div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-box">
            <div><div className="eyebrow">05 / Contact</div><h2>Let’s connect.</h2><p className="muted">Open to professional conversations, collaboration and opportunities in IT infrastructure and systems administration.</p></div>
            <a className="button primary" href="mailto:YOUR_EMAIL@example.com">Email me <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>
      <footer><div className="container" style={{display:"flex",justifyContent:"space-between",gap:15,flexWrap:"wrap"}}><span>© {new Date().getFullYear()} Lamech Odhiambo Sigu</span><span>Systems Administration · Infrastructure · Security</span></div></footer>
    </main>
  );
}
