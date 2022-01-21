import React from "react";
import PropTypes from "prop-types";
import {FilterLabelStyled, FilterInputStyled} from "./Filter.styled";

export const Filter = ({ onChange }) => (
      <FilterLabelStyled>
      Find contact by name
      <FilterInputStyled type="text" name="filter" onChange={onChange} />
    </FilterLabelStyled>
 
);

Filter.propTypes = { onChange: PropTypes.func.isRequired };
