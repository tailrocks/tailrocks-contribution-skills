# tailrocks-contribution-skills

One portable package with five skills. The skills run the
contribution lifecycle for external projects: reconnaissance,
proposal, preparation, submission, and review response. All five
skills are user-only and need an explicit human command.

## Skills

| Skill | Task |
| --- | --- |
| [`tailrocks-contribute-recon`](skills/tailrocks-contribute-recon/SKILL.md) | Examine one project. User-only. |
| [`tailrocks-contribute-propose`](skills/tailrocks-contribute-propose/SKILL.md) | Draft one venue proposal. User-only. |
| [`tailrocks-contribute-prepare`](skills/tailrocks-contribute-prepare/SKILL.md) | Implement one proposal. User-only. |
| [`tailrocks-contribute-submit`](skills/tailrocks-contribute-submit/SKILL.md) | Publish one contribution. User-only. |
| [`tailrocks-contribute-respond`](skills/tailrocks-contribute-respond/SKILL.md) | Answer one review round. User-only. |

Each skill body lives in its own directory. Read
`skills/tailrocks-contribute-recon/SKILL.md` for one complete example.

## Install

Install one complete package in your host's chosen scope. The [Tailrocks
catalog](https://github.com/tailrocks/tailrocks-skills) selects the source commit.
Use the route for your host.

| Host | Native install route |
| --- | --- |
| Claude Code | [Marketplace plugin](docs/installation.md#claude-code) |
| Codex | [Marketplace plugin](docs/installation.md#codex) |
| Grok Build | [Marketplace plugin](docs/installation.md#grok-build) |
| Muse Code | [Marketplace snapshot](docs/installation.md#muse-code) |
| omp | [Marketplace plugin](docs/installation.md#omp) |
| OpenCode V2 | [Git package](docs/installation.md#opencode) |
| Amp | [Directory plugin](docs/installation.md#amp) |
| Antigravity | [Local plugin installer](docs/installation.md#antigravity) |
| pi | [Git package](docs/installation.md#pi) |
| Kimi Code | [Marketplace manager](docs/installation.md#kimi-code) |

Run these commands to install from the Claude Code marketplace.

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-contribution-skills@tailrocks --scope user
```

See [runtime requirements](docs/runtime.md) for tools and files the skills use.

## Use

Select the owner for the requested work. To examine one project on
Claude Code (session):

```text
/tailrocks-contribution-skills:tailrocks-contribute-recon OWNER/REPO
```

The skill returns a handoff with the contribution contract,
classifications, and one outcome: examined, blocked, or refused. The
skill is read-only. See `docs/usage.md` for every owner, more
examples, and the lifecycle boundary.

## Documentation

- [Package guide](docs/README.md)
- [Installation](docs/installation.md)
- [Usage](docs/usage.md)
- [Runtime requirements](docs/runtime.md)
- [Model settings](docs/models.md)
- [Compatibility and verification](docs/compatibility.md)
- [Maintenance](docs/maintenance.md)

## Update and remove

Use [the host's update and removal steps](docs/installation.md).
For a pinned Git package, install the new catalog revision and use one copy in
the chosen scope.

## Contribute

Open an issue or a pull request on GitHub. Write all new and changed prose in
ASD-STE100 Simplified Technical English, Issue 9 rules. Before the pull
request, run `alint check`, the strict-JSON check, and the frontmatter check.
See `docs/maintenance.md` for the full list. Never add evaluation content.

## License

Apache License, Version 2.0. See `LICENSE` for the full text.
