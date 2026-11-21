# lld-concepts

Low-level design and machine-coding practice in TypeScript: design patterns, SOLID, and timed builds of classic LLD problems such as a parking lot, an elevator, a rate limiter and seat booking.

## Layout
- `skeleton/`: the starter every solution begins from (entities, repositories behind interfaces, domain errors, a driver)
- `katas/`: short exercises on one concept each
- `problems/NN-name/`: one folder per problem

## Run
```bash
npm install
npm test
npx tsx skeleton/src/index.ts
```

## Problems
| # | Problem | Format | Patterns |
|---|---|---|---|