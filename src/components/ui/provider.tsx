"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider } from "./color-mode"
import { ThemeProvider } from "next-themes"

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider>{props.children}</ThemeProvider>
    </ChakraProvider>
  )
}
