---
title: "Initial calibration"
description: "Initial calibration in CortisolTracker: why an uncalibrated chart does not judge the dose, and how to set kCalib. Not medical advice."
lang: en
slug: initial-calibration
date: 2026-10-01
updated: 2026-10-01
draft: false
translates: initial-calibration
tags:
  - cortisoltracker
  - guide
---

CortisolTracker is not a medical device and does not replace an endocrinologist. Calibration is there so the chart is read from your data, not only from an average person.

## The question that comes first

After the first doses a question almost always appears: the blue and purple curves sit too high or too low against yours, so is the dose too large or too small?

No, no, and no again. An uncalibrated chart cannot say that.

Without calibration you can still see tendencies: a dose raised the level, the next one came too early or too late, the evening sagged. Accuracy and readability of the chart become much higher after the first calibration.

The chart has three guides:

- the blue curve is the healthy reference profile at rest;
- the purple curve is the same reference with this day's factors;
- green, yellow, and red are the calculated concentration from your doses. Green is inside the reference corridor, yellow is a moderate deviation, red is past the yellow threshold.

Compare the green-yellow-red curve with the reference. Blue and purple, by themselves, do not say that the tablet is "the wrong one".

## A little theory

The spread between people is very large. CortisolTracker therefore starts from an average person: about 30 years old, weight 70 kg, ordinary sleep of about 8 hours, waking around 7 in the morning. The peak of the blue curve for that reference is about 350–370 nmol/L, roughly one hour after waking.

A morning blood test in healthy people is much wider than this peak. A laboratory interval for total morning cortisol is usually on the order of 140–690 nmol/L and depends on the laboratory method. That is not a chart error and it is not "your normal". It is the population spread of one morning measurement. Each person has their own half-life, their own degree of protein binding, and their own response to stress and other factors.

The app accounts for stationary things: sex, weight, daily schedule, and some long-term medicines. It does not know your personal pharmacokinetics until you adjust them.

As a rule we do not have our own numbers from before the illness. Even if tests once existed, the parameters change over time. Calibration therefore rests on your real replacement dose on a quiet day, not on "what I was like when healthy".

## How to do the first calibration

1. Fill in the starting data. Age and sex are convenient to set in the **User profile**, with the switches on so they enter the calculation. Weight, usual wake time, and sleep duration belong in the **User medical profile** panel. Wake time is the anchor of the blue curve: the morning rise is tied to it, not to a fixed eight o'clock.
2. Enter the first, morning dose as you actually take it. The first calibration is done from that dose.
3. Use this working rule: on a quiet day, without stress dosing, the peak from the morning dose should land near the morning peak of the blue curve.
4. If the gap is substantial, change **K calibration (doses)**, the parameter kCalib. It is in **User settings**, section **Calibration parameters**. It is the dose-amplitude multiplier. The default is **1.6**. Move it a few steps up or down and look at the chart again.
5. When the concentration curve has come as close as it can to the blue curve around the morning peak, the first calibration can be treated as done.

Later you will most likely settle on a morning dose that feels most comfortable. It then makes sense to fit kCalib to that dose once more.

This is the most important setting in the tracker. It needs maximum honesty. Enter objective data, not the data you wish were true. A deliberately low first dose puts a large error into everything that follows: the chart will be "calibrated" to a tablet that was never taken.

kCalib does not change the doctor's prescription. It only changes the scale on which the app draws milligrams already taken.

## If the doses are not typical

If your doses do not look like the ordinary ones and you are not sure about the prescription, the reason is objectively unknown: the tail of coming off a stress dose, a special therapeutic need, or something else. Until the prescription is clarified, leave the standard settings and look at approximate processes. Do not tune kCalib so that an unusual dose looks "like everyone else's".

Below are ordinary quiet days for adults with primary adrenal insufficiency. The guide is the Endocrine Society clinical practice guideline (2016) and the equivalents the tracker uses. This is not a regimen to copy and not a reason to change tablets on your own.

The spread inside the ordinary band is already noticeable: hydrocortisone 15 mg and 25 mg are both ordinary doses, even though they differ by about one and a half times. What looks unusual on a quiet day is going **above the top of that band**. One and a half times above the ceiling is more likely stress dosing or a special therapeutic need, not "simply my normal".

| Drug, daily dose | How it is usually split | Hydrocortisone equivalent in the tracker |
| --- | --- | --- |
| Hydrocortisone, 15–25 mg | 2 or 3 intakes. The largest part right after waking. With two doses, the second is early in the day, about two hours after lunch as a guide. With three, at lunch and later in the day; the last one no later than 4–6 hours before sleep. Textbook layouts: 10+5, 15+5, 10+5+5, 15+5+5 | the same 15–25 mg |
| Cortisone acetate, 20–35 mg | The same 2–3 intakes, morning the largest. Example: 25 mg in the morning and 12.5 mg later in the day | 0.8×: 25 mg ≈ 20 mg hydrocortisone |
| Prednisolone, 3–5 mg | Once in the morning, or twice, morning and early day | 4×: 5 mg ≈ 20 mg hydrocortisone |
| Prednisone, 3–5 mg | Usually one morning intake | 4×: 5 mg ≈ 20 mg hydrocortisone |
| Methylprednisolone, about 3–5 mg | These recommendations do not give a separate replacement schedule. Usually one morning intake | 5×: 4 mg ≈ 20 mg hydrocortisone |
| Dexamethasone, not recommended for ordinary replacement | Long action, hard to fit a dose into the day. If it is already prescribed, look at the equivalent, not at a "typical schedule" | 25×: 0.5 mg = 12.5 mg hydrocortisone; 0.75 mg ≈ 19 mg; 1 mg = 25 mg |

Emergency hydrocortisone 100 mg is not in this table. That is a crisis dose, not a quiet day.

Compare your quiet day with the top of the row for your drug. Hydrocortisone clearly above 25 mg, prednisolone above 5 mg, methylprednisolone above 5 mg, dexamethasone above about 1 mg in the tracker's equivalent — a reason not to turn kCalib "until it matches", and to leave the standard setting until the schedule is clarified with your doctor.
