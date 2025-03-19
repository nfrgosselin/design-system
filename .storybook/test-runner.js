const { getStoryContext } = require('@storybook/test-runner');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

module.exports = {
  async preVisit(page, context) {
    // Add any custom setup before each story render
    await page.setViewportSize({ width: 1280, height: 720 });
  },

  async postVisit(page, context) {
    // Add image snapshot for every story
    const storyContext = await getStoryContext(page, context);

    // Skip snapshots for specific stories if needed
    if (storyContext.parameters?.skipSnapshots) {
      return;
    }

    // Add custom expect matchers
    expect.extend({ toMatchImageSnapshot });

    // Take a screenshot and compare it with the baseline
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
};
