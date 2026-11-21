import { DomainError } from "./exceptions/DomainError";

function main(): void {
  // 1. Repositories:  const slotRepo = new InMemoryRepository<Slot>();
  // 2. Services:      const parking = new ParkingService(slotRepo);
  // 3. Scenario:      call the services and print what happens
  console.log("skeleton ready");
}

try {
  main();
} catch (err) {
  if (err instanceof DomainError) {
    console.error(`${err.name}: ${err.message}`);
    process.exitCode = 1;
  } else {
    throw err;
  }
}