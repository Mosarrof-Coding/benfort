import React from "react";

interface GadgetProps {
  h1?: string;
  h2?: string;
  paragraph?: string;
}

const Heading: React.FC<GadgetProps> = ({ h1, h2, paragraph }) => {
  return (
    <div className="">
      {h1 && <h1 className="font-bold text-4xl">{h1}</h1>}
      {h2 && <h2 className="text-gray-600 text-2xl">{h2}</h2>}
      {paragraph && <p className="text-gray-500">{paragraph}</p>}
    </div>
  );
};

export default Heading;
