# 1. Automated Publishing with GitHub Actions

Setup Instructions

## 1.1 Create GitHub Workflow File

Create a file at .github/workflows/publish.yml:

```yaml
name: Publish Package to NPM

on:
  push:
    tags:
      - 'v*.*.*'

jobs:
  build-and-publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'
          registry-url: 'https://registry.npmjs.org'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build package
        run: npm run build

      - name: Publish to NPM
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 1.2 Configure NPM Token in GitHub Secrets

Generate an NPM token:

- Go to npmjs.com and log in
- Click on your profile picture → Access Tokens
- Click "Generate New Token" → Select "Publish"
- Copy the token

Add the token to GitHub repository secrets:

- Go to your GitHub repository
- Navigate to Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: NPM_TOKEN
- Value: paste your NPM token
- Click "Add secret"

## 1.3 Create Release Script

Add a script to package.json to streamline creating releases:

```json
{
  "scripts": {
    "release": "npm run build && npm run test && npm version",
    "postversion": "git push && git push --tags"
  }
}
```

## 1.4 Usage Workflow

When you want to publish a new version:

```bash
# For a patch release (0.0.x)
npm run release patch

# For a minor release (0.x.0)
npm run release minor

# For a major release (x.0.0)
npm run release major
```

This will:

- Run the build process
- Run tests
- Update the version in package.json
- Create a git commit with the updated version
- Create a git tag
- Push the commit and tag to GitHub
- The GitHub Action will detect the new tag and publish to NPM
