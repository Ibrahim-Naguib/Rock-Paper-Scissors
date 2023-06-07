import { create } from "zustand";

// Updating Score

interface ScoreState {
  score: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useScoreStore = create<ScoreState>((set) => ({
  score: 0,
  reset: () => set((state) => ({ score: 0 })),
  increment: () => set((state) => ({ score: state.score + 1 })),
  decrement: () =>
    set((state) => ({
      score: state.score === 0 ? state.score : state.score - 1,
    })),
}));

// Selected Circle

interface Selected {
  selected: string;
  setSelected: (str: string) => void;
}

export const useSelected = create<Selected>((set) => ({
  selected: "",
  setSelected: (str) => set({ selected: str }),
}));

// Random

interface SelectedRandom {
  random: string;
  setRandom: (str: string) => void;
}

export const useRandom = create<SelectedRandom>((set) => ({
  random: "",
  setRandom: (str) => set({ random: str }),
}));

// Result

interface Result {
  result: string;
  setResult: (str: string) => void;
}

export const useResult = create<Result>((set) => ({
  result: "",
  setResult: (str) => set({ result: str }),
}));
