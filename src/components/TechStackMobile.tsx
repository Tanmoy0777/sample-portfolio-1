import "./styles/TechStackMobile.css";

const BASE = import.meta.env.BASE_URL;

const tools = [
  { name: "Microsoft Dynamics 365", img: `${BASE}images/tools/dynamics365.svg` },
  { name: "ZoomInfo", img: `${BASE}images/tools/zoominfo.svg` },
  { name: "Seamless.ai", img: `${BASE}images/tools/seamless.svg` },
  { name: "Advanced Excel", img: `${BASE}images/tools/excel.svg` },
  { name: "PowerPoint", img: `${BASE}images/tools/powerpoint.svg` },
  { name: "Microsoft Office", img: `${BASE}images/tools/microsoft-office.svg` },
  { name: "ChatGPT", img: `${BASE}images/tools/chatgpt.svg` },
  { name: "Claude", img: `${BASE}images/tools/claude.svg` },
  { name: "Adobe Marketo", img: `${BASE}images/tools/marketo.svg` },
  { name: "ClickUp", img: `${BASE}images/tools/clickup.svg` },
  { name: "Notion", img: `${BASE}images/tools/notion.svg` },
];

const TechStackMobile = () => {
  return (
    <div className="techstack techstack-mobile">
      <h2>Account &amp; Campaign Stack</h2>
      <div className="techstack-mobile-grid">
        {tools.map((tool, i) => (
          <div
            className="techstack-mobile-tile"
            key={tool.name}
            style={{ animationDelay: `${(i % 3) * 0.4}s` }}
          >
            <img src={tool.img} alt={tool.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackMobile;
