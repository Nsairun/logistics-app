"use client"
import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  style?: React.CSSProperties;
}

export default function Text({
  headingLevel = "p",
  children,
  className,
  style,
}: HeadingProps) {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(
      headingLevel,
      { ...props, style: { ...props.style, ...style } }, // Merge the styles
      children
    );

  return <Heading className={className}>{children}</Heading>;
}

const Banner: React.FC<{ headingText: string; description: string }> = ({
  headingText,
  description,
}) => (
  <div>
    <Text headingLevel="h1" style={{ fontWeight: 'bold' }}>{headingText}</Text>
    <p style={{ fontWeight: 'normal' }}>{description}</p>
  </div>
);