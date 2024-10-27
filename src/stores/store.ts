'use client'

import { create } from "zustand"

interface OpenState {
    isOpen: boolean
    onOpen: () => void
}

const useOpen = create<OpenState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
}))

export default useOpen