import React from "react";
function Header({ number }) {
  console.log("header component re-rendered");
  return (
    <>
      <code>Header - {number}</code>
      <hr />
    </>
  );
}

export default React.memo(Header);
