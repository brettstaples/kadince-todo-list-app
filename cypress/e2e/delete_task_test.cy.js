describe("Delete Task", () => {
    before(() => {
        cy.visit("/");
        cy.get("[data-cy=new-task-input]")
            .type("begin")
            .get("[data-cy=new-task-form]")
            .submit();
    })

    beforeEach(() => {
        cy.visit("/");
    });

    it("Should correctly delete a task", () => {
        cy.get("[data-cy=new-task-input]")
            .type("test name")
            .get("[data-cy=new-task-form]")
            .submit();
        cy.get("[data-cy=task-cell]")
            .contains("test")
            .get("[data-cy=task-cell-delete-button]")
            .eq(-1)
            .click();
        cy.get("[data-cy=task-cell-name]")
            .contains("test name")
            .should("not.exist");
    });

    it("Should correctly delete a task with date", () => {
        cy.get("[data-cy=new-task-input]")
            .type("test with date")
            .get("[data-cy=new-task-set-deadline-button]")
            .click()
            .get("[data-cy=new-task-date-input]")
            .type("2024-03-05T08:30")
            .get("[data-cy=new-task-form]")
            .submit();
        cy.get("[data-cy=task-cell]")
            .contains("3/5/2024, 8:30:00 AM")
            .get("[data-cy=task-cell-delete-button]")
            .eq(-1)
            .click();
        cy.get("[data-cy=task-cell-name]")
            .contains("test name")
            .should("not.exist");
    });
});