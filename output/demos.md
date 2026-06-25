# Guion de Demos en Vivo (Datos Ficticios y Seguros)

Este documento contiene el guion y los insumos técnicos para las 4 demostraciones prácticas del taller. Cada demo está diseñada para durar entre 6 y 7 minutos y utiliza exclusivamente información simulada.

---

## Demo 1: Anonimización de un Caso Ficticio
* **Objetivo:** Mostrar cómo limpiar un relato fáctico de violencia intrafamiliar eliminando todos los datos que identifiquen a las personas antes de procesarlo en una IA externa.
* **Tiempo Estimado:** 6 minutos.
* **Advertencia de Seguridad:** Nunca subir el texto original a herramientas de consumo públicas. La limpieza debe hacerse de manera manual o en un entorno institucional desconectado antes de cualquier análisis.

### 1. Insumo Ficticio (Relato con datos identificables)
```text
El pasado 15 de junio de 2026, la señora Claudia Patricia Gómez Espitia, identificada con C.C. 1.020.304.506 de Bogotá, residente en la Calle 45 Sur No. 12-34 del barrio Quiroga, compareció al despacho para denunciar a su ex cónyuge, el señor Jorge Hernán Rojas Patiño, C.C. 79.800.900. La señora Claudia manifiesta que el señor Jorge la agredió verbalmente frente a su hijo menor de edad, Mateo Rojas Gómez, de 8 años de edad, quien estudia en el Colegio Distrital Marco Fidel Suárez. Los hechos ocurrieron en la residencia de la madre a las 7:30 PM. El número telefónico de contacto de la denunciante es 311 999 8877.
```

### 2. Prompt Base para Anonimización
```text
Actúa como un asistente experto en seguridad de datos y privacidad jurídica en Colombia.
Tu tarea es anonimizar por completo el siguiente relato de hechos procesales de una Comisaría de Familia.

Reglas de anonimización:
1. Reemplaza todos los nombres de personas (víctimas, agresores, menores de edad) por marcadores lógicos en mayúsculas entre corchetes (ej: [VÍCTIMA - MUJER], [AGRESOR - EX CÓNYUGE], [HIJO - MENOR 1]).
2. Reemplaza todas las identificaciones (cédulas, números de registro) por [C.C. ANÓNIMA].
3. Elimina o reemplaza direcciones exactas, números de teléfono y nombres de instituciones educativas por marcadores generales (ej: [DIRECCIÓN ANÓNIMA], [TELÉFONO ANÓNIMO], [COLEGIO PÚBLICO]).
4. Conserva intactos los hechos fácticos esenciales, fechas, horas y el sentido jurídico del relato.

Relato a anonimizar:
"El pasado 15 de junio de 2026, la señora Claudia Patricia Gómez Espitia, identificada con C.C. 1.020.304.506 de Bogotá, residente en la Calle 45 Sur No. 12-34 del barrio Quiroga, compareció al despacho para denunciar a su ex cónyuge, el señor Jorge Hernán Rojas Patiño, C.C. 79.800.900. La señora Claudia manifiesta que el señor Jorge la agredió verbalmente frente a su hijo menor de edad, Mateo Rojas Gómez, de 8 años de edad, quien estudia en el Colegio Distrital Marco Fidel Suárez. Los hechos ocurrieron en la residencia de la madre a las 7:30 PM. El número telefónico de contacto de la denunciante es 311 999 8877."
```

### 3. Resultado Esperado (Caso Limpio)
```text
El pasado 15 de junio de 2026, la señora [VÍCTIMA - MUJER 1], identificada con [C.C. ANÓNIMA 1] de Bogotá, residente en [DIRECCIÓN ANÓNIMA 1] del [BARRIO ANÓNIMO 1], compareció al despacho para denunciar a su ex cónyuge, el señor [AGRESOR - EX CÓNYUGE], identificado con [C.C. ANÓNIMA 2]. La señora [VÍCTIMA - MUJER 1] manifiesta que el señor [AGRESOR - EX CÓNYUGE] la agredió verbalmente frente a su hijo menor de edad, [HIJO - MENOR 1], de 8 años de edad, quien estudia en [COLEGIO PÚBLICO 1]. Los hechos ocurrieron en la residencia de la madre a las 7:30 PM. El número telefónico de contacto de la denunciante es [TELÉFONO ANÓNIMO 1].
```

---

## Demo 2: Transcripción de Audiencia a Acta Borrador
* **Objetivo:** Convertir el texto informal y redundante de una transcripción ficticia de audiencia en un borrador de acta estructurado y limpio.
* **Tiempo Estimado:** 7 minutos.
* **Advertencia obligatoria en la salida:** “Borrador sujeto a revisión del funcionario competente.”

### 1. Insumo Ficticio (Transcripción sucia de audio)
```text
[00:01] Comisario: Bueno, eh, siendo las diez de la mañana de hoy, 24 de junio de 2026, iniciamos esta diligencia en la Comisaría de Familia. Están presentes el señor Carlos Bermúdez y la señora Patricia Restrepo. Don Carlos, ¿usted a qué se compromete con respecto a las visitas de la niña Sofía?
[00:25] Carlos: Yo... yo quiero ver a mi hija los fines de semana. Me comprometo a recogerla el sábado a las 8 de la mañana en la casa de la mamá y traerla el domingo a las 5 de la tarde. Sin problemas, yo pago lo del transporte.
[00:48] Patricia: A mí me parece bien, comisario, pero que cumpla. Porque a veces llega tarde y la niña se queda esperando. Y que me pase los 300 mil pesos de la mensualidad los primeros 5 días de cada mes.
[01:10] Carlos: Sí, claro, yo consigno los 300 mil pesos en la cuenta de ella del Banco de Bogotá los primeros 5 días del mes. Estoy de acuerdo.
[01:25] Comisario: Perfecto, entonces queda acordada la cuota de alimentos por valor de $300.000 mensuales y el régimen de visitas de fin de semana de sábado 8:00 AM a domingo 5:00 PM. Procedemos a firmar.
```

### 2. Prompt Base para Redacción de Acta
```text
Actúa como un asistente documental experto para una Comisaría de Familia en Colombia.
Tu tarea es convertir la siguiente transcripción informal de audiencia en un borrador de Acta de Conciliación formal.

Estructura del Acta requerida:
1. Encabezado (Fecha, hora y asistentes ficticios).
2. Objeto de la diligencia.
3. Compromisos acordados (Régimen de visitas y cuota de alimentos en viñetas claras).
4. Puntos por verificar o firmar.
5. Cláusula obligatoria al final: "Borrador sujeto a revisión del funcionario competente."

Regla de oro: No resumas como hecho probado lo que solo fue una afirmación o declaración de una de las partes. No agregues hechos que no estén en la transcripción.

Transcripción:
[Copiar transcripción sucia de arriba]
```

### 3. Resultado Esperado
```text
ACTA DE CONCILIACIÓN (BORRADOR)

Fecha: 24 de junio de 2026
Hora de inicio: 10:00 AM
Lugar: Comisaría de Familia (Ficticia)
Asistentes:
- Comisario de Familia (Funcionario a cargo)
- Convocante: Patricia Restrepo
- Convocado: Carlos Bermúdez
- Con respecto a la menor: Sofía (Hija)

OBJETO DE LA DILIGENCIA:
Fijar el régimen de visitas y definir la cuota alimentaria a favor de la menor Sofía.

COMPROMISOS ACORDADOS:
- Régimen de Visitas: El señor Carlos Bermúdez se compromete a retirar a la menor Sofía de la residencia de la madre los días sábados a las 8:00 AM y restituirla los días domingos a las 5:00 PM. Los gastos de transporte serán asumidos en su totalidad por el señor Carlos Bermúdez.
- Cuota Alimentaria: El señor Carlos Bermúdez se compromete a consignar la suma de trescientos mil pesos ($300.000 COP) mensuales a favor de la menor, dentro de los primeros cinco (5) días de cada mes, en la cuenta del Banco de Bogotá de la señora Patricia Restrepo.

--------------------------------------------------
Borrador sujeto a revisión del funcionario competente.
```

---

## Demo 3: Semaforización de Plazos y Términos Procesales
* **Objetivo:** Organizar un listado de actuaciones ficticias en una tabla priorizada por urgencia según los días restantes, usando la metáfora del semáforo.
* **Tiempo Estimado:** 6 minutos.

### 1. Insumo Ficticio (Casos desordenados con fechas de radicación)
*(Asumir que la fecha actual de evaluación en el sistema es el 24 de junio de 2026)*
```text
Casos radicados en el despacho:
1. Caso A: Medida de protección provisional por violencia intrafamiliar. Radicado el 23 de junio de 2026. Término legal para citar a audiencia: 10 días hábiles.
2. Caso B: Incumplimiento de medida de protección. Radicado el 20 de mayo de 2026. Término para resolver descargo: 15 días hábiles.
3. Caso C: Solicitud de restablecimiento de derechos. Radicado el 22 de junio de 2026. Término para verificación de derechos: 10 días calendario.
4. Caso D: Medida de protección provisional. Radicado el 10 de junio de 2026. Término legal para dictar medida definitiva: 48 horas tras notificación (notificado el 23 de junio a las 2:00 PM).
```

### 2. Prompt Base para Semaforización
```text
Actúa como un asistente administrativo de gestión procesal en una Comisaría de Familia en Colombia.
Fecha de evaluación actual del despacho: 24 de junio de 2026.

Tu tarea es calcular el estado de los términos de los siguientes casos y organizarlos en una tabla priorizada.
Para cada caso debes indicar:
- Nombre ficticio del caso.
- Tipo de trámite.
- Fecha de radicación / notificación relevante.
- Días restantes o transcurridos (considerando la fecha actual 24 de junio de 2026).
- Estado de Semáforo:
  * ROJO (Crítico/Vencido o vence en menos de 24 horas).
  * AMARILLO (Advertencia/Vence en 2 a 5 días).
  * VERDE (A tiempo/Tiene más de 5 días de plazo).

Insumos de casos:
[Copiar casos de arriba]
```

### 3. Resultado Esperado
| Prioridad | Caso | Tipo de Trámite | Fecha Clave | Días Restantes | Estado del Semáforo |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **1** | Caso D | Medida Definitiva VIF | 23-Jun (Notificación) | Vence hoy 2:00 PM | 🔴 **ROJO** (Crítico - menos de 24h) |
| **2** | Caso B | Incumplimiento Medida | 20-May (Radicación) | Término Excedido | 🔴 **ROJO** (Vencido) |
| **3** | Caso C | Restablecimiento Derechos | 22-Jun (Radicación) | 8 días calendario | 🟢 **VERDE** (A tiempo) |
| **4** | Caso A | Citación Audiencia VIF | 23-Jun (Radicación) | 9 días hábiles | 🟢 **VERDE** (A tiempo) |

---

## Demo 4: Prompting Jurídico Seguro (Mal Prompt vs. Buen Prompt)
* **Objetivo:** Mostrar cómo la estructura de un prompt (con rol, límites y fuentes explícitas) previene la invención de normas y la delegación de decisiones en la IA.
* **Tiempo Estimado:** 6 minutos.

### Escenario A: El Mal Prompt (Uso Informal e Inseguro)
* **Prompt ingresado por el usuario:**
  `"Escríbeme un auto rápido para imponer una medida de protección a favor de una señora que fue agredida por su esposo ayer."`
* **Resultado deficiente obtenido (Alucinaciones):**
  La IA redacta un auto completo decretando medidas restrictivas definitivas, inventa nombres ficticios de forma automática sin preguntar, cita la Ley 294 de 1996 de forma incompleta omitiendo las reformas de la Ley 2126 de 2021, y decreta la orden de arresto de forma inmediata sin cumplir el debido proceso de descargos. **La IA asume el rol de juez y decide de forma directa.**

---

### Escenario B: El Buen Prompt (Uso Seguro e Institucional)
* **Prompt estructurado sugerido:**
  ```text
  Rol: Actúa como asistente de apoyo documental para una Comisaría de Familia en Colombia.
  Tarea: Generar un borrador de estructura para un Auto de Trámite que ordena la apertura de la investigación por violencia intrafamiliar y decreta medidas provisionales de protección.
  
  Fuentes exclusivas: 
  - Limita tu marco normativo a la Ley 2126 de 2021 y a las normas de violencia intrafamiliar vigentes en Colombia (Ley 294 de 1996 reformada).
  
  Hechos del caso (Ficticios):
  - Solicitante: [VÍCTIMA ANÓNIMA - MUJER].
  - Accionado: [AGRESOR ANÓNIMO - CÓNYUGE].
  - Hecho: Agresión física y verbal ocurrida el 23 de junio de 2026.
  
  Reglas estrictas:
  1. No completes datos de nombres, cédulas ni direcciones; deja los espacios en blanco usando corchetes como [COMPLETAR NOMBRE].
  2. No califiques las pruebas ni declares la responsabilidad del accionado.
  3. No cites normas derogadas.
  4. Incluye al inicio de forma obligatoria la cláusula: "Borrador de apoyo documental sujeto a revisión del funcionario competente."
  
  Estructura de salida:
  - Título formal.
  - Sección de Antecedentes y Hechos presentados.
  - Fundamentos de derecho abreviados.
  - Parte resolutiva con el espacio para las medidas ordenadas.
  ```

* **Resultado seguro obtenido:**
  La IA entrega un esquema formal limpio, con espacios para rellenar manual o institucionalmente, citando las normas correctas actualizadas y sin arrogarse la facultad de juzgar la veracidad de la agresión antes de la audiencia.
