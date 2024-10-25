import yargs from 'yargs'
import { flags } from './flags'


export const execution = (args: string[]) => {
    const cliInstance = yargs(args)
        .strict()        
        .demandCommand( // Set yargs to receive just one phrase, nothing more
            1,
            1,
            'A phrase must be passed to be analyzed'
        )
        .options(flags)
        .parse()

    console.log(cliInstance);
}