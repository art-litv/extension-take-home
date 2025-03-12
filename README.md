# Simplify Extension Take-Home Assignment

Hello! The goal of this assignment is for you to demonstrate:

- Your understanding of web technologies, browser extensions and their capabilities/limitations
- How you overcome obstacles that make it difficult to achieve the desired result
- Your approach to software architecture

Please do not spend too much of your time on this! Ideally, this should take no more than half a day of your time.

## Project Overview

Your task is to create a browser extension that will automate the filling of basic inputs on a page.

It should be built using TypeScript and React, and it should work in both Chrome and Firefox. Feel free to use any [browser extension starter kit](https://search.brave.com/search?q=browser+extension+starter+kit) of your choice.

When the extension icon is clicked, open https://simplifyjobs.github.io/extension-take-home and render an interactive popup within the top frame. The popup should have:

- Its own styling, unaffected by the page's styling
- An "Autofill" button
- The current overall status of the autofill (unfilled/filling/filled)
- The current status of each individual fill step

Clicking the popup's "Autofill" button should:

- Use XPaths to find the relevant elements
- Click the "Start" button
- Add "foo" to the todo list
- Check "foo" as completed
- Add "bar" to the todo list
- Check "bar" as completed

As it fills, the fill status (unfilled, filling, filled) of everything should be visible. The popup is expected to look and function as follows:

- Autofill button with text that changes from "Autofill" to "Filling" to "Filled"
- A list of autofill steps with their current status in parentheses:
  - Start (unfilled/filling/filled)
    - It should not be considered filled until the next page has loaded
  - Foo (unfilled/filling/filled)
    - It should not be considered filled until it is checked as completed
  - Bar (unfilled/filling/filled)
    - It should not be considered filled until it is checked as completed

Each step should complete one after the other without any interaction from the user beyond the initial click of the "Autofill" button.

If the user clicks "Clear completed", reset the status of everything in the popup. It should be possible to autofill multiple times.

If the user clicks the "Autofill" button while not on the page with the "Start" button, you can skip the "Start" step and immediately mark it as filled.

## Bonus Points

Use a JSON data structure that can be configured to fill any similar type of form. For example:

```json
[
  [
    "start",
    [
      {
        "path": ".//button[contains(., \"Start\")]",
        "method": "click"
      }
    ]
  ],
  [
    "foo",
    [
      {
        "path": ".//fieldset[@id=\"foo\"]//input[@type=\"text\"]",
        "actions": [
          {
            "method": "default",
            "value": "foo",
          },
          {
            "path": ".//fieldset[@id=\"foo\"]//input[@type=\"checkbox\"]",
            "method": "click"
          }
        ]
      }
    ]
  ],
  [
    "foo",
    [
      {
        "path": ".//fieldset[@id=\"bar\"]//input[@type=\"text\"]",
        "actions": [
          {
            "method": "default",
            "value": "bar",
          },
          {
            "path": ".//fieldset[@id=\"bar\"]//input[@type=\"checkbox\"]",
            "method": "click"
          }
        ]
      }
    ]
  ]
]
```
