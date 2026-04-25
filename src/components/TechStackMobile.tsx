import "./styles/TechStackMobile.css";

const BASE = import.meta.env.BASE_URL;

const tools = [
  { name: "Microsoft Dynamics 365", img: `${BASE}images/tools/dynamics365.webp` },
  { name: "ZoomInfo", img: `${BASE}images/tools/zoominfo.webp` },
  { name: "Seamless.ai", img: `${BASE}images/tools/seamless.webp` },
  { name: "Advanced Excel", img: `${BASE}images/tools/excel.webp` },
  { name: "PowerPoint", img: `${BASE}images/tools/powerpoint.webp` },
  { name: "Microsoft Office", img: `${BASE}images/tools/microsoft-office.webp` },
];

const TechStackMobile = () => {
  return (
    <div className="techstack techstack-mobile">
      <h2>Tech Stack</h2>
      <div className="techstack-mobile-grid">
        {tools.map((tool, i) => (
          <div
            className="techstack-mobile-tile"
            key={tool.name}
            style={{ animationDelay: `${(i % 3) * 0.4}s` }}
          >
            <div className="techstack-mobile-tile-inner">
              <img src={tool.img} alt={tool.name} loading="lazy" />
            </div>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackMobile;
