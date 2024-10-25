import type { Options } from "yargs";

export const flags: { [key: string]: Options } = {
    depth: {
        alias: 'd',
        type: 'number',
        demandOption: true,
    },
    verbose: {
        alias: 'V',
        boolean: true,
        default: false,
        description: 'Shows extra timing info'
    },
}