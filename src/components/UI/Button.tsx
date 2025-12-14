import type { ReactElement } from "react"

type variants = "primary" | "secondary"
interface ButtonProps{
    variant: variants,
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void 
}

const variantStyles = {
    "primary": "bg-lavender-600 text-white",
    "secondary": "bg-lavender-300 text-lavender-600"
}

const defaultStyles = "flex justify-center items-center rounded-md cursor-pointer";

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`} onClick={props.onClick}>

            {props.startIcon}
            {props.text}
        
    </button>
}