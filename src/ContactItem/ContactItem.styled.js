import styled from "styled-components";

const ContactItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding: 0;
  margin: 5px auto;
`;

const ContactDeleteButtonStyled = styled.button`
  padding: 2px;
  border-radius: 5px;
  background-color: white;
  :hover {
    background: linear-gradient(45deg, #f5f7fa, #c3cfe2);
    transform: scale(1.05);
  }
`;

export { ContactItemStyled, ContactDeleteButtonStyled };
