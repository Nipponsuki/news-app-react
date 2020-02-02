import React from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { StyledForm, SearchIconContainer } from "./styles";

import SearchInput from "./SearchInput";
import Dropdown from "./Dropdown";

import { useOutsideClick } from "hooks/useOutsideClick";
import autocomleteActions from "_redux/autocomplete/actions";

const { load } = autocomleteActions;

const SEARCH_TERM_LENGTH = 3;

const SearchBar = ({ load, words, history }) => {
  const [term, setTerm] = React.useState("");
  const [isDropdownShown, setIsDropdownShown] = React.useState(false);
  const [activeOption, setActiveOption] = React.useState(-1);
  console.log(term);

  const searchbarRef = React.useRef();

  useOutsideClick(searchbarRef, () => {
    setIsDropdownShown(false);
    setTerm("");
  });

  const handleKeyDown = e => {
    if (e.keyCode === 38 && activeOption > 0) {
      setActiveOption(prevState => prevState - 1);
    } else if (e.keyCode === 40 && activeOption < words.length - 1) {
      setActiveOption(prevState => prevState + 1);
    }
  };

  const handleChange = e => {
    setTerm(e.target.value);
    if (e.target.value === "") {
      setIsDropdownShown(false);
    }
    if (e.target.value.length > SEARCH_TERM_LENGTH) {
      setIsDropdownShown(true);
      load(term);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTerm("");
    setIsDropdownShown(false);
    history.push(`/search/${term}`);
  };

  const setSearchTerm = value => {
    setTerm(value);
    setIsDropdownShown(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit} ref={searchbarRef}>
      <SearchInput
        value={term}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <SearchIconContainer>
        <FaSearch />
      </SearchIconContainer>
      {isDropdownShown && (
        <Dropdown setTerm={setSearchTerm} activeOption={activeOption} />
      )}
    </StyledForm>
  );
};

export default withRouter(
  connect(
    state => ({
      words: state.autocomplete.words
    }),
    {
      load
    }
  )(SearchBar)
);
