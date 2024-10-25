import { loadHierarchy } from "./analyser/hierarchyLoader";

export let globalState = {
  flags: {
    verbose: false,
  },
  timers: {
    loadHierarchy: 0,
    analyzePhrase: 0,
  }
}