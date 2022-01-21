import styled from "styled-components";

const FilterLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 5px auto;
  text-align: center;
`;

const FilterInputStyled = styled.input`
  padding: 5px;
  margin: 5px auto;
  align-items: center;
  width: 160px;
  border: double 5px grey;
  border-radius: 5px;
`;

export { FilterLabelStyled, FilterInputStyled };
