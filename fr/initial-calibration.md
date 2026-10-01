---
title: "Calibration initiale"
description: "Calibration initiale dans CortisolTracker : pourquoi un graphique non calibré ne juge pas la dose, et comment régler kCalib. Ce n’est pas un avis médical."
lang: fr
slug: initial-calibration
date: 2026-10-01
updated: 2026-10-01
draft: false
translates: initial-calibration
tags:
  - cortisoltracker
  - guide
---

CortisolTracker n’est pas un dispositif médical et ne remplace pas l’endocrinologue. La calibration sert à lire le graphique à partir de vos données, et pas seulement à partir d’une personne moyenne.

## D’abord la question

Après les premières doses, une question vient presque sûrement : les courbes bleue et violette sont trop hautes ou trop basses par rapport à la vôtre — la dose est-elle donc trop forte ou trop faible ?

Non, non, et encore non. Un graphique non calibré ne permet pas de le dire.

Sans calibration, on voit des tendances : la dose a monté le niveau, la suivante est arrivée trop tôt ou trop tard, la soirée a baissé. La précision et la lisibilité du graphique deviennent bien plus grandes après la calibration initiale.

Le graphique a trois repères :

- la courbe bleue est le profil de référence sain au repos ;
- la violette est la même référence avec les facteurs de cette journée ;
- vert, jaune et rouge sont la concentration calculée à partir de vos doses. Le vert est dans le couloir de la référence, le jaune est un écart modéré, le rouge est au-delà du seuil jaune.

C’est la courbe vert-jaune-rouge que l’on compare à la référence. Le bleu et le violet, à eux seuls, ne disent pas que le comprimé « n’est pas le bon ».

![10 mg du matin avant calibration : le pic vert est sous la référence bleue](/learn/images/calibration-before.png)

Sur l’image, un exemple, **PAS** un schéma. 10 mg habituels d’hydrocortisone le matin, tant que kCalib n’est pas ajusté : le pic vert est nettement sous le bleu. Cela ne veut pas dire que la dose est trop faible. Les libellés sont en anglais, parce que la langue de l’interface l’était.

## Un peu de théorie

L’écart entre les personnes est très grand. CortisolTracker part donc d’une personne moyenne de la population : environ 30 ans, 70 kg, un sommeil habituel d’environ 8 heures, un réveil vers 7 heures du matin. Le pic de la courbe bleue pour cette référence est d’environ 350–370 nmol/L, à peu près une heure après le réveil.

Une prise de sang du matin chez des personnes en bonne santé est beaucoup plus large que ce pic. Un intervalle de laboratoire du cortisol total le matin est en général de l’ordre de 140–690 nmol/L et dépend de la méthode du laboratoire. Ce n’est pas une erreur du graphique et ce n’est pas « votre normale ». C’est la dispersion de la population sur une seule mesure du matin. Chacun a sa demi-vie, son degré de liaison aux protéines et sa réponse au stress et aux autres facteurs.

L’app tient compte de choses stables : le sexe, le poids, le rythme de la journée, une partie des médicaments au long cours. Elle ne connaît pas votre pharmacocinétique personnelle tant que vous ne l’avez pas ajustée.

En règle générale, nous n’avons pas nos chiffres d’avant la maladie. Même s’il y a eu des analyses, les paramètres changent avec le temps. La calibration s’appuie donc sur votre dose de substitution réelle un jour calme, pas sur « comment j’étais en bonne santé ».

## Comment faire la calibration initiale

1. Remplissez les données de départ. L’âge et le sexe se règlent commodément dans le **Profil utilisateur**, avec les interrupteurs activés pour qu’ils entrent dans le calcul. Le poids, l’heure habituelle de réveil et la durée du sommeil vont dans le panneau **Profil médical de l’utilisateur**. L’heure de réveil est l’ancre de la courbe bleue : la montée du matin y est attachée, pas à huit heures fixes.
2. Saisissez la première dose, celle du matin, telle que vous la prenez vraiment. La calibration initiale se fait sur elle.
3. Prenez cette règle de travail : un jour calme, sans dose de stress, le pic de la dose du matin doit tomber près du pic matinal de la courbe bleue.
4. Si l’écart est net, changez **K calibration (doses)**, le paramètre kCalib. Il est dans les **Paramètres utilisateur**, section **Paramètres de calibration**. C’est le multiplicateur d’amplitude des doses. La valeur par défaut est **1,6**. Décalez-le de quelques crans vers le haut ou vers le bas et regardez de nouveau le graphique.

![Le champ kCalib dans les paramètres utilisateur, valeur 1,6](/learn/images/calibration-kcalib.png)

Sur l’image, le champ kCalib est entouré. La valeur par défaut est 1,6. Les libellés sont en anglais, parce que la langue de l’interface l’était.

5. Quand la courbe de concentration s’est rapprochée autant que possible de la bleue autour du pic du matin, la calibration initiale peut être tenue pour faite.

![Les mêmes 10 mg après réglage de kCalib : le pic du matin est près de la courbe bleue](/learn/images/calibration-after.png)

Sur l’image, un exemple, **PAS** un schéma. Les mêmes 10 mg du matin après le réglage de kCalib : le pic de la dose est rapproché de la courbe bleue. Les libellés sont en anglais, parce que la langue de l’interface l’était.

Plus tard, vous fixerez très probablement pour vous la dose du matin la plus confortable. Il est alors sensé d’ajuster encore kCalib sur cette dose.

C’est le réglage le plus important du suivi. Il demande le plus d’honnêteté. Saisissez des données objectives, pas celles que vous souhaiteriez. Une première dose volontairement trop basse met une grande erreur dans toute la suite : le graphique sera « calibré » sur un comprimé qui n’a pas existé.

kCalib ne change pas l’ordonnance du médecin. Il change seulement l’échelle sur laquelle l’app dessine les milligrammes déjà pris.

## Si les doses ne sont pas typiques

Celui dont les doses ne ressemblent pas aux doses habituelles, et qui n’est pas sûr de l’ordonnance, n’en connaît objectivement pas la cause : la queue d’une sortie de dose de stress, un besoin thérapeutique particulier, ou autre chose. Tant que l’ordonnance n’est pas précisée, laissez les réglages standard et regardez des processus approximatifs. Ne réglez pas kCalib pour qu’une dose inhabituelle ait l’air « comme chez tout le monde ».

Ci-dessous, des journées calmes habituelles chez l’adulte en insuffisance surrénale primaire. Le repère est le guide clinique de l’Endocrine Society (2016) et les équivalents qu’utilise le suivi. Ce n’est pas un schéma à recopier et ce n’est pas une raison de changer les comprimés seul.

L’écart à l’intérieur de la bande habituelle est déjà visible : 15 mg et 25 mg d’hydrocortisone sont deux doses habituelles, même s’il y a environ une fois et demie entre elles. Ce qui sort de l’ordinaire un jour calme, c’est de passer **au-dessus du plafond** de cette bande. Une fois et demie au-dessus du plafond, c’est plutôt une dose de stress ou un besoin thérapeutique particulier, pas « simplement ma normale ».

### Hydrocortisone, 15–25 mg

2 ou 3 prises. La plus grande part juste après le réveil. À deux doses, la seconde tôt dans la journée, repère environ deux heures après le déjeuner. À trois, au déjeuner et dans la journée ; la dernière au plus tard 4 à 6 heures avant le sommeil. Répartitions de manuel : 10+5, 15+5, 10+5+5, 15+5+5. Dans le suivi, ce sont les mêmes 15–25 mg.

### Acétate de cortisone, 20–35 mg

Les mêmes 2–3 prises, le matin le plus gros. Exemple : 25 mg le matin et 12,5 mg dans la journée. Dans le suivi, 0,8× : 25 mg ≈ 20 mg d’hydrocortisone.

### Prednisolone, 3–5 mg

Une fois le matin, ou deux fois, matin et début de journée. Dans le suivi, 4× : 5 mg ≈ 20 mg d’hydrocortisone.

### Prednisone, 3–5 mg

D’habitude une prise du matin. Dans le suivi, 4× : 5 mg ≈ 20 mg d’hydrocortisone.

### Méthylprednisolone, environ 3–5 mg

Ces recommandations ne donnent pas de schéma de substitution à part. D’habitude une prise du matin. Dans le suivi, 5× : 4 mg ≈ 20 mg d’hydrocortisone.

### Dexaméthasone, non recommandée pour la substitution habituelle

Action longue, la dose est difficile à caser dans la journée. Si elle est déjà prescrite, regardez l’équivalent, pas un « schéma typique ». Dans le suivi, 25× : 0,5 mg = 12,5 mg d’hydrocortisone ; 0,75 mg ≈ 19 mg ; 1 mg = 25 mg.

Les 100 mg d’hydrocortisone d’urgence ne sont pas dans cette liste. C’est une dose de crise, pas une journée calme.

Comparez votre journée calme au plafond de votre médicament. Hydrocortisone nettement au-dessus de 25 mg, prednisolone au-dessus de 5 mg, méthylprednisolone au-dessus de 5 mg, dexaméthasone au-dessus d’environ 1 mg dans l’équivalent du suivi : une raison de ne pas tourner kCalib « jusqu’à ce que ça colle », et de laisser le réglage standard jusqu’à préciser le schéma avec le médecin.
