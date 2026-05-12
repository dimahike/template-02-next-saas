import { describe, expect, it } from "vitest";

import { paginationSchema } from "@/lib/validation/pagination";

describe("paginationSchema", () => {
  it("applies defaults", () => {
    const parsed = paginationSchema.parse({});

    expect(parsed).toEqual({
      page: 1,
      pageSize: 20
    });
  });

  it("rejects values outside constraints", () => {
    expect(() => paginationSchema.parse({ page: 0, pageSize: 101 })).toThrow();
  });
});
