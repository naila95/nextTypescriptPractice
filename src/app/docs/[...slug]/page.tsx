import React from "react";

const Slug = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  console.log(params);
  if (params.slug.length === 2) {
    return (
      <div>
        Feature {params.slug[0]}, concept {params.slug[1]}
      </div>
    );
  } else if (params.slug.length === 1) {
    return <div>Feature {params.slug[0]}</div>;
  }
};

export default Slug;
