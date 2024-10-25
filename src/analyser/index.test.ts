import { describe, expect, test } from "bun:test";

import { analyzePhrase } from './';
import type { Hierarchy } from './types';

const mockHierarchy: Hierarchy = {
  Animais: {
    Mamíferos: {
      Carnívoros: {
        Felinos: ['Leões', 'Tigres', 'Jaguars', 'Leopardos'],
      },
      Herbívoros: {
        Equídeos: ['Cavalos', 'Zebras', 'Asnos'],
        Bovídeos: ['Bois', 'Búfalos', 'Antílopes', 'Cabras'],
        Primatas: ['Gorilas', 'Chimpanzés', 'Orangotangos'],
      },
    },
    Aves: {
      Rapinas: ['Águias', 'Falcões', 'Corujas', 'Milhafres'],
      Pássaros: ['Canários', 'Papagaios', 'Pardais', 'Rouxinóis'],
    },
  },
};

describe('analyzePhrase', () => {
  test.each([
    [
      'Eu amo Leões e Tigres',
      4,
      { Felinos: 2 }, // Espera-se que encontre "Leões" e "Tigres" no nível 4
    ],
    [
      'Eu vi Gorilas e Cavalos',
      3,
      { Herbívoros: 2 }, // "Gorilas" e "Cavalos" são do nível 3
    ],
    [
      'Gosto de Águias e Falcões',
      3,
      { Rapinas: 2 }, // "Águias" e "Falcões" no nível 3
    ],
    [
      'Eu vi uma Zebra e um Chimpanzé',
      5,
      {}, // Nível 5 não possui nenhum item para "Zebra" ou "Chimpanzé"
    ],
    [
      'Leões Papagaios Chimpanzés Águias',
      3,
      { Rapinas: 1, Pássaros: 1, Carnívoros: 1, Herbívoros: 1 }, // Quatro palavras com correspondência no nível 3
    ],
    [
      'Eu gosto de Dinossauros',
      4,
      {}, // "Dinossauros" não existe na hierarquia, espera-se um objeto vazio
    ],
  ])(
    'Dada a frase "%s" e profundidade %d, deve retornar %p',
    (phrase, depth, expectedResult) => {
      // Act
      const result = analyzePhrase(phrase, depth, mockHierarchy);

      // Assert
      expect(result).toEqual(expectedResult);
    }
  );
});
