# NN · Problem name

**Format:** MC / OOD / L-in-H
**Run:** guided / p1 / p2 / r1
**Time:** from the start and final tags

## Requirements
**Mandatory**
-

**Bonus**
-

## Assumptions and out of scope
-

## Entities and relationships
- `Lot` has many `Slot` (composition)
- `ParkingService` uses `Repository<Slot>`

## Patterns
| Pattern | Where | Why it earns its place | Alternative considered |
|---|---|---|---|
| | | | |

## Trade-offs
-

## Extensions
How the curveball or twist landed: files touched, what stayed unchanged.

## Concurrency
Races found, the Node fix, the Java equivalent.

## How to run
```bash
npx tsx problems/NN-name/src/index.ts
npx vitest run problems/NN-name
```