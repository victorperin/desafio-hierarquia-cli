import { describe, expect, test } from "bun:test";
import { findDepth } from "./findDepth";

describe('findDepth', () => {
  test('Deve encontrar Mamíferos para Gorilas em nível 2', () => {
    // Arrange
    const path = [ "Animais", "Mamíferos", "Herbívoros", "Primatas", "Gorilas" ]

    // Act
    const result = findDepth(path, 2)

    // Assert
    expect(result).toBe('Mamíferos')
  })

  test('Deve encontrar Bovídeos para Bois em nível 4', () => {
    // Arrange
    const path = [ "Animais", "Mamíferos", "Herbívoros", "Bovídeos", "Bois" ]

    // Act
    const result = findDepth(path, 4)

    // Assert
    expect(result).toBe('Bovídeos')
  })

  test('Deve encontrar Leões para Leões em nível 5', () => {
    // Arrange
    const path = [ "Animais", "Mamíferos", "Carnívoros", "Felinos", "Leões" ]

    // Act
    const result = findDepth(path, 5)

    // Assert
    expect(result).toBe('Leões')
  })

  test('Não deve encontrar nada Bois em nível 100', () => {
    // Arrange
    const path = [ "Animais", "Mamíferos", "Herbívoros", "Bovídeos", "Bois" ]

    // Act
    const result = findDepth(path, 100)

    // Assert
    expect(result).toBeNull()
  })

  test('Não deve encontrar nada Aves em nível 5', () => {
    // Arrange
    const path = [ "Animais", "Aves" ]

    // Act
    const result = findDepth(path, 5)

    // Assert
    expect(result).toBeNull()
  })

  test('Não deve encontrar nada Desconhecido em nível 1', () => {
    // Arrange
    const path: string[] = [ ]

    // Act
    const result = findDepth(path, 1)

    // Assert
    expect(result).toBeNull()
  })

})