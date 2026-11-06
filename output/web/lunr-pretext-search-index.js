var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "worksheet-convergence",
  "level": "1",
  "url": "worksheet-convergence.html",
  "type": "Worksheet",
  "number": "1",
  "title": "Convergence Tests",
  "body": " Convergence Tests   Ignored here, not in an exercise: .     Complete the table.       Test  Hypotheses  Conclusion    Ratio test      Root test      Integral test      An ordinary blank still works: .  Testing mathematics:     Ignored in a solution: .    "
},
{
  "id": "worksheet-convergence-3",
  "level": "2",
  "url": "worksheet-convergence.html#worksheet-convergence-3",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Complete the table.       Test  Hypotheses  Conclusion    Ratio test      Root test      Integral test      An ordinary blank still works: .  Testing mathematics:     Ignored in a solution: .   "
},
{
  "id": "section-not-printout",
  "level": "1",
  "url": "section-not-printout.html",
  "type": "Section",
  "number": "2",
  "title": "Not a Printout",
  "body": " Not a Printout    Ignored outside a printout: .        Inside inline math (short, space for ):  Inside inline math (default, space for ):  Inside exponents and subscripts (each is space for the string 12 ). In this case, be sure to wrap your exponents and subscripts in braces, as would be good latex practice anyway:  Inside inline math (too long for this line probably, 40 characters long):  So use inside a displayed equation like this one.  Inside the second line of a multi-line display:  This fillin has the historical characters attribute for a fillin inside math: , which may be more convenient, but may not side properly in places like subscripts, superscripts, fractions, limits of integrals, and so on.     "
},
{
  "id": "section-not-printout-2",
  "level": "2",
  "url": "section-not-printout.html#section-not-printout-2",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "",
  "body": "  Ignored outside a printout: .   "
},
{
  "id": "section-not-printout-3",
  "level": "2",
  "url": "section-not-printout.html#section-not-printout-3",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "",
  "body": "    Inside inline math (short, space for ):  Inside inline math (default, space for ):  Inside exponents and subscripts (each is space for the string 12 ). In this case, be sure to wrap your exponents and subscripts in braces, as would be good latex practice anyway:  Inside inline math (too long for this line probably, 40 characters long):  So use inside a displayed equation like this one.  Inside the second line of a multi-line display:  This fillin has the historical characters attribute for a fillin inside math: , which may be more convenient, but may not side properly in places like subscripts, superscripts, fractions, limits of integrals, and so on.    "
},
{
  "id": "section-workspace-cases",
  "level": "1",
  "url": "section-workspace-cases.html",
  "type": "Section",
  "number": "3",
  "title": "Workspace Cases",
  "body": " Workspace Cases   Tables in a Worksheet   Paragraph cells   Columns with widths, and cells holding paragraphs. Expect each blank inside its cell, which latex sets as a paragraph column.       Object  Definition  Example    Group      Ring         A cell spanning columns   The last row has one blank across two columns. Expect it wider than the others, from characters .       Function  Derivative  Antiderivative         Pattern        Alignment from the table   The tabular has valign=\"top\" and no row overrides it. Expect every label at the top of its row. The blanks have no characters , so they are the default ten characters wide.    First     Second        Table notes   A table with a note, which latex measures in a box. Expect the note below the table and the blanks unaffected.    Series Assume all terms are positive.  Converges?           A table beside a figure   A tabular inside a sidebyside . Expect the blanks to fit the narrower panel.     Mean     Median     Data: .       Other Structures in a Worksheet   In a paragraph   Outside a table, expect the blank to hang down from the top of its line:  The next paragraph starts below the blank.     In a list     State the definition:  Give an example:       In tasks   Expect workspace in each task.               Explain:    Ignored in a hint, so expect an ordinary blank: .      In a project-like   An activity in a worksheet. Expect workspace.    Prediction        Units   Centimeters are accepted:  A page percentage is approximated, with a warning, as 1 inch:  A bare number is replaced, with a warning, by 2 inches:      A Handout  Not in an exercise, so expect an ordinary blank and a validation warning: .   In a handout     Summary         A Project Outside a Printout  A project with workspace is a printout of its own. Expect it on a page of its own in latex , and a print preview in HTML .   Standalone project     Hypothesis        "
},
{
  "id": "case-paragraph-cells",
  "level": "2",
  "url": "section-workspace-cases.html#case-paragraph-cells",
  "type": "Worksheet Exercise",
  "number": "3.1.1",
  "title": "Paragraph cells.",
  "body": " Paragraph cells   Columns with widths, and cells holding paragraphs. Expect each blank inside its cell, which latex sets as a paragraph column.       Object  Definition  Example    Group      Ring       "
},
{
  "id": "case-column-span",
  "level": "2",
  "url": "section-workspace-cases.html#case-column-span",
  "type": "Worksheet Exercise",
  "number": "3.1.2",
  "title": "A cell spanning columns.",
  "body": " A cell spanning columns   The last row has one blank across two columns. Expect it wider than the others, from characters .       Function  Derivative  Antiderivative         Pattern      "
},
{
  "id": "case-tabular-valign",
  "level": "2",
  "url": "section-workspace-cases.html#case-tabular-valign",
  "type": "Worksheet Exercise",
  "number": "3.1.3",
  "title": "Alignment from the table.",
  "body": " Alignment from the table   The tabular has valign=\"top\" and no row overrides it. Expect every label at the top of its row. The blanks have no characters , so they are the default ten characters wide.    First     Second      "
},
{
  "id": "case-table-notes",
  "level": "2",
  "url": "section-workspace-cases.html#case-table-notes",
  "type": "Worksheet Exercise",
  "number": "3.1.4",
  "title": "Table notes.",
  "body": " Table notes   A table with a note, which latex measures in a box. Expect the note below the table and the blanks unaffected.    Series Assume all terms are positive.  Converges?         "
},
{
  "id": "case-side-by-side",
  "level": "2",
  "url": "section-workspace-cases.html#case-side-by-side",
  "type": "Worksheet Exercise",
  "number": "3.1.5",
  "title": "A table beside a figure.",
  "body": " A table beside a figure   A tabular inside a sidebyside . Expect the blanks to fit the narrower panel.     Mean     Median     Data: .    "
},
{
  "id": "case-paragraph",
  "level": "2",
  "url": "section-workspace-cases.html#case-paragraph",
  "type": "Worksheet Exercise",
  "number": "3.2.1",
  "title": "In a paragraph.",
  "body": " In a paragraph   Outside a table, expect the blank to hang down from the top of its line:  The next paragraph starts below the blank.   "
},
{
  "id": "case-list",
  "level": "2",
  "url": "section-workspace-cases.html#case-list",
  "type": "Worksheet Exercise",
  "number": "3.2.2",
  "title": "In a list.",
  "body": " In a list     State the definition:  Give an example:     "
},
{
  "id": "case-tasks",
  "level": "2",
  "url": "section-workspace-cases.html#case-tasks",
  "type": "Worksheet Exercise",
  "number": "3.2.3",
  "title": "In tasks.",
  "body": " In tasks   Expect workspace in each task.               Explain:    Ignored in a hint, so expect an ordinary blank: .    "
},
{
  "id": "case-activity",
  "level": "2",
  "url": "section-workspace-cases.html#case-activity",
  "type": "Activity",
  "number": "3.1",
  "title": "In a project-like.",
  "body": " In a project-like   An activity in a worksheet. Expect workspace.    Prediction      "
},
{
  "id": "case-units",
  "level": "2",
  "url": "section-workspace-cases.html#case-units",
  "type": "Worksheet Exercise",
  "number": "3.2.4",
  "title": "Units.",
  "body": " Units   Centimeters are accepted:  A page percentage is approximated, with a warning, as 1 inch:  A bare number is replaced, with a warning, by 2 inches:   "
},
{
  "id": "case-handout",
  "level": "2",
  "url": "section-workspace-cases.html#case-handout",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "In a handout.",
  "body": " In a handout     Summary      "
},
{
  "id": "case-standalone-project",
  "level": "2",
  "url": "section-workspace-cases.html#case-standalone-project",
  "type": "Project",
  "number": "3.3",
  "title": "Standalone project.",
  "body": " Standalone project     Hypothesis      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
