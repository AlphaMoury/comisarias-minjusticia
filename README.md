# Agent Pack — IA para Comisarías de Familia

Este paquete está diseñado para que Codex, Antigravity, Claude Code, Cursor u otro agente de desarrollo construya una presentación visual del taller:

**“IA para Comisarías de Familia: del uso informal al copiloto institucional seguro”**

## Dónde colocar los archivos

Coloca todo este paquete en la raíz del proyecto donde vas a construir las diapositivas.

Estructura recomendada:

```text
mi-presentacion-comisarias/
  AGENTS.md
  CLAUDE.md                         # opcional, si usas Claude Code
  GEMINI.md                         # opcional, si usas Gemini CLI/Antigravity-like workflows
  docs/
    ai-context/
      brief_codex_ia_comisarias.md
    ai-skills/
      01-slide-architect.skill.md
      02-diagram-designer.skill.md
      03-excalidraw-mermaid.skill.md
      04-demo-builder.skill.md
      05-accessibility-reviewer.skill.md
      06-diagram-qa.skill.md
  workflows/
    build-deck.workflow.md
    refine-diagrams.workflow.md
  prompts/
    codex-main-prompt.md
    antigravity-workspace-prompt.md
  examples/
    key-diagrams.mmd
```

## Cómo usarlo

1. Abre la carpeta en Antigravity, VS Code, Cursor o Codex.
2. Pide al agente: `Lee AGENTS.md y ejecuta workflows/build-deck.workflow.md`.
3. Haz que primero genere un plan y una lista de artefactos.
4. Luego permite que cree el deck en Markdown/HTML/MDX/PPTX según el stack que quieras.
5. Revisa manualmente todos los textos jurídicos y advertencias sobre datos sensibles.

## Regla importante

No uses datos reales de expedientes, menores, víctimas, audios, direcciones, documentos de identidad ni historias familiares. Todo ejemplo debe ser ficticio o anonimizado.
