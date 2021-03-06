Fixes #???

_(**Required**: this reference (one or many) will be closed upon merge. Ideally it has the acceptance criteria and designs for features or fixes related to the work in this Pull Request.)_

Connected to #???

_(Optional: other issues or pull requests related to this, but merging should not close it)_

## Testing and Review Notes

_(**Required**: steps to take to confirm this works as expected or other guidance for code, UX, and any other reviewers)_


## Screenshots or Videos

_(Optional: to clearly demonstrate the feature or fix to help with testing and reviews)_


## To Do

- add “WIP” to the PR title if pushing up but not complete nor ready for review
- [ ] double check the original issue to confirm it is fully satisfied
- [ ] add testing notes and screenshots in PR description to help guide reviewers
- [ ] add unit tests
  - optional: consider adding integration tests
- [ ] request the "UX" team perform a design review (if/when applicable)
- [ ] make sure CI builds are passing (e.g.: fix lint and other errors)
- [ ] check on the [accessibility](https://mozilla-lockbox.github.io/lockbox-addon/developer/test-plan-accessibility/) of any added UI
- [ ] make sure any new UI has telemetry events wired up and documented in docs/metrics.md, and verify that the events are recording properly (visit `about:telemetry#events-tab`, then choose 'dynamic' from the dropdown menu at top right, to view events fired by the addon
