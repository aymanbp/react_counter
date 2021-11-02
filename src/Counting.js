import React from "react";

function counting(props) {
  const { name, count } = props;
  return (
    <div>
      <h1>
        {name}:{count}
      </h1>
    </div>
  );
}

export default counting;
