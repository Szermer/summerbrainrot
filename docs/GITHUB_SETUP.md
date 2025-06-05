# GitHub Repository Setup Guide

## Creating the Repository

1. **Go to GitHub**
   - Navigate to https://github.com/new
   - Or click the "+" icon in the top right and select "New repository"

2. **Repository Settings**
   - **Repository name**: `summerbrainrot`
   - **Description**: "Strategic learning laboratory where young entrepreneurs transform creative ideas into real businesses through collaborative game development"
   - **Visibility**: Choose Public or Private based on your preference
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

3. **Create Repository**
   - Click "Create repository"

## Pushing Local Repository

After creating the empty repository on GitHub, run these commands:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/stephenszermer/summerbrainrot.git

# Push to GitHub
git push -u origin main
```

If using SSH instead of HTTPS:
```bash
git remote add origin git@github.com:stephenszermer/summerbrainrot.git
git push -u origin main
```

## Repository Settings Configuration

### 1. Branch Protection Rules

Navigate to Settings → Branches → Add rule

For `main` branch:
- ✅ Require a pull request before merging
- ✅ Require approvals (1-2 approvals)
- ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require status checks to pass before merging
  - Required checks: `quality`, `unit-tests`, `e2e-tests`
- ✅ Require branches to be up to date before merging
- ✅ Include administrators

### 2. GitHub Actions

Navigate to Settings → Actions → General

- **Actions permissions**: Allow all actions and reusable workflows
- **Workflow permissions**: Read and write permissions
- ✅ Allow GitHub Actions to create and approve pull requests

### 3. Secrets and Variables

Navigate to Settings → Secrets and variables → Actions

Add these secrets:
- `VERCEL_TOKEN`: For preview deployments
- `SNYK_TOKEN`: For security scanning (optional)
- `FIREBASE_SERVICE_ACCOUNT`: For Firebase deployments

### 4. Pages (if deploying docs)

Navigate to Settings → Pages

- **Source**: Deploy from a branch
- **Branch**: `main` → `/docs`

### 5. Collaborators and Teams

Navigate to Settings → Manage access

Add collaborators or teams as needed.

## Setting Up Development Environment

### 1. Clone the Repository

```bash
git clone https://github.com/stephenszermer/summerbrainrot.git
cd summerbrainrot
```

### 2. Install Dependencies

```bash
npm run install:all
```

### 3. Set Up Environment Variables

```bash
# Copy example env files
cp apps/marketing/.env.example apps/marketing/.env.local
cp apps/portal/.env.example apps/portal/.env.local
```

### 4. Start Development

```bash
npm run dev
```

## Recommended GitHub Features

### 1. Issue Templates

Create `.github/ISSUE_TEMPLATE/` with:
- Bug report template
- Feature request template
- Learning module proposal template

### 2. Pull Request Template

Create `.github/pull_request_template.md`

### 3. Code Owners

Create `.github/CODEOWNERS` to automatically request reviews

### 4. Labels

Useful labels to create:
- `educational`: For learning-focused features
- `participant-task`: Good for program participants
- `mentor-review`: Needs mentor approval
- `brand`: Related to brand implementation
- `testing`: Testing infrastructure
- `monorepo`: Monorepo structure

### 5. Projects

Create a GitHub Project board with columns:
- Backlog
- Ready to Start
- In Progress
- In Review
- Done

## First Issues to Create

1. **Set up Firebase Authentication**
   - Labels: `enhancement`, `participant-task`
   - Milestone: Sprint 2

2. **Implement cross-domain authentication**
   - Labels: `enhancement`, `complex`
   - Milestone: Sprint 2

3. **Create onboarding flow for new participants**
   - Labels: `enhancement`, `educational`
   - Milestone: Sprint 3

4. **Add unit tests for shared components**
   - Labels: `testing`, `good-first-issue`
   - Milestone: Sprint 2

5. **Document component library usage**
   - Labels: `documentation`, `participant-task`
   - Milestone: Sprint 2

## Continuous Integration Status

After pushing, your GitHub Actions will run automatically:
- Code quality checks
- Unit tests
- E2E tests (will fail until dependencies are installed)
- Security scanning

## Educational Integration

Consider adding:
1. **Wiki**: For participant guides and learning resources
2. **Discussions**: For Q&A and community interaction
3. **Learning Path Issues**: Tagged issues that guide participants through the codebase

## Troubleshooting

### Push Rejected
If you get "failed to push some refs":
```bash
git pull --rebase origin main
git push origin main
```

### Large File Issues
If you have large files:
```bash
# Install Git LFS
git lfs track "*.psd"
git lfs track "*.sketch"
git add .gitattributes
git commit -m "Add Git LFS tracking"
```

### Permission Denied
Make sure you've set up SSH keys or use HTTPS with a personal access token.

---

Once the repository is set up, update the README.md with the correct repository URL and add badges for build status, test coverage, etc.