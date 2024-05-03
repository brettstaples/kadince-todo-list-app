describe("Create Task", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    afterEach(() => {
        cy.get("[data-cy=task-cell]")
            .contains("test")
            .get("[data-cy=task-cell-delete-button]")
            .eq(-1)
            .click();
    });

    it("Should create a task and ensure it is visible", () => {
        cy.get("[data-cy=new-task-input]")
            .type("test input name")
            .get("[data-cy=new-task-form]")
            .submit();
        cy.get("[data-cy=task-cell-name]")
            .contains("test input name")
            .should("be.visible");
    });

    it("Should create a task with a deadline and ensure it is visible", () => {
        cy.get("[data-cy=new-task-input]")
            .type("test input name with date")
            .get("[data-cy=new-task-set-deadline-button]")
            .click()
            .get("[data-cy=new-task-date-input]")
            .type("2024-03-05T08:30")
            .get("[data-cy=new-task-form]")
            .submit();
        cy.get("[data-cy=task-cell-deadline-output]")
            .contains("3/5/2024, 8:30:00 AM")
            .should("be.visible");
    });

    it("Should input task without deadline after unsetting deadline", () => {
        cy.get("[data-cy=new-task-input]")
            .type("test input name with date")
            .get("[data-cy=new-task-set-deadline-button]")
            .click()
            .get("[data-cy=new-task-date-input]")
            .type("2024-03-05T08:30")
            .get("[data-cy=new-task-exit-set-deadline-button]")
            .click()
            .get("[data-cy=new-task-form]")
            .submit();
        cy.contains("3/5/2024, 8:30:00 AM")
            .should("not.exist");
    });
});