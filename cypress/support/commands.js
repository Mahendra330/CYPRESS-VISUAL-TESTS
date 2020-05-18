import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"
import '@percy/cypress'
addMatchImageSnapshotCommand({
    failureTreshold:0.0,
    failureTresholdType : "percent",
    customDiffConfig : { Treshold:0.0},
    capture:"viewport"
})

cyprees.commands.add("setResolution",size => {
    if (cypress._.isArray(size)) {
        cy.viewport(size[0],size[1])
    } else {
        cy.viewport(size)
    }
})