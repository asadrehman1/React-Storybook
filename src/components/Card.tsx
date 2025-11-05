import type { CSSProperties, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  title?: string;
  content?: string;
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
}>;

export default function Card({
  title,
  content,
  children,
  style,
  className = "",
}: CardProps) {
  return (
    <div
      className={`shadow-md rounded-lg p-4 bg-white ${className}`}
      style={{ minWidth: 200, ...style }}
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {content && <p className="text-gray-700 mb-2">{content}</p>}
      {children}
    </div>
  );
}
