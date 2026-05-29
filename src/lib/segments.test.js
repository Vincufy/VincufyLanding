import { describe, it, expect } from "vitest";
import { computeSegment, SEGMENTS } from "./segments";

describe("computeSegment", () => {
  it("returns 'boliches' when Q3 is boliche", () => {
    const answers = {
      participants: "100-300",
      frequency: "weekly",
      organizerType: "boliche",
    };
    expect(computeSegment(answers)).toBe("boliches");
  });

  it("returns 'productores' when Q3 is productor", () => {
    const answers = {
      participants: "300-700",
      frequency: "monthly",
      organizerType: "productor",
    };
    expect(computeSegment(answers)).toBe("productores");
  });

  it("returns 'casual' when Q3 is otro", () => {
    const answers = {
      participants: "0-100",
      frequency: "yearly",
      organizerType: "otro",
    };
    expect(computeSegment(answers)).toBe("casual");
  });

  it("returns 'casual' as fallback when Q3 is missing", () => {
    const answers = { participants: "100-300", frequency: "weekly" };
    expect(computeSegment(answers)).toBe("casual");
  });

  it("throws if answers is null", () => {
    expect(() => computeSegment(null)).toThrow();
  });
});

describe("SEGMENTS", () => {
  it("exposes the 3 valid segment IDs", () => {
    expect(SEGMENTS).toEqual(["boliches", "productores", "casual"]);
  });
});
