# Skill 03 — Excalidraw + Mermaid Production

## Purpose

Generate diagrams that can be refined in Excalidraw, Mermaid Live Editor, Obsidian, GitHub Markdown, or presentation tools.

## Strategy

Use Mermaid as the source-of-truth because it is text-based, versionable, and easy for coding agents to modify. Then provide an Excalidraw composition guide for a hand-drawn/polished version.

## Mermaid style rules

- Use `flowchart LR` for horizontal educational flows.
- Use `flowchart TD` for stacked architectures.
- Use clear node IDs, e.g. `User`, `AI`, `Data`.
- Keep node text short.
- Avoid complex subgraphs unless architecture needs layers.
- No more than 9 nodes per diagram.

## Excalidraw style rules

- Use large boxes.
- Use generous spacing.
- Use icons only if they clarify.
- Use one highlight color for risk or emphasis.
- Use semáforo colors only for risk diagrams.
- Maintain a consistent visual grammar across all diagrams.

## Deliverables per diagram

1. Mermaid code.
2. Export suggestion: SVG or PNG.
3. Excalidraw layout instructions.
4. Speaker note.
5. Accessibility note.

## Key diagrams to generate

- Cadena de valor de una Comisaría.
- IA generativa explained.
- Mito vs realidad.
- Chatbot vs copiloto.
- Del usuario al constructor.
- Qué es un agente.
- Cómo mejorar un agente.
- Agente de actas.
- Agente de términos.
- Sistemas internos y conectores.
- MCP.
- Semáforo de datos sensibles.
- Prompting jurídico seguro.
- Hoja de ruta institucional.
