import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { CreateGymUseCase } from "./create-gym";

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase;

describe("Create Gym Use Case Use Case", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });

  it("shoud be able to create gym", async () => {
    const { gym } = await sut.execute({
      title: "JavaScript Gym",
      description: null,
      phone: null,
      latitude: -19.9283785,
      longitude: -43.9722806,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
