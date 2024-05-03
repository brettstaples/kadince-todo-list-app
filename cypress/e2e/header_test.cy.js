describe("Task header", () => {
    it("Should check that the title exists", () => {
        cy.visit("/");
        cy.get("[data-cy=title]")
            .should("be.visible")
            .should("have.text", "Todo List");
    });
});
