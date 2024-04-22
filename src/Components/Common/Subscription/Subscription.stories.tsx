import { useState } from "react";
import { Meta } from "@storybook/react";
import { action, actions } from "@storybook/addon-actions";
import Input from "../Input";

import styled from "styled-components";

export default {
  title: "Form/Subscription",
} as Meta;

const StyledSubscription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const PrimarySubscription = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledSubscription {...actions("onClick", "onMouseOver", "onChange")}>
      <Input
        handleChange={() => {}}
        value={value}
        onChange={handleChange}
        className="mb-4"
        placeholder="Enter your email"
      />
    </StyledSubscription>
  );
};
