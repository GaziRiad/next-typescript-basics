import { type ReactNode } from "react";

interface InfoBoxProps {
  mode: "hint" | "warning";
  children: ReactNode;
}

export default function InfoBox({ mode = "hint", children }: InfoBoxProps) {
  if (mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <h2>WARNING!</h2>
        <div>{children}</div>
      </aside>
    );

  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>WARNING!</h2>
      <div>{children}</div>
    </aside>
  );
}
