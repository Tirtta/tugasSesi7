const { expect } = require("chai");

describe("DELETE User", () => {
  it("should delete user", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
    });
    expect(response.status).to.equal(204);
  });
});
