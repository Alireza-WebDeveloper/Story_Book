import { useState } from "react";
import Input from "../../Components/Common/Input";
import TitleContainer from "../../Components/Common/TitleContainer";

const Page = () => {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <TitleContainer>list of products</TitleContainer>
      <Input
        className="mt-2"
        value={name}
        placeholder="Please Enter Your Name"
        handleChange={(value: any) => {
          setName(value);
        }}
      />
    </div>
  );
};

export default Page;
