import ButtonContainer from ".";
import { action } from "@storybook/addon-actions";
export default {
  title: "ButtonContainer",
  component: ButtonContainer,
};

export const addStore = () => (
  <ButtonContainer
    onClick={() => {
      alert("YES");
    }}
  >
    add Store
  </ButtonContainer>
);

export const removeStore = () => (
  <ButtonContainer onClick={action("clicked")}>remove Store</ButtonContainer>
);
