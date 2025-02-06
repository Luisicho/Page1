import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1 className="text-3x1">User details : {id}</h1>
    </div>
  );
};

export default page;
