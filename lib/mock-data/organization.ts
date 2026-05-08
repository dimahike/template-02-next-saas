export type MockOrganization = {
  id: string;
  name: string;
  plan: "free" | "pro" | "enterprise";
  membersCount: number;
};

export const mockOrganizations: MockOrganization[] = [
  {
    id: "org_1",
    name: "Acme Workspace",
    plan: "pro",
    membersCount: 8
  },
  {
    id: "org_2",
    name: "Northwind Team",
    plan: "free",
    membersCount: 3
  }
];
