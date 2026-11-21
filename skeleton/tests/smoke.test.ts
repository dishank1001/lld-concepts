import { describe, it, expect } from "vitest";
import { InMemoryRepository } from "../src/repositories/InMemoryRepository";
import { DomainError, NotFoundError } from "../src/exceptions/DomainError";

type Item = { id: string; name: string };

describe("skeleton", () => {
  it("saves and finds an entity", () => {
    const repo = new InMemoryRepository<Item>();
    repo.save({ id: "1", name: "first" });

    expect(repo.findById("1")).toEqual({ id: "1", name: "first" });
    expect(repo.findById("2")).toBeUndefined();
  });

  it("treats NotFoundError as a DomainError", () => {
    expect(() => {
      throw new NotFoundError("missing");
    }).toThrow(DomainError);
  });
});