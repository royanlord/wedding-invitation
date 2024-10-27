import type { ButtonProps as ChakraCloseButtonProps } from "@chakra-ui/react"
import { IconButton as ChakraIconButton } from "@chakra-ui/react"
import { forwardRef } from "react"

// Define the CloseButtonProps type
interface CloseButtonProps extends ChakraCloseButtonProps {}
import { LuX } from "react-icons/lu"



export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return (
      <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
        {props.children ?? <LuX />}
      </ChakraIconButton>
    )
  },
)
