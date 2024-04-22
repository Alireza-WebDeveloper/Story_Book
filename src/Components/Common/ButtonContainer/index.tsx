import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonContainerProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: ReactNode;
}

const ButtonContainer: FC<ButtonContainerProps> = ({
  children,
  onClick,
  className: additionalClass,
}) => {
  return (
    <button
      className={` bg-gradient-to-r cursor-pointer from-blue-400 to-blue-600 text-white px-6 py-3 rounded-md capitalize  hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white ${additionalClass}  transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonContainer;
