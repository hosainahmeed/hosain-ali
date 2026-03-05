export const SkillPill = ({ name, color }: { name: string, color?: string }) => (
    <span style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        background: "rgba(162,145,253,0.08)",
        border: "1px solid rgba(162,145,253,0.18)",
        borderRadius: 20, padding: "4px 10px",
        fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.75)",
        whiteSpace: "nowrap", letterSpacing: "0.02em",
    }}>
        <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: color || "#A291FD", display: "inline-block", flexShrink: 0
        }} />
        {name}
    </span>
);