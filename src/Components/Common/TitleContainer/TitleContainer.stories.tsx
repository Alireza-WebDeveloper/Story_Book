import TitleContainer from ".";

export default {
  title: "TitleContainer",
  component: TitleContainer,
};

export const Primary = () => (
  <TitleContainer color="var(--primary)">primary</TitleContainer>
);

export const Danger = () => (
  <TitleContainer color="var(--drimary)">danger</TitleContainer>
);

export const Secondary = () => (
  <TitleContainer color="var(--secondary)">secondary</TitleContainer>
);

export const Success = () => (
  <TitleContainer color="var(--success)">primary</TitleContainer>
);
