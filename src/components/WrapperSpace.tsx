import React from "react";

interface WrapperSpaceProps {
  children: React.ReactNode;
  className?: string;
}

const WrapperSpace = ({ children, className }: WrapperSpaceProps) => {
  return (
    <div className={`max-w-4xl mx-auto w-screen ${className}`}>{children}</div>
  );
};

export default WrapperSpace;
