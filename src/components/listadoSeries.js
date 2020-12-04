import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Grafica from "./Grafica";
import Serie from "./serie";
import { Container, Table } from "react-bootstrap";

const ListadoSeries = (props) => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("lista") === null) {
        setLista([]);
      } else {
        console.log(localStorage.getItem("lista"));
        setLista(JSON.parse(localStorage.getItem("lista")));
      }
    } else {
      fetch(props.url)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setLista(res);
          localStorage.setItem("lista", JSON.stringify(res));
        });
    }
  }, [props.url]);

  if (lista.length > 0) {
    return (
      <Container>
        <Table striped bordered>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Name"></FormattedMessage>
              </th>
              <th scope="col">
                <FormattedMessage id="Channel"></FormattedMessage>
              </th>
              <th scope="col">
                <FormattedMessage id="Description"></FormattedMessage>
              </th>
            </tr>
          </thead>
          <tbody>
            {lista.map((e, i) => (
              <Serie key={i} serie={e} />
            ))}
          </tbody>
        </Table>
        <div>
          <Grafica data={lista}></Grafica>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <FormattedMessage id="Error"></FormattedMessage>
      </Container>
    );
  }
};

export default ListadoSeries;
