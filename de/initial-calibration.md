---
title: "Erste Kalibrierung"
description: "Erste Kalibrierung in CortisolTracker: warum eine unkalibrierte Kurve nichts über die Dosis sagt und wie kCalib eingestellt wird. Keine medizinische Beratung."
lang: de
slug: initial-calibration
date: 2026-10-01
updated: 2026-10-01
draft: false
translates: initial-calibration
tags:
  - cortisoltracker
  - guide
---

CortisolTracker ist kein Medizinprodukt und ersetzt keine Endokrinologin und keinen Endokrinologen. Die Kalibrierung sorgt dafür, dass die Kurve aus Ihren Daten gelesen wird, nicht nur aus einem Durchschnittsmenschen.

## Zuerst die Frage selbst

Nach den ersten Dosen kommt fast sicher die Frage: Die blaue und die violette Kurve liegen zu hoch oder zu niedrig gegen Ihre eigene — ist die Dosis also zu groß oder zu klein?

Nein, nein und noch einmal nein. An einer unkalibrierten Kurve lässt sich das nicht sagen.

Ohne Kalibrierung sieht man Tendenzen: Eine Dosis hat den Spiegel gehoben, die nächste kam zu früh oder zu spät, der Abend ist abgesackt. Genauigkeit und Lesbarkeit der Kurve werden nach der ersten Kalibrierung deutlich höher.

Die Kurve hat drei Orientierungen:

- die blaue Kurve ist das gesunde Referenzprofil in Ruhe;
- die violette ist dieselbe Referenz mit den Faktoren dieses Tages;
- grün, gelb und rot sind die berechnete Konzentration aus Ihren Dosen. Grün liegt im Korridor der Referenz, gelb ist eine mäßige Abweichung, rot liegt jenseits der gelben Schwelle.

Mit der Referenz vergleicht man die grün-gelb-rote Kurve. Blau und violett sagen für sich allein nicht, dass die Tablette «die falsche» ist.

## Ein wenig Theorie

Die Streuung zwischen Menschen ist sehr groß. CortisolTracker startet deshalb bei einem bevölkerungstypischen Menschen: etwa 30 Jahre, Gewicht 70 kg, gewöhnlicher Schlaf von etwa 8 Stunden, Aufwachen gegen 7 Uhr morgens. Der Gipfel der blauen Kurve bei dieser Referenz liegt bei etwa 350–370 nmol/l, ungefähr eine Stunde nach dem Aufwachen.

Eine morgendliche Blutuntersuchung bei gesunden Menschen ist viel breiter als dieser Gipfel. Ein Laborintervall für gesamtes morgendliches Cortisol liegt meist in der Größenordnung 140–690 nmol/l und hängt von der Labormethode ab. Das ist kein Fehler der Kurve und nicht «Ihre Norm». Das ist die Streuung der Bevölkerung bei einer morgendlichen Messung. Jeder Mensch hat seine eigene Halbwertszeit, seinen eigenen Grad der Proteinbindung und seine eigene Antwort auf Stress und andere Faktoren.

Die App berücksichtigt stationäre Dinge: Geschlecht, Gewicht, Tagesrhythmus, einen Teil der Dauermedikamente. Ihre persönliche Pharmakokinetik kennt sie erst, wenn Sie sie nachstellen.

In der Regel haben wir unsere Werte von vor der Krankheit nicht. Selbst wenn es einmal Laborwerte gab, ändern sich die Parameter mit der Zeit. Die Kalibrierung stützt sich deshalb auf Ihre wirkliche Ersatzdosis an einem ruhigen Tag, nicht auf «wie ich gesund war».

## So geht die erste Kalibrierung

1. Tragen Sie die Ausgangsdaten ein. Alter und Geschlecht setzt man bequem im **Benutzerprofil** und schaltet die Schalter ein, damit sie in die Berechnung eingehen. Gewicht, gewöhnliche Aufwachzeit und Schlafdauer stehen in der Anzeige **Medizinisches Benutzerprofil**. Die Aufwachzeit ist der Anker der blauen Kurve: Der morgendliche Anstieg hängt an ihr, nicht an festen acht Uhr.
2. Tragen Sie die erste, morgendliche Dosis so ein, wie Sie sie wirklich einnehmen. Die erste Kalibrierung macht man an ihr.
3. Nehmen Sie diese Arbeitsregel: An einem ruhigen Tag, ohne Stressdosierung, soll der Gipfel der Morgendosis neben dem morgendlichen Gipfel der blauen Kurve liegen.
4. Ist der Abstand deutlich, ändern Sie **K Kalibrierung (Dosen)**, den Parameter kCalib. Er liegt in den **Benutzereinstellungen**, Abschnitt **Kalibrierungsparameter**. Das ist der Multiplikator der Dosisamplitude. Der Vorgabewert ist **1,6**. Schieben Sie ihn ein paar Stufen nach oben oder unten und sehen Sie die Kurve erneut an.
5. Wenn die Konzentrationskurve sich dem Blau im Bereich des Morgengipfels so weit wie möglich genähert hat, kann die erste Kalibrierung als erledigt gelten.

Später werden Sie für sich höchstwahrscheinlich eine Morgendosis finden, die sich am besten anfühlt. Dann lohnt es sich, kCalib noch einmal an diese Dosis anzupassen.

Das ist die wichtigste Einstellung des Trackers. Hier braucht es größte Ehrlichkeit. Tragen Sie objektive Daten ein, nicht gewünschte. Eine absichtlich zu niedrige erste Dosis legt einen großen Fehler in das ganze weitere Bild: Die Kurve wird auf eine Tablette «kalibriert», die es nicht gab.

kCalib ändert nicht die Verordnung der Ärztin oder des Arztes. Es ändert nur den Maßstab, in dem die App bereits eingenommene Milligramm zeichnet.

## Wenn die Dosen untypisch sind

Wer Dosen hat, die nicht nach den gewöhnlichen aussehen, und sich der Verordnung nicht sicher ist, kennt den Grund objektiv nicht: Ausläufer einer Stressdosis, ein besonderer therapeutischer Bedarf oder etwas anderes. Solange die Verordnung nicht geklärt ist, lassen Sie die Standardeinstellungen und sehen Sie genäherte Verläufe. Stellen Sie kCalib nicht so ein, dass eine ungewöhnliche Dosis «wie bei allen» aussieht.

Unten stehen gewöhnliche ruhige Tage für Erwachsene mit primärer Nebenniereninsuffizienz. Der Orientierungspunkt sind die klinische Leitlinie der Endocrine Society (2016) und die Äquivalente, die der Tracker benutzt. Das ist kein Schema zum Nachmachen und kein Grund, Tabletten allein zu ändern.

Der Abstand innerhalb des gewöhnlichen Bandes ist schon deutlich: Hydrocortison 15 mg und 25 mg sind beide gewöhnliche Dosen, obwohl etwa das Anderthalbfache dazwischen liegt. Ungewöhnlich an einem ruhigen Tag ist ein Gehen **über die obere Grenze** dieses Bandes. Anderthalbmal über der Decke ist eher Stressdosierung oder ein besonderer therapeutischer Bedarf, nicht «einfach meine Norm».

| Präparat, Tagesdosis | Wie man sie meist teilt | Hydrocortison-Äquivalent im Tracker |
| --- | --- | --- |
| Hydrocortison, 15–25 mg | 2 oder 3 Einnahmen. Der größte Teil direkt nach dem Aufwachen. Bei zwei Dosen die zweite früh am Tag, Orientierung etwa zwei Stunden nach dem Mittagessen. Bei drei zum Mittag und am Tag; die letzte nicht später als 4–6 Stunden vor dem Schlafen. Lehrbuch-Aufteilungen: 10+5, 15+5, 10+5+5, 15+5+5 | dieselben 15–25 mg |
| Cortisonacetat, 20–35 mg | Dieselben 2–3 Einnahmen, der Morgen am größten. Beispiel: 25 mg morgens und 12,5 mg am Tag | 0,8×: 25 mg ≈ 20 mg Hydrocortison |
| Prednisolon, 3–5 mg | Einmal morgens oder zweimal, Morgen und früher Tag | 4×: 5 mg ≈ 20 mg Hydrocortison |
| Prednison, 3–5 mg | Meist eine morgendliche Einnahme | 4×: 5 mg ≈ 20 mg Hydrocortison |
| Methylprednisolon, etwa 3–5 mg | Diese Empfehlungen geben kein eigenes Ersatzschema. Meist eine morgendliche Einnahme | 5×: 4 mg ≈ 20 mg Hydrocortison |
| Dexamethason, für den gewöhnlichen Ersatz nicht empfohlen | Lange Wirkung, die Dosis lässt sich schwer in den Tag legen. Wenn es schon verordnet ist, sehen Sie das Äquivalent an, nicht ein «typisches Schema» | 25×: 0,5 mg = 12,5 mg Hydrocortison; 0,75 mg ≈ 19 mg; 1 mg = 25 mg |

Notfall-Hydrocortison 100 mg steht nicht in dieser Tabelle. Das ist eine Krisendosis, kein ruhiger Tag.

Vergleichen Sie Ihren ruhigen Tag mit der oberen Grenze der Zeile Ihres Präparats. Hydrocortison deutlich über 25 mg, Prednisolon über 5 mg, Methylprednisolon über 5 mg, Dexamethason im Äquivalent des Trackers über etwa 1 mg — ein Grund, kCalib nicht «bis es passt» zu drehen, sondern die Standardeinstellung zu lassen, bis das Schema mit der Ärztin oder dem Arzt geklärt ist.
