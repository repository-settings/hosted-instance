# hosted-instance

Repository for the hosted instance of the repository-settings app

<!--status-badges start -->

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Hosted GitHub.com App](#hosted-githubcom-app)
  * [Configuration](#configuration)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

### Hosted GitHub.com App

A hosted version of the [repository-settings app](https://github.com/repository-settings/app)
for use with GitHub.com.

__[Install the app](https://github.com/apps/settings)__ on your repositories or
entire organization.

[![Powered by Vercel][vercel-badge]][vercel-link]

### Configuration

Now that you have the repository settings app installed for your repositories,
see the documentation about [configuration](https://github.com/repository-settings/app/blob/master/docs/configuration.md)
for details
about updating your repository settings through pull-requests.

## Contributing

<!--contribution-badges start -->

[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Renovate][renovate-badge]][renovate-link]
[![PRs Welcome][PRs-badge]][PRs-link]

<!--contribution-badges end -->

### Dependencies

```sh
nvm install
npm clean-install # or npm ci
```

### Verification

```sh
npm test # or npm t
```

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[PRs-link]: https://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[vercel-badge]: https://github.com/repository-settings/app/raw/master/assets/powered-by-vercel.svg

[vercel-link]: https://vercel.com?utm_source=repository-settings&utm_campaign=oss
