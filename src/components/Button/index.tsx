import { ButtonHTMLAttributes } from "react"
import { OrangeButton } from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return <OrangeButton {...props}></OrangeButton>
}
