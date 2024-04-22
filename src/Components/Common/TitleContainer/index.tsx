import React from "react";
import styled from "styled-components";

// ** Types
interface TitleProps {
  $color?: string;
}

interface TitleContainerProps {
  color?: string;
  children: React.ReactNode;
}

// ?? Stylee

const Title = styled.h3<TitleProps>`
  text-transform: capitalize;
  font-size: 1.2rem;
  color: ${({ $color }) => ($color ? $color : "var(--primary)")};
`;

const Wrapper = styled.section`
  padding: 0.2rem;
`;

// !! Component
const TitleContainer: React.FC<TitleContainerProps> = ({ color, children }) => {
  return (
    <Wrapper>
      <Title $color={color}>{children}</Title>
    </Wrapper>
  );
};

export default TitleContainer;
