Jira: _provide URL_
Design: _provide URL_

## Description

_Provide a description of what this PR does. The more context you give the easier it will be for the reviewers._

## How to test

_Provide info and steps on how to test the changes._

1. Any pre-requisites to be able to test?
2. What are we testing, what is the expected behavior
3. Where can we test it, on which customer, for which service

## Preview

_Showcase the change. If there is user interaction involved, a video on how it works should be provided._

| Original              | Updated              |
| --------------------- | -------------------- |
| _original_screenshot_ | _updated_screenshot_ |

## Task list

Make sure your PR meets the requirements and mark tasks as complete.

-   [ ] PII is hidden from Hotjar and Amplitude.
-   [ ] User role permissions are handled.

<details>
<summary>Additional requirements</summary>

1. API communication is kept outside components.
2. Shared components and utility functions are tested.
3. Shared components are added to the Storybook.
4. Errors are caught in components (`handleApiError`, `handleNavigationFailure`).
5. Currency, date formatting and conversion are done using helper functions.
6. CSS selectors affecting child components have larger specificity then the original selectors.

Taken from the [Frontend coding guidelines](https://leanix.atlassian.net/wiki/spaces/CPE/pages/7536182131/Frontend+coding+guidelines) document.

</details>
