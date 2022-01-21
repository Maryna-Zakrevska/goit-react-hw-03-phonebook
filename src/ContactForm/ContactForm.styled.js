import styled from "styled-components";

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  margin: 5px auto;
  align-items: center;
`;

const ContactFormLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0px auto;
  align-items: left;
  font-weight: bold;
`;

const ContactFormInputStyled = styled.input`
  padding: 5px;
  margin: 5px auto;
  align-items: center;
  width: 160px;
  border: double 5px grey;
  border-radius: 5px;
`;

const ContactFormButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 16px;
  border: double 5px grey;
  border-radius: 5px;
  width: 180px;
  background: linear-gradient(45deg, #e6e9f0, #eef1f5);

  :hover {
    background: linear-gradient(45deg, #f5f7fa, #c3cfe2);
    transform: scale(1.1);
    font-weight: bold;
  }
`;

export {
  ContactFormStyled,
  ContactFormLabelStyled,
  ContactFormInputStyled,
  ContactFormButtonStyled,
};
