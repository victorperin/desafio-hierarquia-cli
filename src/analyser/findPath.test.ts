import { describe, expect, test } from "bun:test";

import { findPath } from './findPath';
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

describe('findPath', () => {
  test.each([
    ['Primatas', ['Animais', 'Mamíferos', 'Herbívoros', 'Primatas']],
    ['Felinos', ['Animais', 'Mamíferos', 'Carnívoros', 'Felinos']],
    ['Leões', ['Animais', 'Mamíferos', 'Carnívoros', 'Felinos', 'Leões']],
    ['Dinossauros', []], // Teste para um item que não existe
  ])('Deve encontrar o caminho completo até "%s"', (target, expectedPath) => {
    // Act
    const result = findPath(mockHierarchy, target);

    // Assert
    expect(result).toEqual(expectedPath);
  });
});
