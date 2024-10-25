
import { splitPhraseIntoWords } from '../text/wordProcessor';
import { findDepth } from './findDepth';
import { findPath } from './findPath';
import _ from 'lodash'
import type { Hierarchy } from './types';


export const analyzePhrase = (phrase: string, depth: number, hierarchy: Hierarchy): Hierarchy => {
  const words = splitPhraseIntoWords(phrase);

  return _(words)
    .map( word => findPath(hierarchy, word) )
    .map( path => findDepth(path, depth) )
    .filter(_.identity) // remove falsy values
    .groupBy() // Group matching values
    .mapValues( item => item.length ) // Count items
    .value()
};
