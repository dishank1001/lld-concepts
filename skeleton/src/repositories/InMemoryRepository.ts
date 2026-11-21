import { Entity } from "../models/Entity";
import { Repository } from "./Repository";

export class InMemoryRepository<T extends Entity> implements Repository<T> {
  private readonly store = new Map<string, T>();

  findById(id: string): T | undefined {
    return this.store.get(id);
  }

  findAll(): T[] {
    return [...this.store.values()];
  }

  save(entity: T): T {
    this.store.set(entity.id, entity);
    return entity;
  }

  delete(id: string): boolean {
    return this.store.delete(id);
  }
}