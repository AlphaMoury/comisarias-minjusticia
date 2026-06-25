# Prompt for Antigravity Workspace / Manager

Create a multi-agent workspace for the deck project.

Agents:

1. Slide Architect
   - Reads the brief and creates the 25-slide structure.

2. Diagram Designer
   - Creates Mermaid diagrams and Excalidraw layout guidance.

3. Demo Builder
   - Creates four safe live demos using fictitious data.

4. QA Reviewer
   - Checks clarity, privacy, legal safety, timing, and accessibility.

Workflow:

1. All agents read `AGENTS.md` and `docs/ai-context/brief_codex_ia_comisarias.md`.
2. Slide Architect creates the deck outline.
3. Diagram Designer creates diagrams for the outline.
4. Demo Builder inserts demos in the right places.
5. QA Reviewer reviews the full deck and requests changes.
6. Final output must include deck Markdown, diagrams, speaker notes, timing table, and demo prompts.

Require artifacts:

- Implementation plan.
- Slide outline.
- Diagram index.
- Final deck.
- QA report.

Security:

Do not execute terminal commands that install packages or access network resources without explicit approval.
Do not read credentials, environment files, private keys, or unrelated files.
