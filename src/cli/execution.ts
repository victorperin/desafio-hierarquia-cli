import yargs from 'yargs'
import { flags } from './flags'
import { loadHierarchy } from '../analyser/hierarchyLoader'
import { analyzePhrase } from '../analyser';
import { globalState } from '../globalState';
import Table from 'cli-table3'


export const parseArguments = async (args: string[]) =>
  yargs(args)
    .strict()        
    .demandCommand( // Set yargs to receive just one phrase, nothing more
      1,
      1,
      'A phrase must be passed to be analyzed'
    )
    .options(flags)
    .parse()


export const execution = async (args: string[]) => {
  const { depth, verbose, _: [phrase] } = await parseArguments(args);

  if (!phrase) {
    console.error('Por favor, forneça uma frase válida para análise.');
    process.exit(1);
  }

  if(verbose) globalState.flags.verbose = true;

  const hierarchy = await loadHierarchy('./dicts/hierarquia.json');
  const result = analyzePhrase(phrase.toString(), Number(depth), hierarchy);
  
  
  console.log(result)
  if(globalState.flags.verbose) {
    const table = new Table()
    table.push(
      {'Tempo de carregamento dos parâmetros (ms)': globalState.timers.loadHierarchy * 1000 },
      {'Tempo de verificação da frase (ms)': globalState.timers.analyzePhrase * 1000 },
    )
    console.log(table.toString());
  }
};