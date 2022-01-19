import { CSSProperties, ReactChild } from "react";

export interface LogoProps{
  style?: CSSProperties,
  width?: string,
  height?:string,
  children?: ReactChild
}