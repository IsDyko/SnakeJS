import { checkWallCollision } from "../src/collision.js";

describe("Tests de collision du serpent", () => {
  test("Détecte une collision avec le mur gauche (x < 0)", () => {
    const head = { x: -1, y: 5 };
    const gridSize = 20;
    expect(checkWallCollision(head, gridSize)).toBe(true);
  });

  test("Ne détecte pas de collision quand le serpent est dans la grille", () => {
    const head = { x: 10, y: 10 };
    const gridSize = 20;
    expect(checkWallCollision(head, gridSize)).toBe(false);
  });
});