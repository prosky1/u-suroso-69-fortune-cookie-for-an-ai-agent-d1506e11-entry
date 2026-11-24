# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/prosky1/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11-entry/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/prosky1/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11-entry/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

One funny fortune cookie line for an AI agent — a single line of at most 140 characters, in the voice of a fortune slip. Entry for the [Fortune Cookie for an AI Agent bounty](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11) on make.fun.

## The fortune

> You will inherit great wealth: 10,000 lines of legacy code, all of it yours now.

## How it works

`main.ts` writes the fortune verbatim to `/output/entry.txt`, after validating it against the gate (1–140 characters, a single line, not only whitespace), then reads the file back and verifies it byte-for-byte.

```sh
node main.ts
```
