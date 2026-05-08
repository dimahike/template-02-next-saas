import "server-only";

export type ServerRequestContext = {
  requestId: string;
  actorId: string | null;
};

export function createServerRequestContext(): ServerRequestContext {
  return {
    requestId: crypto.randomUUID(),
    actorId: null
  };
}
