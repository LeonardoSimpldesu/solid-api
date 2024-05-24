import { Gym, Prisma } from "@prisma/client";

export interface FindManyNearby {
  latitude: number;
  longitude: number;
}

export interface GymsRepository {
  findById(id: string): Promise<Gym | null>;
  searchMany(query: string, page: number): Promise<Gym[]>;
  findManyNearby(params: FindManyNearby): Promise<Gym[]>;
  create(data: Prisma.GymCreateInput): Promise<Gym>;
}
