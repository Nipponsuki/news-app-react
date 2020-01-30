import React from "react";
import { connect } from "react-redux";

import { DropdownContainer } from "./styles";

import DropdownOption from "../DropdownOption";

const Dropdown = ({ words, setTerm, isLoading, error, activeOption }) => {
  return (
    <DropdownContainer>
      {error && <DropdownOption word={error} />}
      {isLoading && <DropdownOption word="Searching..." />}
      {!isLoading &&
        words &&
        words.map((result, i) => (
          <DropdownOption
            word={result.word}
            key={result.score}
            setTerm={setTerm}
            active={activeOption === i}
          />
        ))}
    </DropdownContainer>
  );
};

export default connect(
  state => ({
    words: state.autocomplete.words,
    isLoading: state.autocomplete.isLoading,
    error: state.autocomplete.error
  }),
  null
)(Dropdown);
