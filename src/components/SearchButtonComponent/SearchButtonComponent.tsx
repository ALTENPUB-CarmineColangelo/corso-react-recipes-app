import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../reducers";
import RecipesService from "../../services/RecipesService";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const SearchButtonComponent = () => {
  const ingrList = useSelector(
    (state: RootState) => state.listReducer.ingrList
  );
  let navigate = useNavigate();

  const handleSearch = () => {
    // RecipesService(ingrList);
    navigate("/recipes");
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          handleSearch();
        }}
        className = ''
      >
        <FaSearch />
      </Button>
    </div>
  );
};

export default SearchButtonComponent;
