import React from "react";

function Header({ data }) {
  console.log("header component re-rendered");
  return (
    <>
      <code>
        Header - {JSON.stringify(data)}
      </code>
      <hr />
    </>
  );
}

export default React.memo(Header);
