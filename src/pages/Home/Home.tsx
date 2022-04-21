import React from "react";
import { useSelector } from "react-redux";
import InputComponent from "../../components/InputComponent/InputComponent";
import ListComponent from "../../components/ListComponent/ListComponent";
import SearchButtonComponent from "../../components/SearchButtonComponent/SearchButtonComponent";
import { RootState } from "../../reducers";
import "./home.css"
import {Card, Container} from "react-bootstrap";

const Home = () => {
  const list = useSelector((state: RootState) => state.listReducer.ingrList);

  return (
      <Container>
          <Card className="searchBar mx-auto">
              <Card.Body>
                  <InputComponent />
                  <hr />
                  <ListComponent list={list} />
              </Card.Body>
              {list.length > 0 && (
                  <Card.Footer>
                      <SearchButtonComponent />
                  </Card.Footer>
              )}
          </Card>
      </Container>
  );
};

export default Home;
