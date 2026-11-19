// Native Amp directory plugin for tailrocks-contribution-skills.
const skillEntries = [
  {
    "id": "tailrocks-contribute-prepare",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-contribute-propose",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-contribute-recon",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-contribute-respond",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-contribute-submit",
    "explicitOnly": true
  }
]

export default async function (amp) {
  for (const { id, explicitOnly } of skillEntries) {
    await amp.registerSkill({ path: `skills/${id}`, listed: !explicitOnly })
  }
}
