# Contribution skills guides

This package holds five skills. The skills run the contribution
lifecycle for external projects: reconnaissance, proposal,
preparation, submission, and review response.

All five skills are user-only and need an explicit human command:

- `tailrocks-contribute-recon` examines one project and records its
  contribution contract.
- `tailrocks-contribute-propose` drafts one venue proposal from
  current reconnaissance.
- `tailrocks-contribute-prepare` implements one authorized proposal in
  a dedicated fork clone.
- `tailrocks-contribute-submit` publishes one prepared contribution.
- `tailrocks-contribute-respond` advances one submitted contribution
  through one review round.

## Guides

- [Installation](installation.md) gives the native host routes.
- [Usage](usage.md) shows how to select a skill and use its arguments.
- [Runtime requirements](runtime.md) lists the tools and packaged resources.
- [Package structure](architecture.md) explains file ownership.
- [Model choices](models.md) explains role selection and effort.
- [Compatibility](compatibility.md) records host behavior and limits.
- [Verification](verification.md) lists package checks and observed evidence.
- [Maintenance](maintenance.md) gives generator and release procedures.
- [Troubleshooting](troubleshooting.md) helps diagnose installation or use.

## Skills

| Skill | Task |
| --- | --- |
| `tailrocks-contribute-recon` | Examine one project. User-only. |
| `tailrocks-contribute-propose` | Draft one venue proposal. User-only. |
| `tailrocks-contribute-prepare` | Implement one proposal. User-only. |
| `tailrocks-contribute-submit` | Publish one contribution. User-only. |
| `tailrocks-contribute-respond` | Answer one review round. User-only. |

Each skill body lives in its own directory under `skills/`. Read
`skills/tailrocks-contribute-recon/SKILL.md` for one complete example.

## Requirements

See [runtime requirements](runtime.md) for the tools and files the skills use.
