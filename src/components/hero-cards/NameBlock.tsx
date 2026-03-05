import { images } from '../../constants/image.index';

export const NameBlock = () => (
  <div style={{ padding: "8px 0 4px" }}>
    <img src={images.name} />
    <div style={{
      fontFamily: "monospace",
      fontSize: "clamp(0.7rem, 2.5vw, 1.85rem)",
      color: "#A291FD",
      letterSpacing: "0.18em",
      marginTop: 12,
      textTransform: "uppercase",
      fontWeight: 600,
    }}>
      Web Developer & Digital Artist
    </div>
  </div>
);