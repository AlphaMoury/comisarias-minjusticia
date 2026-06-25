# Reporte de Control de Calidad (QA) y Cumplimiento Normativo

Este reporte documenta la evaluación de calidad de la presentación y los artefactos del taller **“IA para Comisarías de Familia: del uso informal al copiloto institucional seguro”**. Se valida el cumplimiento estricto de las directrices de accesibilidad, seguridad y rigor jurídico colombiano.

---

## 1. Validación de Seguridad y Privacidad (Datos Sensibles)
* **Criterio de Evaluación:** Cero exposición de información sensible o real.
* **Estado:** **APROBADO** 🟢

| Elemento Auditado | Método de Validación | Resultado | Observaciones |
| :--- | :--- | :---: | :--- |
| **Identidades Reales** | Búsqueda de nombres, C.C. o expedientes reales colombianos. | **Limpio** | Todos los nombres en las demos y ejemplos (Claudia Gómez, Jorge Rojas, Mateo, Carlos, Patricia, Sofía) son inventados. |
| **Identificadores de Contacto** | Verificación de correos, teléfonos o direcciones. | **Limpio** | Se utilizan teléfonos simulados (311 999 8877) y direcciones genéricas de ejemplo. |
| **Datos de Menores** | Protección reforzada para niños, niñas y adolescentes. | **Limpio** | La mención del menor ficticio en la Demo 1 y Demo 2 está completamente anonimizada o restringida a marcadores. |
| **Reserva Sumarial** | Garantía de no subir expedientes reales a nubes públicas. | **Limpio** | Las instrucciones de prompting prohíben explícitamente cargar información confidencial del despacho. |

---

## 2. Validación de Rigor Jurídico y Normativo
* **Criterio de Evaluación:** Cero invenciones de leyes o términos; fidelidad a la jurisprudencia colombiana.
* **Estado:** **APROBADO** 🟢

| Ley / Jurisprudencia | Referencia Verificada en el Material | Estado | Cumplimiento |
| :--- | :--- | :---: | :--- |
| **Sentencia T-323 de 2024** | Uso de la IA limitado a soporte administrativo, documental y síntesis; prohibición de delegación decisoria. | **Fiel** 🟢 | Se destaca la línea roja del razonamiento humano y la valoración de pruebas por el operador. |
| **Ley 2126 de 2021** | Disponibilidad permanente virtual/presencial; priorización de TIC sin afirmar que toda audiencia deba ser virtual. | **Fiel** 🟢 | Se aclara con precisión que la ley exige disponibilidad 24/7 y priorización de TIC, evitando afirmaciones centralistas. |
| **Acuerdo PCSJA24-12243** | Obligación de revelar herramienta, proveedor, fecha, finalidad y prompts en el uso judicial de la IA. | **Fiel** 🟢 | Incorporado en la fundamentación de las demos de prompting y el registro de auditoría. |
| **Leyes 1581 / 594 / 1712** | Clasificación legal de datos, reserva archivística y debido proceso. | **Fiel** 🟢 | Vinculado directamente al semáforo de seguridad de datos y la prohibición en nubes de consumo. |

---

## 3. Validación de Accesibilidad y Pedagogía (Carga Cognitiva)
* **Criterio de Evaluación:** Máximo 3 viñetas por diapositiva; máximo 9 nodos por diagrama; lenguaje sencillo.
* **Estado:** **APROBADO** 🟢

- **Estructura del Deck:** Las 25 diapositivas contienen un solo concepto central cada una. El texto visible está estrictamente limitado a un máximo de 3 bullets cortos para evitar la fatiga visual de la audiencia.
- **Rigor de los Diagramas:**
  - Los diagramas en formato Mermaid y Excalidraw respetan la regla de simplicidad (ninguno excede los 9 nodos).
  - Los flujos son predominantemente lineales (Left-to-Right) o verticales (Top-to-Bottom), evitando el cruce de líneas o enredos estructurales.
- **Tono y Lenguaje:** Se eliminaron los anglicismos y términos de jerga técnica compleja (ej. "Fine-tuning", "Zero-shot learning") reemplazándolos por conceptos sencillos y metáforas visuales (Semáforo de datos, la analogía del candado, el enchufe universal MCP).

---

## 4. Auditoría de la Cláusula de Control Humano
* **Criterio de Evaluación:** Inclusión obligatoria de la advertencia legal en todas las salidas sugeridas.
* **Estado:** **APROBADO** 🟢

Se comprobó que todos los borradores de documentos legales propuestos (Acta de la Demo 2, Auto de la Demo 4) y las instrucciones de prompting seguro incluyen explícitamente la cláusula:
> **“Borrador sujeto a revisión del funcionario competente.”**

---

## Conclusión del Reporte de QA
El material del taller cumple al 100% con los estándares institucionales requeridos para su exposición ante funcionarios del sector justicia en Colombia. Es pedagógico, visualmente balanceado, jurídicamente veraz y seguro frente al tratamiento de datos sensibles.
