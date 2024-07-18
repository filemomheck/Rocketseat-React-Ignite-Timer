import styled from "styled-components";

export type ButtonVariantType = "primary" | "secondary" | "success" | "danger";

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  success: "green",
  danger: "red",
};

interface ButtonContainerProps {
  variant: ButtonVariantType;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 48px;

  ${(variant) => `background-color: ${buttonVariants[variant.variant]}`}
`;
