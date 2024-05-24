import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";
import { SearchGymsUseCase } from "../search-gym";

export function makeSearchGymsUseCase() {
  const GymsRepository = new PrismaGymsRepository();
  const useCase = new SearchGymsUseCase(GymsRepository);

  return useCase;
}
