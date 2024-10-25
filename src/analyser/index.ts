
import { splitPhraseIntoWords } from '../text/wordProcessor';
import { findDepth } from './findDepth';
import { findPath } from './findPath';
import _ from 'lodash'
import type { Hierarchy } from './types';
import { globalState } from '../globalState';


export const analyzePhrase = (phrase: string, depth: number, hierarchy: Hierarchy): Hierarchy => {
  performance.mark('startAnalyzePhrase');
  const words = splitPhraseIntoWords(phrase);

  const results = _(words)
    .map( word => findPath(hierarchy, word) )
    .map( path => findDepth(path, depth) )
    .filter(_.identity) // remove falsy values
    .groupBy() // Group matching values
    .mapValues( item => item.length ) // Count items
    .value()

  performance.mark('endAnalyzePhrase')
  globalState.timers.analyzePhrase = performance.measure('startAnalyzePhrase', 'endAnalyzePhrase').duration;

  return results
};
