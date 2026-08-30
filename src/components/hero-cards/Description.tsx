interface DescriptionProps {
  welcomeMessage?: string;
}

function Description({ welcomeMessage }: DescriptionProps) {
    return (
        <div className="bcard card-desc fade-up">
            <p style={{
                fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.65,
                fontFamily: "Georgia, serif",
            }}>
                {welcomeMessage || "Welcome to my portfolio! I'm Hosain Ali, a web developer and digital artist. In this space, I'll share a glimpse into my work and what I love to do."}
            </p>
        </div>
    )
}

export default Description