import React from "react";
import styled from "styled-components";

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
`;

interface CenterProps {
  children: React.ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return <StyledCenter>{children}</StyledCenter>;
};

export default Center;
