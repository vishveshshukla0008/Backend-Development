import React from "react";
import "./NoteCard.scss";
const NoteCard = ({
  id = "3fqef43r34r32f4t24f4f24f24",
  title = "Subh uthna hai",
  description = "Mera nam yash shukla hai and maine cs se diploma kiya hai qwfbouref ihfihef qwefihqewifiehf iqwhfiewqhfihewif iqwhfiqhifhiwef iqwhfihqewifhwef iqhfihqwifhioqwef vef fqwefqw qwr qwr qwer qw rqw erqw erqwf wewfqwef qw fqw eq wf qw fewqf qw fqw f qw ",
}) => {
  return (
    <div className="notecard glow-border">
      <span className="id">{id}</span>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default NoteCard;
