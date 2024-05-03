describe("Edit Task", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("[data-cy=new-task-input]")
            .type("test")
            .get("[data-cy=new-task-form]")
            .submit();
        cy.get("[data-cy=task-cell]")
            .contains("[data-cy=task-cell]", "test")
            .find("[data-cy=task-cell-edit-button]")
            .click();
    });

    afterEach(() => {
        cy.get("[data-cy=task-cell]").within(() => {
            cy.contains("test");
            cy.get("[data-cy=task-cell-delete-button]")
                .eq(-1)
                .click();
        });
    });

    it("Should correctly edit task name", () => {
        cy.get("[data-cy=task-edit-input]")
            .type(" name")
            .get("[data-cy=task-edit-form]")
            .submit();
        cy.get("[data-cy=task-cell]")
            .contains("test name")
            .should("be.visible");
    });

    it("Should correctly edit task date", () => {
        cy.get("[data-cv=task-edit-change-deadline]")
            .click()
            .get("[data-cy=new-task-date-input]")
            .type("2024-04-05T08:30")
            .get("[data-cy=task-edit-form]")
            .submit();
        cy.get("[data-cy=task-cell-deadline-output]")
            .contains("4/5/2024, 8:30:00 AM")
            .should("be.visible");
    });

    it("Should correctly remove task date", () => {
        cy.get("[data-cv=task-edit-change-deadline]")
            .click()
            .get("[data-cy=new-task-date-input]")
            .type("2024-04-05T08:30")
            .get("[data-cy=task-edit-form]")
            .submit();
        cy.get("[data-cy=task-cell]")
            .contains("[data-cy=task-cell]", "test")
            .find("[data-cy=task-cell-edit-button]")
            .click();
        cy.get("[data-cy=task-edit-remove-deadline]")
            .click()
            .get("[data-cy=task-edit-form]")
            .submit();
        cy.get("[data-cy=task-cell]")
            .contains("test")
            .should("be.visible");
    });
});