import { ReactNode } from "react";
import { ContainerComponent } from "./styles";

interface childrenProps {
  children: ReactNode
}

export function Container({children}: childrenProps) {
  return (
    <ContainerComponent>
      {children}
    </ContainerComponent>
  )
}