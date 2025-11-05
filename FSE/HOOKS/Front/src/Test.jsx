import React, { useState } from "react";

function Test() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="Tridib" />
    </div>
  );
}

function HeaderWithButton() {
  const [name, setName] = useState("Hi my name is Tridib");
  function changeTitle() {
    setName("Hi my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={changeTitle}>Click to update the button</button>
      <Header title={name} />
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default Test;
