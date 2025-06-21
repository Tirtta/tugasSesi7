const { expect } = require("chai");

describe("POST Create User", () => {
  it("should create a user", async () => {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Shinta", job: "Leader" }),
    });
    const data = await response.json();
    expect(response.status).to.equal(201);
    expect(data.name).to.equal("Shinta");
  });
});
