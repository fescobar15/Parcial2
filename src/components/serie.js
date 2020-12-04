import React from "react";

const Serie = (props) => {
  return (
    <tr>
      <th scope="row">{props.serie.id}</th>
      <td>{props.serie.name}</td>
      <td>{props.serie.channel}</td>
      <td>{props.serie.description}</td>
    </tr>
  );
};

export default Serie;
