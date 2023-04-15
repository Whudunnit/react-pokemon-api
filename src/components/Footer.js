import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 10px auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <P>&copy; Regéczy Zsombor</P>
    </FooterContainer>
  );
};

export default Footer;
