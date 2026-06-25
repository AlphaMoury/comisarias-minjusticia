# Presentación: IA para Comisarías de Familia
## del uso informal al copiloto institucional seguro

---

<!-- slide_number: 1 -->
# 1. Portada: IA para Comisarías de Familia
**Del uso informal al copiloto institucional seguro**

- **Mensaje Principal:** La Inteligencia Artificial es una herramienta de apoyo documental y administrativo que fortalece la labor de las comisarías bajo supervisión humana, sin reemplazar el juicio legal o psicosocial.
- **Texto Visible:**
  - Taller práctico para equipos de Comisarías de Familia.
  - El funcionario competente siempre tiene la última palabra.
  - Transición del uso libre al entorno institucional seguro.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    A[Caso entra] --> B[Radicación]
    B --> C[Verificación]
    C --> D[Audiencia]
    D --> E[Acta]
    E --> F[Medida]
    F --> G[Seguimiento]
  ```
- **Tiempo Estimado:** 1 minuto.
- **Interacción / Actividad:** Bienvenida general y presentación de los relatores.
- **Notas del Presentador:** Iniciar reconociendo el inmenso volumen de trabajo de los despachos y plantear la IA como un copiloto para aliviar la carga mecánica, no para tomar decisiones.

---

<!-- slide_number: 2 -->
# 2. La realidad actual en los despachos
**La IA ya está aquí, pero sin gobernanza**

- **Mensaje Principal:** Los funcionarios ya usan herramientas de IA de forma informal para agilizar tareas, pero sin lineamientos de seguridad.
- **Texto Visible:**
  - Copiar y pegar datos en herramientas web gratuitas expone información reservada.
  - La necesidad diaria de resolver rápido supera el control institucional.
  - El reto no es prohibir, sino gobernar el uso de la tecnología.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    U[Usuario / Funcionario] -->|Uso Informal| AI[ChatGPT Público / Consumo]
    AI -->|Riesgo| F[Fuga de datos sensibles]
  ```
- **Tiempo Estimado:** 4 minutos.
- **Interacción / Actividad:** Pregunta a mano alzada: ¿Quién ha copiado un fragmento de texto a una IA para corregir ortografía o resumir?
- **Notas del Presentador:** Validar el uso de la IA; no regañar, sino sensibilizar. Mostrar empatía con la necesidad de resolver con agilidad pero advirtiendo los riesgos de privacidad.

---

<!-- slide_number: 3 -->
# 3. La cadena de valor comisaril
**¿Dónde aporta valor real la tecnología?**

- **Mensaje Principal:** La IA puede optimizar la gestión documental en cada eslabón, desde la radicación hasta el seguimiento, sin sustituir la toma de decisiones.
- **Texto Visible:**
  - *Radicación:* Clasificación automática de casos urgentes.
  - *Audiencia y Acta:* Transcripción y estructuración de borradores.
  - *Seguimiento:* Control inteligente de términos procesales.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    A[Caso entra] --> B[Radicación]
    B --> C[Verificación]
    C --> D[Audiencia]
    D --> E[Acta]
    E --> F[Medida]
    F --> G[Seguimiento]
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Pedir a un comisario que identifique cuál de estos pasos (radicación, actas, términos) le quita más tiempo operativo al día.
- **Notas del Presentador:** Mapear el flujo del proceso. Resaltar que el rol de la IA es estrictamente de soporte administrativo y que el comisario interviene como validador al final de cada paso.

---

<!-- slide_number: 4 -->
# 4. Los dolores diarios del despacho
**El cuello de botella no es solo decidir, es procesar**

- **Mensaje Principal:** El desgaste administrativo (redacción de autos, transcripción de audios, control de términos) frena la atención sustancial de las familias.
- **Texto Visible:**
  - Formatos fragmentados y falta de sistemas de información unificados (interoperabilidad).
  - Coexistencia del expediente digital y carpetas físicas.
  - Audiencias virtuales con transcripciones deficientes o manuales.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    D1[Formatos fragmentados] --> P[Cuello de Botella Operativo]
    D2[Transcripción manual de audio] --> P
    D3[Seguimiento de términos] --> P
    P --> F[Retraso en atención sustancial]
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Discusión breve sobre el tiempo que tardan los secretarios en transcribir un fragmento de audiencia de 10 minutos.
- **Notas del Presentador:** Conectar el dolor operativo con la justificación del uso de la tecnología. Si no ordenamos la casa, la IA solo acelerará el desorden.

---

<!-- slide_number: 5 -->
# 5. La puerta informal y sus riesgos
**El costo oculto de las herramientas gratuitas**

- **Mensaje Principal:** Las cuentas de consumo gratuitas (como ChatGPT básico) usan los datos de entrada para entrenar sus modelos públicos, violando la Ley 1581.
- **Texto Visible:**
  - Fuga de datos sensibles (nombres de menores, relatos de violencia, direcciones).
  - Incumplimiento de la cadena de custodia y reserva del expediente electrónico.
  - Responsabilidad disciplinaria por tratamiento indebido de datos de menores.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    U[Funcionario] -->|Sube expediente real| IA[IA Gratuita Pública]
    IA -->|Entrenamiento público| O[Datos expuestos en la web]
  ```
- **Tiempo Estimado:** 4 minutos.
- **Interacción / Actividad:** Mostrar un ejemplo visual tachado de un dato real de un menor cargado en un chat abierto.
- **Notas del Presentador:** Enfatizar la Ley 1581 de 2012 y la Ley General de Archivos (594/2000). Explicar que el uso "gratuito" se paga con los datos sensibles de los usuarios.

---

<!-- slide_number: 6 -->
# 6. ¿Qué es la IA generativa en realidad?
**Explicación fácil para no técnicos**

- **Mensaje Principal:** La IA generativa es un motor de predicción lingüística que genera borradores a partir de una instrucción (prompt) y un contexto permitido.
- **Texto Visible:**
  - No tiene conciencia ni razona como un humano; predice la siguiente palabra.
  - La calidad del borrador depende 100% de la claridad de las instrucciones.
  - Requiere obligatoriamente un humano que revise, corrija y valide la salida.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    P[Instrucción / Prompt] --> M[Modelo de IA]
    C[Contexto permitido] --> M
    R[Reglas institucionales] --> M
    M --> O[Borrador sugerido]
    O --> H[Revisión humana obligatoria]
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Explicar el autocompletado del teléfono celular como una analogía simplificada de cómo funciona un modelo de lenguaje grande (LLM).
- **Notas del Presentador:** Desmitificar la IA. Quitar el miedo de que la máquina "piensa" y centrar el concepto en que es una calculadora de palabras muy avanzada que comete errores (alucinaciones).

---

<!-- slide_number: 7 -->
# 7. Qué NO hace la IA
**Desmintiendo la intrusión mágica**

- **Mensaje Principal:** Los modelos de IA no tienen ojos ni acceso automático a expedientes, SIM o SICOFA a menos que se les integre explícitamente mediante conectores seguros.
- **Texto Visible:**
  - No puede "buscar" en los expedientes físicos de tu comisaría.
  - No puede acceder por sí sola a las bases de datos de la Fiscalía o el ICBF.
  - Si nadie la conecta de forma segura, opera en el vacío.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    subgraph Mito["Mito (Inseguro)"]
      A1[IA pública] -.-x B1["Sistemas internos (Acceso libre sin control)"]
    end
    subgraph Realidad["Realidad (Seguro)"]
      A2[IA institucional] --> C2[Capa de permisos]
      C2 --> D2[Conector autorizado]
      D2 --> B2["Sistemas internos (Auditable)"]
    end
  ```
- **Tiempo Estimado:** 4 minutos.
- **Interacción / Actividad:** Mostrar el icono de una llave y un candado cerrado para representar el blindaje de los sistemas internos.
- **Notas del Presentador:** Calmar el temor de que la IA se roba los expedientes de las carpetas privadas de Teams o Drive del despacho por sí sola. El acceso requiere una conexión técnica autorizada.

---

<!-- slide_number: 8 -->
# 8. Mitos y realidades de la IA en la justicia
**Líneas rojas de la Sentencia T-323 de 2024**

- **Mensaje Principal:** La Corte Constitucional permite el uso de la IA para apoyo de gestión y resúmenes, pero prohíbe delegar el razonamiento legal y la valoración probatoria.
- **Texto Visible:**
  - *Mito:* "La IA dictará las medidas de protección y sentencias".
  - *Realidad:* "La IA apoya en estructurar plantillas y redactar borradores".
  - *Línea Roja:* El funcionario debe valorar las pruebas y decidir autónomamente.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    T[Sentencia T-323 de 2024] --> S1[SÍ: Apoyo documental, resúmenes, actas]
    T --> N1[NO: Sustituir valoración probatoria y decisión final]
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Preguntar al público: Si una IA redacta un auto perfecto pero cita una ley de 1990 derogada, ¿quién responde disciplinariamente? (El Comisario).
- **Notas del Presentador:** Detallar que la Sentencia T-323/24 no prohíbe la IA, sino la sustitución del operador jurídico. El control humano y la transparencia son obligatorios.

---

<!-- slide_number: 9 -->
# 9. Chatbot genérico vs. Copiloto institucional
**La diferencia entre jugar y trabajar en serio**

- **Mensaje Principal:** Un chatbot de consumo es abierto y público; un copiloto institucional es un entorno cerrado que trabaja con las plantillas y normas oficiales de la entidad.
- **Texto Visible:**
  - *Chatbot:* No tiene memoria autorizada; usa datos públicos de internet; no es auditable.
  - *Copiloto:* Accede a tus formatos oficiales; protege la reserva de datos; registra logs de auditoría.
  - La directriz MinTIC de 2026 exige entornos seguros y gobernanza contractual.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    subgraph Chatbot["Chatbot genérico (Consumo)"]
      U1[Usuario] --> AI1[Chatbot público]
      AI1 --> R1[Respuesta sin contexto local]
    end
    subgraph Copiloto["Copiloto institucional"]
      U2[Usuario] --> AI2[Copiloto seguro]
      D[Documentos autorizados] --> AI2
      N[Normas y formatos] --> AI2
      S[Sistemas integrados] --> AI2
      AI2 --> R2[Respuesta de alta confianza]
    end
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Mostrar en pantalla una ventana de ChatGPT genérico versus una simulación de un portal institucional protegido.
- **Notas del Presentador:** Explicar el concepto de entorno corporativo (tenant institucional). La IA útil en la justicia no se ejecuta en cuentas personales gratuitas.

---

<!-- slide_number: 10 -->
# 10. Del usuario al constructor (No-Code)
**El futuro de la innovación en las comisarías**

- **Mensaje Principal:** Los funcionarios públicos pasarán de consumir software rígido de terceros a configurar sus propios asistentes (Gems/GPTs) usando lenguaje natural.
- **Texto Visible:**
  - Ya no es necesario saber programar para crear una miniapp o flujo de trabajo.
  - La habilidad clave es saber traducir el conocimiento institucional en reglas para la IA.
  - Cada comisaría podrá configurar copilotos adaptados a sus formatos locales.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    A[Antes: Usuario pasivo] --> B[Sistemas rígidos de terceros]
    C[Ahora: Conversar con IA] --> D[Borradores y resúmenes rápidos]
    E[Pronto: Constructor no-code] --> F[Configurar Gems y flujos propios]
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Breve explicación de cómo se configura un "Gem" o "GPT" escribiendo instrucciones sencillas tipo "Actúa como...".
- **Notas del Presentador:** Introducir la idea de empoderamiento tecnológico. El funcionario tiene la experiencia jurídica; ahora solo debe aprender a estructurarla en instrucciones para la IA.

---

<!-- slide_number: 11 -->
# 11. ¿Qué es un agente de IA en la práctica?
**La anatomía del copiloto estructurado**

- **Mensaje Principal:** Un agente es una IA configurada con un Rol específico, Reglas de cumplimiento, Herramientas de búsqueda y Memoria autorizada.
- **Texto Visible:**
  - *Rol:* La identidad asignada (ej: Asistente de actas).
  - *Reglas:* Salvaguardas y prohibiciones estrictas (ej: No alucinar normas).
  - *Herramientas:* Conectores para consultar normogramas o calendarios.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    Agente[Agente de IA] --- Modelo[Modelo de Lenguaje]
    Agente --- Rol[Rol asignado]
    Agente --- Reglas[Reglas y límites]
    Agente --- Herramientas[Herramientas conectadas]
    Agente --- Memoria[Memoria / Conocimiento local]
    Agente --- Evaluacion[Criterios de evaluación]
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Pedir a la audiencia que defina el "Rol" y las "Reglas" que le darían a una IA encargada de ayudar a redactar oficios de remisión.
- **Notas del Presentador:** Desglosar la fórmula: Agente = Modelo + Rol + Reglas + Herramientas + Memoria + Evaluación. Demostrar que los agentes no operan en el vacío.

---

<!-- slide_number: 12 -->
# 12. Cómo mejorar un agente sin programar
**El poder de los Skills y las Rules**

- **Mensaje Principal:** El comportamiento de un Gem o agente se pule refinando sus instrucciones (skills) y sus restricciones (rules), no cambiando el modelo de lenguaje de base.
- **Texto Visible:**
  - *Skills:* Guías paso a paso que describen el procedimiento correcto de la tarea.
  - *Rules:* Normas ético-legales y límites del debido proceso.
  - *Memoria:* Bases de datos de normativas colombianas vigentes y formatos autorizados.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    subgraph Agente_Refinamiento["Capas de mejora de un Agente (Gems)"]
      direction TB
      A[Modelo Base] --> B["+ Rol específico (Asistente...)"]
      B --> C["+ Reglas y límites (No alucinar...)"]
      C --> D["+ Skills / Pasos (Instrucciones de tarea)"]
      D --> E["+ Memoria (Documentos autorizados)"]
      E --> F["+ Evaluación (Revisión humana obligatoria)"]
    end
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Mostrar un ejemplo sencillo de cómo una "Regla" (ej: "No cites leyes derogadas") cambia radicalmente la calidad de la respuesta de un agente.
- **Notas del Presentador:** Enlazamos con los archivos `.skill.md` que guían el comportamiento de este proyecto, demostrando que la IA sigue procesos de ingeniería de instrucciones sencillos pero estrictos.

---

<!-- slide_number: 13 -->
# 13. El agente de actas de audiencia
**De audio desordenado a documento estructurado**

- **Mensaje Principal:** Un agente de actas procesa la transcripción de texto de una audiencia ficticia para generar un borrador formal, reduciendo el tiempo de digitación.
- **Texto Visible:**
  - Entrada: Transcripción textual informal de la audiencia.
  - Proceso: El agente extrae asistentes, acuerdos y compromisos de fechas.
  - Salida: Borrador listo para revisión y firmas de las partes y el comisario.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    A[Audio de audiencia] --> B[Transcripción texto]
    B --> C[Agente de actas]
    C --> D[Borrador estructurado]
    D --> E[Revisión del funcionario]
    E --> F[Acta firmada]
  ```
- **Tiempo Estimado:** 4 minutos.
- **Interacción / Actividad:** Mostrar en pantalla cómo un texto conversacional caótico se convierte en una tabla estructurada de compromisos y plazos.
- **Notas del Presentador:** Explicar el flujo. Resaltar la importancia del control de calidad humano: el agente solo propone la estructura, el funcionario valida el contenido jurídico.

---

<!-- slide_number: 14 -->
# 14. El agente de términos procesales
**Semaforización inteligente para prevención de vencimientos**

- **Mensaje Principal:** La IA puede actuar como un monitor de plazos procesales (Ley 2126) alertando mediante colores el estado de los casos para priorizar el despacho.
- **Texto Visible:**
  - Lectura automática de fechas de radicación y tipo de solicitud.
  - Clasificación de alertas: Verde (a tiempo), Amarillo (vence pronto) y Rojo (crítico).
  - Evita vencimientos de términos procesales y promueve la justicia oportuna.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    A[Fecha de radicación] --> D[Agente de términos]
    B[Tipo de proceso] --> D
    C[Normativa / Plazos] --> D
    D --> E[Cálculo de vencimiento]
    E --> F[Alerta de Semáforo]
    F --> G1["Verde: A tiempo"]
    F --> G2["Amarillo: Vence pronto"]
    F --> G3["Rojo: Crítico / Vencido"]
  ```
- **Tiempo Estimado:** 4 minutos.
- **Interacción / Actividad:** Mostrar la tabla de semaforización procesal e identificar qué caso requiere atención inmediata del comisario.
- **Notas del Presentador:** Enlazar con la obligación de control y seguimiento de las medidas de protección. El semáforo es una herramienta de priorización, no de decisión automática.

---

<!-- slide_number: 15 -->
# 15. Sistemas internos y conectores seguros
**La arquitectura para datos reales**

- **Mensaje Principal:** Para trabajar de forma segura con expedientes de casos reales se requiere una intranet institucional con permisos por roles y registro de auditoría.
- **Texto Visible:**
  - El funcionario se conecta solo mediante su usuario institucional con permisos controlados.
  - Los datos nunca se envían al internet abierto para entrenar modelos externos.
  - Registro de logs (trazabilidad): Quién, cuándo y para qué consultó el sistema.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    Funcionario --> Portal[Portal interno de IA]
    Portal --> Permisos[Capa de permisos y roles]
    Permisos --> Agente[Agentes especializados]
    Agente --> Conector[Conectores seguros]
    Conector --> Datos[Expedientes / Formatos / Normograma]
    Datos --> Auditoria[Registro de auditoría y logs]
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Mostrar la analogía de la caja fuerte: la IA institucional opera dentro de la caja fuerte del Estado, no afuera.
- **Notas del Presentador:** Explicar que la seguridad institucional permite la tranquilidad jurídica de los despachos. Introducir las políticas de seguridad de la Fiscalía (ARKIVA / Resolución 0-0077) como ejemplos.

---

<!-- slide_number: 16 -->
# 16. MCP: Conectando la IA con las herramientas
**El protocolo como puente estándar de información**

- **Mensaje Principal:** Model Context Protocol (MCP) es el estándar técnico que permite a la IA interactuar de forma segura con bases de datos, calendarios y formatos.
- **Texto Visible:**
  - Evita crear conectores personalizados complejos para cada sistema.
  - Centraliza el acceso seguro bajo las reglas de la entidad.
  - Permite a la IA consultar expedientes y minutas oficiales sin romper la seguridad.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    subgraph Sin_MCP["Sin estándar MCP"]
      IA1[IA] --> C1[Conector A] --> S1[Expedientes]
      IA1 --> C2[Conector B] --> S2[Calendario]
      IA1 --> C3[Conector C] --> S3[Normas]
    end
    subgraph Con_MCP["Con estándar MCP (Puente)"]
      IA2[IA] --> MCP[Protocolo MCP]
      MCP --> S1_2[Expedientes]
      MCP --> S2_2[Calendario]
      MCP --> S3_2[Normas]
    end
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Utilizar la analogía de un enchufe universal (MCP) frente a cargadores diferentes para cada teléfono.
- **Notas del Presentador:** Explicar el MCP de manera sencilla. Es el estándar que hace posible que el copiloto de la comisaría consulte el calendario de audiencias o cargue una plantilla de auto sin hacks inseguros.

---

<!-- slide_number: 17 -->
# 17. Clasificación de datos en Comisarías
**Ley 1581 y el tratamiento de información sensible**

- **Mensaje Principal:** Los datos procesados en comisarías tienen diferentes niveles de restricción legal; identificar su nivel define qué herramienta de IA usar.
- **Texto Visible:**
  - *Pública:* Leyes, normativas y formatos modelo vacíos (Uso libre).
  - *Interna:* Documentos de gestión sin nombres reales (Uso con cautela).
  - *Sensible / Reservada:* Datos de menores, víctimas, direcciones y relatos de violencia (PROHIBIDO en IA públicas).
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    A[Datos de Comisaría] --> S{Clasificación de seguridad}
    S -->|Verde: Público| B[Leyes, jurisprudencia y plantillas vacías]
    S -->|Amarillo: Interno| C[Documentos de gestión sin identificar personas]
    S -->|Rojo: Sensible| D[Nombres, cédulas, direcciones, niños, violencia]
    
    B --> B2[Permitido en IA externas]
    C --> C2[Permitido con seudonimización estricta]
    D --> D2["PROHIBIDO en IA externas. Solo local seguro"]
  ```
- **Tiempo Estimado:** 5 minutos.
- **Interacción / Actividad:** Ejercicio rápido: Presentar 3 tipos de textos e interrogar si pertenecen al carril Verde, Amarillo o Rojo.
- **Notas del Presentador:** Fundamentar con la Ley 1581 de 2012. Insistir en la prohibición absoluta de subir datos del carril Rojo a ChatGPT público o herramientas web gratuitas de internet.

---

<!-- slide_number: 18 -->
# 18. Qué NO subir a la nube pública
**La Lista Roja de Seguridad**

- **Mensaje Principal:** Ciertos datos representan una línea roja absoluta que jamás debe ser compartida en entornos tecnológicos no institucionales.
- **Texto Visible:**
  - Nombres reales, cédulas, teléfonos y correos electrónicos de las partes.
  - Direcciones exactas de residencias, lugares de trabajo o colegios.
  - Grabaciones de audio reales de audiencias o testimonios de víctimas y menores.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    R[Lista Roja - PROHIBIDO SUBIR] --> D1[Nombres y Cédulas Reales]
    R --> D2[Direcciones de Hogar o Colegio]
    R --> D3[Audios y Videos de Audiencias Reales]
  ```
- **Tiempo Estimado:** 4 minutos.
- **Interacción / Actividad:** Mostrar visualmente un sello de "PROHIBIDO" sobre un bloque simulado de datos sensibles.
- **Notas del Presentador:** Recordar las implicaciones disciplinarias y penales de violar la reserva de las actuaciones de Comisarías de Familia. La IA es una ayuda, no una excusa para violar el debido proceso y la confidencialidad.

---

<!-- slide_number: 19 -->
# 19. La anatomía del prompt jurídico seguro
**Cómo escribir instrucciones sin riesgos**

- **Mensaje Principal:** Un prompt seguro para el sector justicia debe especificar el rol, la tarea exacta, los límites procesales, el formato de salida y el control humano.
- **Texto Visible:**
  - *Rol:* "Actúa como asistente de apoyo documental..."
  - *Límites:* "No inventes hechos, limítate a las fuentes suministradas..."
  - *Formato:* "Escribe las variables entre corchetes..."
  - *Verificación:* Incluir siempre la advertencia de revisión humana.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    P[Prompt Seguro] --> R["Rol: Asistente documental"]
    P --> T["Tarea: Elaborar borrador de auto"]
    P --> C["Contexto: Ley 2126 y hechos del caso"]
    P --> L["Límites: No inventar hechos ni normas"]
    P --> F["Formato: Texto estructurado con corchetes"]
    P --> V["Verificación: Check de revisión humana"]
  ```
- **Tiempo Estimado:** 6 minutos.
- **Interacción / Actividad:** Presentar la fórmula: Rol + Tarea + Contexto + Límites + Formato + Verificación en pantalla como una guía de referencia rápida.
- **Notas del Presentador:** Explicar que un buen prompt funciona como un memorando de instrucciones preciso para un pasante jurídico: debe ser claro, delimitado y con advertencias claras.

---

<!-- slide_number: 20 -->
# 20. Demo 1: Anonimización de un caso ficticio
**Aprender a limpiar los datos antes de procesar**

- **Mensaje Principal:** Demostración práctica de cómo reescribir un relato de violencia intrafamiliar simulado reemplazando datos sensibles por variables generales.
- **Texto Visible:**
  - Insumo: Relato ficticio con nombres, cédula inventada y dirección del Quiroga.
  - Acción: Uso del prompt de anonimización estructurado.
  - Resultado: Texto estructurado libre de identificadores procesable de forma segura.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    A[Relato Original Ficticio] --> P[Prompt de Anonimización]
    P --> B["Relato Limpio (ej: VÍCTIMA 1)"]
  ```
- **Tiempo Estimado:** 6 minutos.
- **Interacción / Actividad:** Ejecución de la Demo 1 en vivo en pantalla. Mostrar la velocidad con la que se eliminan los identificadores manteniendo los hechos jurídicos intactos.
- **Notas del Presentador:** Resaltar que una vez anonimizado el texto, sí se puede subir de forma segura a un modelo público para corrección gramatical o resúmenes preliminares.

---

<!-- slide_number: 21 -->
# 21. Demo 2: Transcripción de audiencia a acta
**Generación de borradores eficientes bajo control humano**

- **Mensaje Principal:** Demostración de cómo convertir el diálogo informal de una audiencia de conciliación ficticia en un borrador estructurado de acta.
- **Texto Visible:**
  - Insumo: Diálogo conversacional desordenado sobre visitas y alimentos.
  - Proceso: Extracción estructurada de compromisos y plazos financieros.
  - Resultado: Acta de conciliación preliminar con la cláusula obligatoria de revisión.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    T[Transcripción sucia de audio] --> P[Procesamiento por Agente]
    P --> B["Borrador de Acta + Disclaimer Legal"]
  ```
- **Tiempo Estimado:** 7 minutos.
- **Interacción / Actividad:** Ejecución de la Demo 2 en vivo. Mostrar la inclusión explícita del disclaimer: "Borrador sujeto a revisión del funcionario competente."
- **Notas del Presentador:** Destacar el ahorro de tiempo para el secretario o comisario. En lugar de redactar desde cero, el funcionario se convierte en un revisor y editor, ganando minutos valiosos para la atención de las familias.

---

<!-- slide_number: 22 -->
# 22. Demo 3: Semaforización de plazos procesales
**Control de términos sin delegar decisiones**

- **Mensaje Principal:** Demostración de cómo la IA organiza las solicitudes del despacho calculando plazos de la Ley 2126 y clasificando la prioridad del día.
- **Tiempo Estimado:** 6 minutos.
- **Texto Visible:**
  - Entrada: 4 radicaciones ficticias con tipos de trámite y fechas variadas.
  - Acción: Cálculo matemático de plazos y días restantes para audiencias y autos.
  - Salida: Matriz de priorización visual ordenada por estados de color.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    C[Casos Ficticios] --> P[Cálculo de Términos]
    P --> T["Tabla de Semáforos (Rojo/Amarillo/Verde)"]
  ```
- **Interacción / Actividad:** Ejecución de la Demo 3 en vivo. Pedir al público que indique cuál de los casos de la tabla se vencería primero según los términos legales colombianos.
- **Notas del Presentador:** Aclarar que la IA no decide archivar o abrir; simplemente avisa al equipo de trabajo qué expediente requiere atención inmediata para evitar vencimientos de términos procesales.

---

<!-- slide_number: 23 -->
# 23. Demo 4: El prompt jurídico seguro en acción
**Comparación de calidad: Mal prompt vs. Prompt seguro**

- **Mensaje Principal:** Un prompt deficiente genera alucinaciones y usurpa decisiones; un prompt seguro asiste en la redacción de autos de forma controlada y rigurosa.
- **Texto Visible:**
  - *Mal Prompt:* "Hazme un auto rápido" -> Produce alucinaciones de hechos, normas obsoletas y asume el rol del juez.
  - *Prompt Seguro:* Delimita fuentes, prohíbe inventar datos, exige corchetes para rellenar y nota de revisión.
  - La transparencia exige detallar qué prompts y herramientas se utilizaron (Acuerdo PCSJA24-12243).
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    A[Mal Prompt] --> B1[Alucinación de leyes y decisiones delegadas]
    C[Buen Prompt] --> B2[Auto estructurado con variables y advertencias]
  ```
- **Tiempo Estimado:** 6 minutos.
- **Interacción / Actividad:** Ejecución de la Demo 4 en vivo en pantalla. Comparar ambos resultados y analizar cuál cumple con los lineamientos de la Sentencia T-323 de 2024.
- **Notas del Presentador:** Recordar el Acuerdo del Consejo Superior de la Judicatura: reportar los prompts no es un opcional, es un estándar de transparencia judicial en el uso de IA.

---

<!-- slide_number: 24 -->
# 24. Madurez institucional en Comisarías
**El camino hacia la adopción gradual y segura**

- **Mensaje Principal:** La transformación digital segura se divide en 5 niveles de madurez, desde el uso individual regulado hasta la interoperabilidad nacional.
- **Texto Visible:**
  - *Nivel 1 (30 días):* Prompts personales seguros y guías internas del despacho.
  - *Nivel 2 (90 días):* Biblioteca de prompts aprobados y formatos estandarizados.
  - *Nivel 3 (180 días):* Copilotos internos cerrados sobre normativas públicas.
- **Diagrama Sugerido:**
  ```mermaid
  flowchart LR
    N1[Nivel 1: Uso individual con cuidado] --> N2[Nivel 2: Prompts institucionales]
    N2 --> N3[Nivel 3: Copilotos internos]
    N3 --> N4[Nivel 4: Agentes conectados]
    N4 --> N5[Nivel 5: Sistema nacional interoperable]
  ```
- **Tiempo Estimado:** 7 minutos.
- **Interacción / Actividad:** Preguntar a los asistentes: ¿En qué nivel de madurez tecnológica consideran que se encuentra su comisaría hoy?
- **Notas del Presentador:** Explicar que la adopción no es de la noche a la mañana. No podemos saltar al Nivel 5 (Interoperabilidad nacional) si no hemos resuelto el Nivel 1 (prompts seguros y no subir datos sensibles a herramientas públicas gratuitas).

---

<!-- slide_number: 25 -->
# 25. Cierre: Compromisos del Taller
**El funcionario competente siempre lidera el despacho**

- **Mensaje Principal:** La combinación ideal es: IA responsable + Gestión documental + Criterios jurídicos claros + Seguridad de datos + Prompts auditables.
- **Texto Visible:**
  - La IA produce borradores editables; la legitimidad jurídica y psicosocial es del humano.
  - No se empieza por una plataforma perfecta; se empieza por ordenar tareas y riesgos.
  - Formación continua en herramientas públicas (cursos MinTIC y Escuela Judicial).
- **Diagrama Sugerido:**
  ```mermaid
  flowchart TD
    I[IA Responsable] --> C[Éxito del Despacho]
    G[Gestión Documental] --> C
    S[Seguridad de Datos] --> C
    C --> H[El Comisario tiene la última palabra]
  ```
- **Tiempo Estimado:** 3 minutos.
- **Interacción / Actividad:** Entrega de la hoja de ruta física de 30-90-180 días para que cada comisaría comience su autoevaluación. Espacio de preguntas finales.
- **Notas del Presentador:** Terminar con un mensaje de confianza: la IA no reemplazará al comisario; pero el comisario que sabe usar la IA de forma segura reemplazará al que no. Agradecimientos oficiales.
