import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className="text-4xl text-scooter font-mono text-center mt-10">
      {children}
    </h1>
  );
};

export default Title;
