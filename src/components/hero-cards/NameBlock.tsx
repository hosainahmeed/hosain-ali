import { images } from '../../constants/image.index';

interface NameBlockProps {
  name?: string;
  tagline?: string;
}

export const NameBlock = ({ name, tagline }: NameBlockProps) => (
  <div style={{ padding: "8px 0 4px" }}>
    {name ? (
      <div style={{
        fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
        fontWeight: 900,
        color: "#FFFFFF",
        letterSpacing: "0.05em",
        lineHeight: 1.1,
        textTransform: "uppercase",
      }}>
        {name}
      </div>
    ) : (
      <img src={images.name} alt="Name" />
    )}
    <div style={{
      fontFamily: "monospace",
      fontSize: "clamp(0.7rem, 2.5vw, 1.85rem)",
      color: "#A291FD",
      letterSpacing: "0.18em",
      marginTop: 12,
      textTransform: "uppercase",
      fontWeight: 600,
    }}>
      {tagline || "Web Developer & Digital Artist"}
    </div>
  </div>
);