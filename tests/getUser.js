const { expect } = require("chai");

describe("GET User", () => {
  it("should return user data", async () => {
    const response = await fetch("https://reqres.in/api/users/2");
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.data).to.have.property("id", 2);
  });
});
