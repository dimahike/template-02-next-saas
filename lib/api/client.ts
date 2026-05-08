export type ApiSuccess<T> = {
  data: T;
  error: null;
};

export type ApiFailure = {
  data: null;
  error: string;
};

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

export async function apiGet<T>(input: string, init?: RequestInit): Promise<ApiResult<T>> {
  try {
    const response = await fetch(input, {
      method: "GET",
      headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
      ...init
    });

    if (!response.ok) {
      return { data: null, error: `Request failed: ${response.status}` };
    }

    const parsed = (await response.json()) as T;
    return { data: parsed, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown API error"
    };
  }
}
