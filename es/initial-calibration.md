---
title: "Calibración inicial"
description: "Calibración inicial en CortisolTracker: por qué un gráfico sin calibrar no juzga la dosis y cómo ajustar kCalib. No es consejo médico."
lang: es
slug: initial-calibration
date: 2026-10-01
updated: 2026-10-01
draft: false
translates: initial-calibration
tags:
  - cortisoltracker
  - guide
---

CortisolTracker no es un producto sanitario y no sustituye al endocrinólogo. La calibración sirve para que el gráfico se lea con tus datos, y no solo con los de una persona media.

## Primero la pregunta

Después de las primeras dosis casi seguro aparece la pregunta: las curvas azul y violeta quedan demasiado altas o demasiado bajas frente a la tuya, ¿entonces la dosis es demasiado grande o demasiado pequeña?

No, no y otra vez no. Con un gráfico sin calibrar no se puede decir eso.

Sin calibración se ven tendencias: la dosis subió el nivel, la siguiente llegó demasiado pronto o demasiado tarde, la tarde bajó. La precisión y la claridad del gráfico suben mucho después de la calibración inicial.

En el gráfico hay tres referencias:

- la curva azul es el perfil de referencia sano en reposo;
- la violeta es la misma referencia con los factores de ese día;
- verde, amarillo y rojo son la concentración calculada a partir de tus dosis. Verde está en el corredor de la referencia, amarillo es una desviación moderada, rojo queda más allá del umbral amarillo.

Con la referencia se compara la curva verde-amarilla-roja. Azul y violeta, por sí solas, no dicen que la pastilla «no es la correcta».

## Un poco de teoría

La dispersión entre personas es muy grande. Por eso CortisolTracker parte de una persona media de la población: unos 30 años, 70 kg, un sueño habitual de unas 8 horas, despertar hacia las 7 de la mañana. El pico de la curva azul en esa referencia ronda 350–370 nmol/L, más o menos una hora después de despertar.

Un análisis de sangre matutino en personas sanas es mucho más ancho que ese pico. Un intervalo de laboratorio del cortisol total por la mañana suele estar en el orden de 140–690 nmol/L y depende del método del laboratorio. Eso no es un error del gráfico ni «tu normal». Es la dispersión de la población en una sola medición matutina. Cada persona tiene su semivida, su grado de unión a proteínas y su respuesta al estrés y a otros factores.

La app tiene en cuenta cosas estables: sexo, peso, ritmo del día y parte de la medicación permanente. No conoce tu farmacocinética personal hasta que la ajustas.

Por lo general no tenemos nuestras cifras de antes de la enfermedad. Aunque alguna vez hubo análisis, los parámetros cambian con el tiempo. La calibración se apoya por eso en tu dosis real de sustitución en un día tranquilo, no en «cómo era yo cuando estaba sano».

## Cómo hacer la calibración inicial

1. Rellena los datos de partida. Edad y sexo conviene ponerlos en el **Perfil de usuario** y activar los interruptores para que entren en el cálculo. Peso, hora habitual de despertar y duración del sueño van en el panel **Perfil médico del usuario**. La hora de despertar es el ancla de la curva azul: la subida matutina se ata a ella, no a las ocho en punto.
2. Introduce la primera dosis, la de la mañana, tal como de verdad la tomas. La calibración inicial se hace con ella.
3. Acepta esta regla de trabajo: en un día tranquilo, sin dosis de estrés, el pico de la dosis matutina debe caer cerca del pico matutino de la curva azul.
4. Si la diferencia es clara, cambia **K calibración (dosis)**, el parámetro kCalib. Está en **Ajustes de usuario**, sección **Parámetros de calibración**. Es el multiplicador de la amplitud de las dosis. El valor por defecto es **1,6**. Muévelo unos escalones arriba o abajo y vuelve a mirar el gráfico.
5. Cuando la curva de concentración se haya acercado todo lo posible a la azul alrededor del pico matutino, la calibración inicial puede darse por hecha.

Más adelante, lo más probable es que fijes para ti la dosis matutina más cómoda. Entonces tiene sentido volver a ajustar kCalib a esa dosis.

Este es el ajuste más importante del rastreador. Aquí hace falta la máxima honestidad. Introduce datos objetivos, no los que te gustaría. Una primera dosis a propósito demasiado baja mete un error grande en todo lo que sigue: el gráfico quedará «calibrado» a una pastilla que no existió.

kCalib no cambia la pauta del médico. Solo cambia la escala con la que la app dibuja los miligramos ya tomados.

## Si las dosis no son típicas

Quien tiene dosis que no se parecen a las habituales y no está seguro de la pauta, objetivamente no conoce la causa: la cola de una dosis de estrés, una necesidad terapéutica especial u otra cosa. Mientras la pauta no se aclare, deja los ajustes estándar y mira procesos aproximados. No ajustes kCalib para que una dosis rara parezca «como la de todos».

Abajo van días tranquilos habituales en adultos con insuficiencia suprarrenal primaria. La referencia es la guía clínica de la Endocrine Society (2016) y los equivalentes que usa el rastreador. No es una pauta para copiar ni un motivo para cambiar las pastillas por tu cuenta.

La diferencia dentro de la banda habitual ya se nota: 15 mg y 25 mg de hidrocortisona son ambas dosis habituales, aunque entre ellas hay cerca de una vez y media. Lo que resulta raro en un día tranquilo es salir **por encima del techo** de esa banda. Una vez y media por encima del techo apunta más bien a una dosis de estrés o a una necesidad terapéutica especial, no a «simplemente mi normal».

| Fármaco, dosis diaria | Cómo se suele repartir | Equivalente de hidrocortisona en el rastreador |
| --- | --- | --- |
| Hidrocortisona, 15–25 mg | 2 o 3 tomas. La mayor parte justo después de despertar. Con dos dosis, la segunda a primera hora del día, orientación unas dos horas después de comer. Con tres, a mediodía y por la tarde; la última no más tarde de 4–6 horas antes de dormir. Repartos de manual: 10+5, 15+5, 10+5+5, 15+5+5 | los mismos 15–25 mg |
| Acetato de cortisona, 20–35 mg | Las mismas 2–3 tomas, la mañana la más grande. Ejemplo: 25 mg por la mañana y 12,5 mg por el día | 0,8×: 25 mg ≈ 20 mg de hidrocortisona |
| Prednisolona, 3–5 mg | Una vez por la mañana, o dos, mañana y primera hora del día | 4×: 5 mg ≈ 20 mg de hidrocortisona |
| Prednisona, 3–5 mg | Suele ser una toma matutina | 4×: 5 mg ≈ 20 mg de hidrocortisona |
| Metilprednisolona, unos 3–5 mg | Estas recomendaciones no dan una pauta de sustitución aparte. Suele ser una toma matutina | 5×: 4 mg ≈ 20 mg de hidrocortisona |
| Dexametasona, no recomendada para la sustitución habitual | Acción larga, la dosis cuesta encajarla en el día. Si ya está pautada, mira el equivalente, no un «esquema típico» | 25×: 0,5 mg = 12,5 mg de hidrocortisona; 0,75 mg ≈ 19 mg; 1 mg = 25 mg |

Los 100 mg de hidrocortisona de urgencia no entran en esta tabla. Es una dosis de crisis, no un día tranquilo.

Compara tu día tranquilo con el techo de la fila de tu fármaco. Hidrocortisona claramente por encima de 25 mg, prednisolona por encima de 5 mg, metilprednisolona por encima de 5 mg, dexametasona por encima de cerca de 1 mg en el equivalente del rastreador: motivo para no girar kCalib «hasta que cuadre», y para dejar el ajuste estándar hasta aclarar la pauta con el médico.
