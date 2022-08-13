import React from "react";
function Contenu(props) {
  return (
    <div className="contenu">
      <h3>{props.title}</h3>
      <p>{props.paragraphe}</p>
    </div>
  );
}
export default Contenu;
