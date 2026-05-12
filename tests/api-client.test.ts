import { afterEach, describe, expect, it, vi } from "vitest";

import { apiGet } from "@/lib/api/client";

describe("apiGet", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns parsed data for successful responses", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ value: 42 })
    } as Response);

    const result = await apiGet<{ value: number }>("/health");

    expect(result).toEqual({
      data: { value: 42 },
      error: null
    });
  });

  it("returns an error when response is not ok", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
      status: 500
    } as Response);

    const result = await apiGet("/health");

    expect(result).toEqual({
      data: null,
      error: "Request failed: 500"
    });
  });
});
