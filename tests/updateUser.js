const { expect } = require("chai");

describe("PATCH Update User", () => {
  it("should update user info", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ job: "Manager" }),
    });
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.job).to.equal("Manager");
  });
});
