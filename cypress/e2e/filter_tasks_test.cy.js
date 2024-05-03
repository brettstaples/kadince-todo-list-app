describe("Filter Tasks", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("[data-cy=new-task-input]")
            .type("test name")
            .get("[data-cy=new-task-form]")
            .submit();
    });

    afterEach(() => {
        cy.get("[data-cy=task-cell]")
            .contains("test")
            .get("[data-cy=task-cell-delete-button]")
            .eq(-1)
            .click();
        cy.get("[data-cy=task-filter-all]")
            .click();
    });

    it("Should filter for in finished tasks", () => {
        cy.get("[data-cy=task-cell]")
            .contains("[data-cy=task-cell]", "test")
            .find("[data-cy=task-cell-change-progress-button]")
            .click({ force: true });
        cy.wait(2000);
        cy.get("[data-cy=task-filter-finished]")
            .click();
        cy.get("[data-cy=task-cell]")
            .contains("test")
            .should("be.visible");
        });

    it("Should filter for in progress tasks", () => {
        cy.get("[data-cy=task-cell]")
            .contains("[data-cy=task-cell]", "test");
        cy.get("[data-cy=task-filter-in-progress]")
            .click();
        cy.get("[data-cy=task-cell]")
            .contains("test")
            .should("be.visible");
    });
});