import { Entity } from "../models/Entity";

export interface Repository<T extends Entity> {
  findById(id: string): T | undefined;
  findAll(): T[];
  save(entity: T): T;
  delete(id: string): boolean;
}