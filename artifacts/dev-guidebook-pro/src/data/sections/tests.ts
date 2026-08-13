import type { Section, SubSection } from "../types";

// ── Contenu fusionné depuis laConsoleTests.ts ─────────────────────────────────────
// Cours laConsole.dev : texte structuré, code copiable, DiagramBlock et rendu visuel fidèle de chaque page.
export const laConsoleTests: SubSection[] = [
  {
    id: "laconsole-vitest",
    title: "Vitest",
    blocks: [
      {"type":"note","variant":"info","title":"Source","text":"Vitest.pdf - 33 pages intégrées depuis laConsole.dev."},
      {"type":"h","text":"Page 1"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"Vitest › Ecrire des Assertions"},
      {"type":"h","text":""},
      {"type":"p","text":"Dans les frameworks de test, les assertions permettent de"},
      {"type":"p","text":"garantir le bon fonctionnement d'un extrait de code."},
      {"type":"p","text":"Découvrons leur rôle et leur syntaxe."},
      {"type":"h","text":"avr. 2024 ■■■Avancé 3 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nTESTER SON CODE AVEC LE FRAMEWORK VITEST\n/"},
      {"type":"p","text":"3. ECRIRE DES ASSERTIONS"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"h","text":"Qu’est-ce qu’une assertion ?"},
      {"type":"image","src":"images/laconsole/vitest-p001.jpg","alt":"Page originale de Vitest.pdf - page 1"},
      {"type":"h","text":"Page 2"},
      {"type":"h","text":"Rôle"},
      {"type":"p","text":"Dans l’écosystème des frameworks de test, le terme d’« assertion » fait référence à"},
      {"type":"h","text":"une déclaration qui vériﬁe qu’une condition spéciﬁque est vraie pendant"},
      {"type":"p","text":"l’exécution d’un test unitaire."},
      {"type":"h","text":"Elle permet de garantir que le comportement du code correspond aux attentes"},
      {"type":"p","text":"déﬁnies par le développeur."},
      {"type":"p","text":"Si je possède une fonction utilitaire calculant la somme de 2 nombres, alors une"},
      {"type":"p","text":"assertion consisterait par exemple à écrire une condition qui vériﬁe que notre"},
      {"type":"p","text":"fonction :"},
      {"type":"p","text":"« Retourne bien 4  pour la somme 1 + 3  »"},
      {"type":"p","text":"« Retourne bien null  s’il manque un argument »"},
      {"type":"p","text":"« Retourne bien null  si les arguments ne sont pas des nombres »"},
      {"type":"p","text":"Etc."},
      {"type":"p","text":"&\nUn test peut être constitué d’une seule ou de plusieurs assertions."},
      {"type":"h","text":"APIs compatibles : Chai et Jest"},
      {"type":"p","text":"Pour écrire des assertions, Vitest intègre les APIs (comprendre ici « les méthodes"},
      {"type":"p","text":"») d’assertions de la\n ou encore du\n."},
      {"type":"p","text":"librairie Chai\nframework de test Jest"},
      {"type":"p","text":"Ces API offrent aux développeurs des approches différentes pour vériﬁer des"},
      {"type":"p","text":"conditions."},
      {"type":"image","src":"images/laconsole/vitest-p002.jpg","alt":"Page originale de Vitest.pdf - page 2"},
      {"type":"h","text":"Page 3"},
      {"type":"p","text":"Vitest offre deux méthodes pour écrire des assertions : expect()  et assert() ."},
      {"type":"p","text":"Bien qu’elles aient toutes deux pour but d’effectuer des assertions, elles adoptent"},
      {"type":"h","text":"une approche syntaxique distincte."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-3-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Ecrire des assertions"},
      {"type":"h","text":"Expect"},
      {"type":"h","text":"Fonctionnement"},
      {"type":"p","text":"Cette approche consiste à écrire ses assertions avec la méthode expect() ."},
      {"type":"p","text":"Cette fonction va prendre en argument l’élément à tester (fonction, objet…) puis"},
      {"type":"p","text":"permettre d’y expliciter le résultat attendu en chaînant des méthodes de"},
      {"type":"h","text":"vériﬁcation."},
      {"type":"image","src":"images/laconsole/vitest-p003.jpg","alt":"Page originale de Vitest.pdf - page 3"},
      {"type":"h","text":"Page 4"},
      {"type":"code","filename":"page-4-exemple-1","language":"javascript","code":"Import"},
      {"type":"p","text":"Importons la méthode expect() ."},
      {"type":"p","text":"demo.test.js\ncopier"},
      {"type":"code","filename":"page-4-exemple-2","language":"javascript","code":"import { expect } from 'vitest'"},
      {"type":"p","text":"expect()  peut être utilisée avec les syntaxes de Chai ou Jest en fonction"},
      {"type":"h","text":"&"},
      {"type":"p","text":"de vos préférences."},
      {"type":"h","text":"Utilisation"},
      {"type":"h","text":"Avec l’API de Chai"},
      {"type":"h","text":"L’API de Chai confère une méthodologie de développement dirigée par le"},
      {"type":"h","text":"comportement nommée BDD (Behavior-Driven Development)."},
      {"type":"h","text":"Cette méthodologie consiste à chaîner des assertions syntaxiquement proches du"},
      {"type":"p","text":"langage naturel, aﬁn de rendre les tests plus lisibles et expressifs."},
      {"type":"p","text":"Une assertion se présente sous la forme de :"},
      {"type":"h","text":"Mots-clés de liaison ( to , be , is , that , which , and …)"},
      {"type":"h","text":"Méthodes et mots-clés de vériﬁcation ( equal() , empty() , true …)"},
      {"type":"image","src":"images/laconsole/vitest-p004.jpg","alt":"Page originale de Vitest.pdf - page 4"},
      {"type":"h","text":"Page 5"},
      {"type":"p","text":"demo.test.js\ncopier"},
      {"type":"code","filename":"page-5-exemple-1","language":"javascript","code":"import { describe, test, expect } from 'vitest'"},
      {"type":"code","filename":"page-5-exemple-2","language":"javascript","code":"import { sum, getPseudos } from \"../src/utils/demo\""},
      {"type":"code","filename":"page-5-exemple-3","language":"javascript","code":"describe(\"Fonction sum()\", () => {"},
      {"type":"code","filename":"page-5-exemple-4","language":"javascript","code":"test(\"Calcul de somme\", () => {"},
      {"type":"code","filename":"page-5-exemple-5","language":"javascript","code":"expect(sum(1, 3)).to.equal(4)\n+"},
      {"type":"code","filename":"page-5-exemple-6","language":"javascript","code":"})"},
      {"type":"code","filename":"page-5-exemple-7","language":"javascript","code":"test(\"Pas d'arguments\", () => {"},
      {"type":"p","text":"expect(sum()).to.be.null\n+"},
      {"type":"code","filename":"page-5-exemple-8","language":"javascript","code":"})"},
      {"type":"code","filename":"page-5-exemple-9","language":"javascript","code":"})"},
      {"type":"code","filename":"page-5-exemple-10","language":"javascript","code":"describe(\"Fonction getPseudos()\", () => {"},
      {"type":"code","filename":"page-5-exemple-11","language":"javascript","code":"test(\"Récupère 7 pseudos random\", () => {"},
      {"type":"code","filename":"page-5-exemple-12","language":"javascript","code":"expect(getPseudos(7)).to.be.an('array').that.hav\n+"},
      {"type":"code","filename":"page-5-exemple-13","language":"javascript","code":"})"},
      {"type":"code","filename":"page-5-exemple-14","language":"javascript","code":"test(\"Pas d'arguments\", () => {"},
      {"type":"code","filename":"page-5-exemple-15","language":"javascript","code":"expect(getPseudos()).to.be.an('array').that.is.e\n+"},
      {"type":"code","filename":"page-5-exemple-16","language":"javascript","code":"})"},
      {"type":"code","filename":"page-5-exemple-17","language":"javascript","code":"})"},
      {"type":"code","filename":"page-5-exemple-18","language":"javascript","code":"to.be.an('array').that.is.not.empty … Difﬁcile de faire plus clair !"},
      {"type":"p","text":"&\nToutes les assertions commencent par .to ."},
      {"type":"h","text":"Avec l’API de Jest"},
      {"type":"image","src":"images/laconsole/vitest-p005.jpg","alt":"Page originale de Vitest.pdf - page 5"},
      {"type":"h","text":"Page 6"},
      {"type":"p","text":"L’API de Jest offre une syntaxe plus compacte, limitant le chaînage d’assertions,"},
      {"type":"p","text":"car elle :"},
      {"type":"h","text":"Offre des méthodes de vériﬁcation plus spéciﬁques (aussi appelées «"},
      {"type":"code","filename":"page-6-exemple-1","language":"javascript","code":"matchers »). Par exemple .to.be.below()  de l’API de Chai se verra"},
      {"type":"code","filename":"page-6-exemple-2","language":"javascript","code":"remplacé par .toBeLessThan()  avec l’API de Jest."},
      {"type":"h","text":"N’intègre aucun mot-clé de liaison. Seul le mot-clé not  permet d’inverser un"},
      {"type":"p","text":"test (on parle de « modiﬁer »)."},
      {"type":"image","src":"images/laconsole/vitest-p006.jpg","alt":"Page originale de Vitest.pdf - page 6"},
      {"type":"h","text":"Page 7"},
      {"type":"p","text":"demo.test.js\ncopier"},
      {"type":"code","filename":"page-7-exemple-1","language":"javascript","code":"import { describe, test, expect } from 'vitest'"},
      {"type":"code","filename":"page-7-exemple-2","language":"javascript","code":"import { sum, getPseudos } from \"../src/utils/demo\""},
      {"type":"code","filename":"page-7-exemple-3","language":"javascript","code":"describe(\"Fonction sum()\", () => {"},
      {"type":"code","filename":"page-7-exemple-4","language":"javascript","code":"test(\"Calcul de somme\", () => {"},
      {"type":"code","filename":"page-7-exemple-5","language":"javascript","code":"expect(sum(1, 3)).toBe(4)\n+"},
      {"type":"code","filename":"page-7-exemple-6","language":"javascript","code":"})"},
      {"type":"code","filename":"page-7-exemple-7","language":"javascript","code":"test(\"Pas d'arguments\", () => {"},
      {"type":"code","filename":"page-7-exemple-8","language":"javascript","code":"expect(sum()).toBeNull()\n+"},
      {"type":"code","filename":"page-7-exemple-9","language":"javascript","code":"})"},
      {"type":"code","filename":"page-7-exemple-10","language":"javascript","code":"})"},
      {"type":"code","filename":"page-7-exemple-11","language":"javascript","code":"describe(\"Fonction getPseudos()\", () => {"},
      {"type":"code","filename":"page-7-exemple-12","language":"javascript","code":"test(\"Récupère 7 pseudos random\", () => {"},
      {"type":"code","filename":"page-7-exemple-13","language":"javascript","code":"expect(getPseudos(7)).toBeInstanceOf(Array).toHa\n+"},
      {"type":"code","filename":"page-7-exemple-14","language":"javascript","code":"})"},
      {"type":"code","filename":"page-7-exemple-15","language":"javascript","code":"test(\"Pas d'arguments\", () => {"},
      {"type":"code","filename":"page-7-exemple-16","language":"javascript","code":"expect(getPseudos()).toBeInstanceOf(Array).toHav\n+"},
      {"type":"code","filename":"page-7-exemple-17","language":"javascript","code":"})"},
      {"type":"code","filename":"page-7-exemple-18","language":"javascript","code":"})"},
      {"type":"p","text":"Toutes les méthodes de vériﬁcation utilisées au sein des assertions"},
      {"type":"h","text":"&"},
      {"type":"p","text":"commencent par le préﬁxe to ."},
      {"type":"p","text":"Consulter la\n de expect() ."},
      {"type":"p","text":"documentation ofﬁcielle"},
      {"type":"image","src":"images/laconsole/vitest-p007.jpg","alt":"Page originale de Vitest.pdf - page 7"},
      {"type":"h","text":"Page 8"},
      {"type":"h","text":"Assert"},
      {"type":"h","text":"Fonctionnement"},
      {"type":"p","text":"Cette seconde approche consiste à écrire ses assertions avec la méthode"},
      {"type":"p","text":"assert() ."},
      {"type":"p","text":"Cette méthode est plus ﬂexible qu’ expect()  puisqu’elle permet :"},
      {"type":"p","text":"D’évaluer directement une expression de manière « traditionnelle » avec les"},
      {"type":"p","text":"opérateurs logiques et de comparaison."},
      {"type":"p","text":"OU"},
      {"type":"code","filename":"page-8-exemple-1","language":"javascript","code":"D’utiliser des méthodes de vériﬁcation ( .equal() , .isTrue() ,"},
      {"type":"code","filename":"page-8-exemple-2","language":"javascript","code":".isNull() …)"},
      {"type":"p","text":"La différence principale avec except()  est que assert() , ne permet"},
      {"type":"h","text":"⚠"},
      {"type":"h","text":"pas de chaîner des assertions."},
      {"type":"code","filename":"page-8-exemple-3","language":"javascript","code":"Import"},
      {"type":"p","text":"Importons la méthode assert() ."},
      {"type":"image","src":"images/laconsole/vitest-p008.jpg","alt":"Page originale de Vitest.pdf - page 8"},
      {"type":"h","text":"Page 9"},
      {"type":"p","text":"demo.test.js\ncopier"},
      {"type":"code","filename":"page-9-exemple-1","language":"javascript","code":"import { assert } from 'vitest'"},
      {"type":"h","text":"Utilisation"},
      {"type":"p","text":"assert()  est propre à l’API de Chai, il n’existe pas d’équivalent via l’API"},
      {"type":"h","text":"&"},
      {"type":"p","text":"de Jest."},
      {"type":"h","text":"Approche traditionnelle"},
      {"type":"p","text":"Utilisons assert()  pour évaluer nos expressions de manière traditionnelle."},
      {"type":"image","src":"images/laconsole/vitest-p009.jpg","alt":"Page originale de Vitest.pdf - page 9"},
      {"type":"h","text":"Page 10"},
      {"type":"p","text":"demo.test.js\ncopier"},
      {"type":"code","filename":"page-10-exemple-1","language":"javascript","code":"import { describe, test, expect } from 'vitest'"},
      {"type":"code","filename":"page-10-exemple-2","language":"javascript","code":"import { sum, getPseudos } from \"../src/utils/demo\""},
      {"type":"code","filename":"page-10-exemple-3","language":"javascript","code":"describe(\"Fonction sum()\", () => {"},
      {"type":"code","filename":"page-10-exemple-4","language":"javascript","code":"test(\"Calcul de somme\", () => {"},
      {"type":"p","text":"assert(sum(1, 3) === 4)\n+"},
      {"type":"code","filename":"page-10-exemple-5","language":"javascript","code":"})"},
      {"type":"code","filename":"page-10-exemple-6","language":"javascript","code":"test(\"Pas d'arguments\", () => {"},
      {"type":"p","text":"assert(sum() === null)\n+"},
      {"type":"code","filename":"page-10-exemple-7","language":"javascript","code":"})"},
      {"type":"code","filename":"page-10-exemple-8","language":"javascript","code":"})"},
      {"type":"code","filename":"page-10-exemple-9","language":"javascript","code":"describe(\"Fonction getPseudos()\", () => {"},
      {"type":"code","filename":"page-10-exemple-10","language":"javascript","code":"test(\"Récupère 7 pseudos random\", () => {"},
      {"type":"p","text":"assert(getPseudos(7) instanceof Array && getPseu\n+"},
      {"type":"code","filename":"page-10-exemple-11","language":"javascript","code":"})"},
      {"type":"code","filename":"page-10-exemple-12","language":"javascript","code":"test(\"Pas d'arguments\", () => {"},
      {"type":"p","text":"assert(getPseudos() instanceof Array && getPseud\n+"},
      {"type":"code","filename":"page-10-exemple-13","language":"javascript","code":"})"},
      {"type":"code","filename":"page-10-exemple-14","language":"javascript","code":"})"},
      {"type":"h","text":"Approche par méthode spéciﬁque"},
      {"type":"p","text":"Utilisons assert()  pour évaluer nos expressions avec les méthodes de"},
      {"type":"p","text":"vériﬁcation proposées par Vitest."},
      {"type":"image","src":"images/laconsole/vitest-p010.jpg","alt":"Page originale de Vitest.pdf - page 10"},
      {"type":"h","text":"Page 11"},
      {"type":"p","text":"assert()  est propre à l’API de Chai, il n’existe pas d’équivalent via l’API"},
      {"type":"h","text":"&"},
      {"type":"p","text":"de Jest."},
      {"type":"p","text":"demo.test.js\ncopier"},
      {"type":"code","filename":"page-11-exemple-1","language":"javascript","code":"import { describe, test, expect } from 'vitest'"},
      {"type":"code","filename":"page-11-exemple-2","language":"javascript","code":"import { sum, getPseudos } from \"../src/utils/demo\""},
      {"type":"code","filename":"page-11-exemple-3","language":"javascript","code":"describe(\"Fonction sum()\", () => {"},
      {"type":"code","filename":"page-11-exemple-4","language":"javascript","code":"test(\"Calcul de somme\", () => {"},
      {"type":"code","filename":"page-11-exemple-5","language":"javascript","code":"assert.equal(sum(1, 3), 4)\n+"},
      {"type":"code","filename":"page-11-exemple-6","language":"javascript","code":"})"},
      {"type":"code","filename":"page-11-exemple-7","language":"javascript","code":"test(\"Pas d'arguments\", () => {"},
      {"type":"code","filename":"page-11-exemple-8","language":"javascript","code":"assert.isNull(sum())\n+"},
      {"type":"code","filename":"page-11-exemple-9","language":"javascript","code":"})"},
      {"type":"code","filename":"page-11-exemple-10","language":"javascript","code":"})"},
      {"type":"code","filename":"page-11-exemple-11","language":"javascript","code":"describe(\"Fonction getPseudos()\", () => {"},
      {"type":"code","filename":"page-11-exemple-12","language":"javascript","code":"test(\"Récupère 7 pseudos random\", () => {"},
      {"type":"code","filename":"page-11-exemple-13","language":"javascript","code":"assert.isArray(getPseudos(7))\n+"},
      {"type":"code","filename":"page-11-exemple-14","language":"javascript","code":"assert.lengthOf(getPseudos(7), 7)\n+"},
      {"type":"code","filename":"page-11-exemple-15","language":"javascript","code":"})"},
      {"type":"code","filename":"page-11-exemple-16","language":"javascript","code":"test(\"Pas d'arguments\", () => {"},
      {"type":"code","filename":"page-11-exemple-17","language":"javascript","code":"assert.isArray(getPseudos())\n+"},
      {"type":"code","filename":"page-11-exemple-18","language":"javascript","code":"assert.isEmpty(getPseudos())\n+"},
      {"type":"code","filename":"page-11-exemple-19","language":"javascript","code":"})"},
      {"type":"code","filename":"page-11-exemple-20","language":"javascript","code":"})"},
      {"type":"image","src":"images/laconsole/vitest-p011.jpg","alt":"Page originale de Vitest.pdf - page 11"},
      {"type":"h","text":"Page 12"},
      {"type":"p","text":"Vous remarquez ici qu’il est possible de spéciﬁer plusieurs assert  au sein d’un"},
      {"type":"h","text":"seul test. Cela signiﬁe que toutes les assertions doivent être vraies pour que le"},
      {"type":"p","text":"test soit passé avec succès."},
      {"type":"p","text":"Consulter la\n de assert() ."},
      {"type":"p","text":"documentation ofﬁcielle"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-12-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Expect VS Assert"},
      {"type":"p","text":"Opposons dans un tableau comparatif ces deux approches :"},
      {"type":"p","text":"Critère\nexpect()\nassert()"},
      {"type":"h","text":"Chaînage Oui Non"},
      {"type":"p","text":"Syntaxe\nSyntaxe expressive\nSyntaxe traditionnelle"},
      {"type":"p","text":"Lisibilité\nFluide et lisible\nExplicite mais peut être verbeuse"},
      {"type":"p","text":"Usage\nPréféré par ceux appréciant la syntaxe"},
      {"type":"p","text":"Préféré par ceux habitués aux"},
      {"type":"p","text":"expressive ou venant de contextes\nutilisant\n ou"},
      {"type":"p","text":"frameworks traditionnels"},
      {"type":"image","src":"images/laconsole/vitest-p012.jpg","alt":"Page originale de Vitest.pdf - page 12"},
      {"type":"h","text":"Page 13"},
      {"type":"code","filename":"page-13-exemple-1","language":"javascript","code":"Exemples\nexpect(foo).to.be.a('string')\n(Chai) ou"},
      {"type":"code","filename":"page-13-exemple-2","language":"javascript","code":"assert.typeOf(foo,"},
      {"type":"p","text":"'string')  ou"},
      {"type":"code","filename":"page-13-exemple-3","language":"javascript","code":"expect(foo).toBeTypeOf('string')"},
      {"type":"code","filename":"page-13-exemple-4","language":"javascript","code":"assert.typeOf(foo,"},
      {"type":"p","text":"(Jest)"},
      {"type":"p","text":"'string')"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"code","filename":"page-13-exemple-5","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"S'inscrire"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Gestion des erreurs"},
      {"type":"p","text":"Les méthodes expect()  et assert()  prennent en charge les messages d’erreur"},
      {"type":"h","text":"personnalisés."},
      {"type":"p","text":"Si une assertion échoue, alors un message d’erreur accompagnera le résultat du"},
      {"type":"p","text":"test dans le terminal."},
      {"type":"p","text":"Avec expect()  :"},
      {"type":"image","src":"images/laconsole/vitest-p013.jpg","alt":"Page originale de Vitest.pdf - page 13"},
      {"type":"h","text":"Page 14"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Chai API"},
      {"type":"code","filename":"page-14-exemple-1","language":"javascript","code":"expect(foo, \"foo devrait être vrai\").to.be.true;"},
      {"type":"p","text":"// Jest API"},
      {"type":"code","filename":"page-14-exemple-2","language":"javascript","code":"expect(foo, \"foo devrait être vrai\").toBe(true);"},
      {"type":"p","text":"Avec assert()  :"},
      {"type":"p","text":"copier"},
      {"type":"p","text":"// Approche traditionnelle"},
      {"type":"code","filename":"page-14-exemple-3","language":"javascript","code":"assert(foo === true, \"foo devrait être vrai\");"},
      {"type":"p","text":"// Approche par méthode spécifique"},
      {"type":"code","filename":"page-14-exemple-4","language":"javascript","code":"assert.isTrue(foo, \"foo devrait être vrai\");"},
      {"type":"p","text":"Précédent :\n2. Structurer ses\nTests\n〈"},
      {"type":"image","src":"images/laconsole/vitest-p014.jpg","alt":"Page originale de Vitest.pdf - page 14"},
      {"type":"h","text":"Page 15"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"+"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des"},
      {"type":"p","text":"@"},
      {"type":"p","text":"LEGO. Plus tard, je découvre le dev, des LEGO où les briques\nsont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et"},
      {"type":"p","text":""},
      {"type":"p","text":"sur laConsole."},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/vitest-p015.jpg","alt":"Page originale de Vitest.pdf - page 15"},
      {"type":"h","text":"Page 16"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"Vitest › Initialisation"},
      {"type":"h","text":""},
      {"type":"p","text":"Commençons par installer et conﬁgurer le framework de test"},
      {"type":"p","text":"Vitest dans notre projet."},
      {"type":"h","text":"avr. 2024 ■■■Avancé 3 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nTESTER SON CODE AVEC LE FRAMEWORK VITEST\n/ 1. INITIALISATION"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"h","text":"Installation"},
      {"type":"p","text":"L’installation de Vitest nécessite d’avoir préalablement installé le bundler"},
      {"type":"p","text":"Vite"},
      {"type":"p","text":"dans votre projet."},
      {"type":"image","src":"images/laconsole/vitest-p016.jpg","alt":"Page originale de Vitest.pdf - page 16"},
      {"type":"h","text":"Page 17"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-17-exemple-1","language":"bash","code":"npm i vite"},
      {"type":"p","text":"Il est désormais temps d’installer\n avec :"},
      {"type":"p","text":"Vitest"},
      {"type":"p","text":"copier"},
      {"type":"code","filename":"page-17-exemple-2","language":"bash","code":"npm i --save-dev vitest"},
      {"type":"p","text":"Vous remarquerez l’emploi du --save-dev  aﬁn d’enregistrer vitest  comme une"},
      {"type":"p","text":"dépendance de développement dans"},
      {"type":"p","text":"package.json ."},
      {"type":"code","filename":"page-17-exemple-3","language":"bash","code":"&\nLibre à vous d’utiliser un autre gestionnaire de dépendances tel que yarn ."},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-17-exemple-4","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Conﬁguration"},
      {"type":"image","src":"images/laconsole/vitest-p017.jpg","alt":"Page originale de Vitest.pdf - page 17"},
      {"type":"h","text":"Page 18"},
      {"type":"h","text":"Conﬁgurer une commande de test"},
      {"type":"p","text":"La première chose à conﬁgurer dans notre projet est la commande permettant de"},
      {"type":"p","text":"lancer nos tests. Pour cela, rendez-vous dans le ﬁchier"},
      {"type":"p","text":"package.json  et"},
      {"type":"code","filename":"page-18-exemple-1","language":"bash","code":"ajoutez un nouveau script npm run ***  dans la propriété scripts  :"},
      {"type":"p","text":"package.json\ncopier"},
      {"type":"code","filename":"page-18-exemple-2","language":"javascript","code":"{"},
      {"type":"p","text":"..."},
      {"type":"code","filename":"page-18-exemple-3","language":"javascript","code":"\"scripts\": {"},
      {"type":"p","text":"\"test\": \"vitest\"\n+"},
      {"type":"code","filename":"page-18-exemple-4","language":"javascript","code":"}"},
      {"type":"code","filename":"page-18-exemple-5","language":"javascript","code":"}"},
      {"type":"code","filename":"page-18-exemple-6","language":"bash","code":"Désormais, npm run test  permettra d’exécuter Vitest sur vos futurs ﬁchiers de"},
      {"type":"p","text":"test."},
      {"type":"p","text":"Vous pouvez d’ailleurs exécuter cette commande et constater le message"},
      {"type":"h","text":"&"},
      {"type":"p","text":"d’erreur indiquant qu’aucun ﬁchier de test n’a été trouvé."},
      {"type":"h","text":"Fichier de conﬁguration"},
      {"type":"h","text":"La conﬁguration de Vitest se base sur la conﬁguration de Vite, déﬁnie dans le"},
      {"type":"p","text":"ﬁchier"},
      {"type":"p","text":"vite.config.js  s’il existe. De ce fait, Vitest prendra en compte les"},
      {"type":"p","text":"options de build existantes ainsi que les éventuels plugins utilisés ( Vue , Legacy ,"},
      {"type":"p","text":"React …)."},
      {"type":"image","src":"images/laconsole/vitest-p018.jpg","alt":"Page originale de Vitest.pdf - page 18"},
      {"type":"h","text":"Page 19"},
      {"type":"h","text":"Déﬁnir une propriété test  dans vite.config"},
      {"type":"p","text":"Si vous utilisez Vite en tant que solution de build, vous pouvez conﬁgurer Vitest en"},
      {"type":"p","text":"ajoutant une propriété test  à l’intérieur du ﬁchier"},
      {"type":"p","text":"vite.config.js ."},
      {"type":"p","text":"vite.conﬁg.js\ncopier"},
      {"type":"code","filename":"page-19-exemple-1","language":"javascript","code":"import { defineConfig } from 'vite'"},
      {"type":"code","filename":"page-19-exemple-2","language":"javascript","code":"export default defineConfig({"},
      {"type":"code","filename":"page-19-exemple-3","language":"javascript","code":"test: {"},
      {"type":"p","text":"// Ma configuration Vitest"},
      {"type":"code","filename":"page-19-exemple-4","language":"javascript","code":"},"},
      {"type":"code","filename":"page-19-exemple-5","language":"javascript","code":"})"},
      {"type":"p","text":"De nombreuses options de conﬁguration sont disponibles, comme par exemple :"},
      {"type":"p","text":"globals  : permet de déﬁnir des variables globales disponibles dans tous les"},
      {"type":"p","text":"tests pour éviter les imports manuels."},
      {"type":"h","text":"environment  : déﬁnit l’environnement d’exécution des tests (par exemple,"},
      {"type":"p","text":"node , jsdom )."},
      {"type":"p","text":"includes  : spéciﬁe un ensemble de ﬁchiers ou de dossiers à inclure dans"},
      {"type":"p","text":"l’exécution des tests."},
      {"type":"p","text":"excludes  : spéciﬁe un ensemble de ﬁchiers ou de dossiers à exclure dans"},
      {"type":"p","text":"l’exécution des tests."},
      {"type":"p","text":"Etc."},
      {"type":"image","src":"images/laconsole/vitest-p019.jpg","alt":"Page originale de Vitest.pdf - page 19"},
      {"type":"h","text":"Page 20"},
      {"type":"p","text":"Les options de conﬁguration de Vitest sont"},
      {"type":"p","text":"détaillées dans la documentation"},
      {"type":"p","text":"ofﬁcielle"},
      {"type":"p","text":"."},
      {"type":"p","text":"Vitest propose une conﬁguration par défaut assez complète, déﬁnir des options de"},
      {"type":"p","text":"conﬁguration est donc purement optionnel."},
      {"type":"p","text":"La documentation de Vitest recommande la plupart du temps cette"},
      {"type":"h","text":"&"},
      {"type":"p","text":"approche, consistant à conﬁgurer Vitest dans le ﬁchier"},
      {"type":"p","text":"vite.config.js ."},
      {"type":"h","text":"Créer un ﬁchier vitest.config"},
      {"type":"p","text":"Vitest propose une seconde approche consistant à créer un ﬁchier de conﬁguration"},
      {"type":"p","text":"dédié à Vitest, nommé"},
      {"type":"p","text":"vitest.config.js . La conﬁguration de Vitest sera"},
      {"type":"p","text":"toujours déﬁnie au sein d’une propriété test ."},
      {"type":"p","text":"vitest.conﬁg.js\ncopier"},
      {"type":"code","filename":"page-20-exemple-1","language":"javascript","code":"import { defineConfig } from 'vitest/config'"},
      {"type":"code","filename":"page-20-exemple-2","language":"javascript","code":"export default defineConfig({"},
      {"type":"code","filename":"page-20-exemple-3","language":"javascript","code":"test: {"},
      {"type":"p","text":"// Ma configuration Vitest"},
      {"type":"code","filename":"page-20-exemple-4","language":"javascript","code":"},"},
      {"type":"code","filename":"page-20-exemple-5","language":"javascript","code":"})"},
      {"type":"image","src":"images/laconsole/vitest-p020.jpg","alt":"Page originale de Vitest.pdf - page 20"},
      {"type":"h","text":"Page 21"},
      {"type":"p","text":"vitest.config.js  a la priorité la plus élevée et l’emportera sur la"},
      {"type":"p","text":"conﬁguration de"},
      {"type":"p","text":"vite.config.js . Cela signiﬁe que si vous"},
      {"type":"h","text":"⚠"},
      {"type":"p","text":"choisissez de fonctionner avec 2 ﬁchiers de conﬁguration distincts,"},
      {"type":"p","text":"assurez-vous de redéﬁnir la conﬁguration de"},
      {"type":"p","text":"vite.config.js  dans"},
      {"type":"p","text":"vitest.config.js , car elle sera écrasée et non héritée."},
      {"type":"p","text":"Une réponse à cette problématique consiste à utiliser la méthode mergeConfig ,"},
      {"type":"p","text":"permettant de fusionner les conﬁgurations des 2 ﬁchiers :"},
      {"type":"p","text":"vite.conﬁg.js\ncopier"},
      {"type":"code","filename":"page-21-exemple-1","language":"javascript","code":"import { defineConfig } from 'vite'"},
      {"type":"code","filename":"page-21-exemple-2","language":"javascript","code":"import Vue from '@vitejs/plugin-vue'"},
      {"type":"code","filename":"page-21-exemple-3","language":"javascript","code":"export default defineConfig({"},
      {"type":"p","text":"plugins: [Vue()],"},
      {"type":"code","filename":"page-21-exemple-4","language":"javascript","code":"})"},
      {"type":"p","text":"vitest.conﬁg.js\ncopier"},
      {"type":"code","filename":"page-21-exemple-5","language":"javascript","code":"import { defineConfig, mergeConfig } from 'vitest/config'"},
      {"type":"code","filename":"page-21-exemple-6","language":"javascript","code":"import viteConfig from './vite.config.mjs'"},
      {"type":"code","filename":"page-21-exemple-7","language":"javascript","code":"export default mergeConfig(viteConfig, defineConfig({"},
      {"type":"code","filename":"page-21-exemple-8","language":"javascript","code":"test: {"},
      {"type":"p","text":"// Ma configuration Vitest"},
      {"type":"code","filename":"page-21-exemple-9","language":"javascript","code":"}"},
      {"type":"code","filename":"page-21-exemple-10","language":"javascript","code":"}))"},
      {"type":"image","src":"images/laconsole/vitest-p021.jpg","alt":"Page originale de Vitest.pdf - page 21"},
      {"type":"h","text":"Page 22"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-22-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Fichiers de test"},
      {"type":"h","text":"Convention"},
      {"type":"p","text":"Un test sera écrit au sein d’un ﬁchier portant l’extension .test.js  ou .spec.js ."},
      {"type":"h","text":"Arborescence"},
      {"type":"p","text":"Vitest n’impose pas d’arborescence spéciﬁque pour ranger ses ﬁchiers de test, le"},
      {"type":"h","text":"tout est qu’elle soit la plus claire et structurée possible."},
      {"type":"p","text":"Généralement, les développeurs ont tendance à créer un dossier"},
      {"type":"p","text":"tests  ou"},
      {"type":"p","text":"__tests__  à la racine, puis des sous-répertoires par fonctionnalité ou par"},
      {"type":"p","text":"arborescence miroir (du dossier contenant le code source)."},
      {"type":"p","text":"Regroupement de tests par fonctionnalités"},
      {"type":"image","src":"images/laconsole/vitest-p022.jpg","alt":"Page originale de Vitest.pdf - page 22"},
      {"type":"h","text":"Page 23"},
      {"type":"p","text":"Les sous-dossiers regroupent les tests par typologie de fonctionnalité."},
      {"type":"p","text":"tests"},
      {"type":"p","text":"├──"},
      {"type":"p","text":"auth"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"login.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"logout.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"register.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"forgot-password.test.js"},
      {"type":"p","text":"│   └── ..."},
      {"type":"p","text":"├──"},
      {"type":"p","text":"crud-products"},
      {"type":"p","text":"│   ├──"},
      {"type":"code","filename":"page-23-exemple-1","language":"javascript","code":"create.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"read.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"code","filename":"page-23-exemple-2","language":"javascript","code":"update.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"code","filename":"page-23-exemple-3","language":"javascript","code":"delete.test.js"},
      {"type":"p","text":"│   └── ..."},
      {"type":"p","text":"Regroupement de tests par arborescence miroir"},
      {"type":"p","text":"Les sous-dossiers reﬂètent la structure du code source (souvent le dossier"},
      {"type":"p","text":"src )."},
      {"type":"image","src":"images/laconsole/vitest-p023.jpg","alt":"Page originale de Vitest.pdf - page 23"},
      {"type":"h","text":"Page 24"},
      {"type":"p","text":"tests"},
      {"type":"p","text":"├──"},
      {"type":"p","text":"components"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"Button.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"Input.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"Modal.test.js"},
      {"type":"p","text":"│   └── ..."},
      {"type":"p","text":"├──"},
      {"type":"p","text":"pages"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"Home.test.js"},
      {"type":"p","text":"│   ├──"},
      {"type":"p","text":"About.test.js"},
      {"type":"p","text":"│   └── ..."},
      {"type":"p","text":"├──"},
      {"type":"p","text":"utils"},
      {"type":"p","text":"│   └──"},
      {"type":"p","text":"helpers.test.js"},
      {"type":"p","text":"Suivant :\n2. Structurer ses\nTests"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":"+"},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des\nLEGO. Plus tard, je découvre le dev, des LEGO où les briques"},
      {"type":"p","text":"@"},
      {"type":"p","text":"sont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et"},
      {"type":"p","text":""},
      {"type":"p","text":"sur laConsole."},
      {"type":"image","src":"images/laconsole/vitest-p024.jpg","alt":"Page originale de Vitest.pdf - page 24"},
      {"type":"h","text":"Page 25"},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/vitest-p025.jpg","alt":"Page originale de Vitest.pdf - page 25"},
      {"type":"h","text":"Page 26"},
      {"type":"p","text":"TOP raccourcis Emmet\nHOT"},
      {"type":"h","text":"Vitest › Structurer ses Tests"},
      {"type":"h","text":""},
      {"type":"p","text":"Focus sur les mots-clés fondamentaux « describe » et « test »"},
      {"type":"p","text":"pour structurer vos premiers tests avec le framework Vitest."},
      {"type":"h","text":"avr. 2024 ■■■Avancé 3 chapitres"},
      {"type":"p","text":"⏾"},
      {"type":"p","text":"Cours"},
      {"type":"p","text":"Commencer"},
      {"type":"p","text":"FORMATIONS\n/\nTESTER SON CODE AVEC LE FRAMEWORK VITEST\n/"},
      {"type":"p","text":"2. STRUCTURER SES TESTS"},
      {"type":"p","text":"Inscription à la\nNEWSLETTER"},
      {"type":"p","text":"SOMMAIRE\n+"},
      {"type":"h","text":"Environnement"},
      {"type":"p","text":"Avant de créer nos premiers tests, nous allons créer un ﬁchier contenant une"},
      {"type":"image","src":"images/laconsole/vitest-p026.jpg","alt":"Page originale de Vitest.pdf - page 26"},
      {"type":"h","text":"Page 27"},
      {"type":"p","text":"fonction utilitaire de manipulation de texte."},
      {"type":"p","text":"À la racine d’un projet dans lequel\n, créer un"},
      {"type":"p","text":"Vite et Vitest sont initialisés"},
      {"type":"h","text":"&"},
      {"type":"p","text":"ﬁchier"},
      {"type":"p","text":"src/utils/excerpt.js ."},
      {"type":"p","text":"src/utils/excerpt.js\ncopier"},
      {"type":"code","filename":"page-27-exemple-1","language":"javascript","code":"export default function excerpt(str, stopIndex) {"},
      {"type":"p","text":"if ("},
      {"type":"p","text":"typeof str !== \"string\" ||"},
      {"type":"p","text":"typeof stopIndex !== \"number\" ||"},
      {"type":"p","text":"stopIndex <= 0"},
      {"type":"code","filename":"page-27-exemple-2","language":"javascript","code":") {"},
      {"type":"code","filename":"page-27-exemple-3","language":"javascript","code":"return null"},
      {"type":"code","filename":"page-27-exemple-4","language":"javascript","code":"}"},
      {"type":"code","filename":"page-27-exemple-5","language":"javascript","code":"return str.length <= stopIndex"},
      {"type":"p","text":"? str"},
      {"type":"code","filename":"page-27-exemple-6","language":"javascript","code":": str.substring(0, stopIndex) + \"...\""},
      {"type":"code","filename":"page-27-exemple-7","language":"javascript","code":"}"},
      {"type":"h","text":"La fonction excerpt()  va tronquer les X premiers caractères d’une chaîne de"},
      {"type":"p","text":"caractères (utile pour limiter la taille d’une description trop longue)."},
      {"type":"image","src":"images/laconsole/vitest-p027.jpg","alt":"Page originale de Vitest.pdf - page 27"},
      {"type":"h","text":"Page 28"},
      {"type":"h","text":"Newsletter"},
      {"type":"p","text":"Inscrivez-vous pour recevoir chaque mois du"},
      {"type":"p","text":"contenu 100% dev web ! #nospam"},
      {"type":"p","text":"S'inscrire"},
      {"type":"code","filename":"page-28-exemple-1","language":"javascript","code":"KevCod3ur64@mail.com"},
      {"type":"p","text":"Quiz\nNews\nRessources"},
      {"type":"h","text":"Test de fonctions utilitaires"},
      {"type":"p","text":"Les tests seront regroupés dans le dossier"},
      {"type":"p","text":"tests ."},
      {"type":"p","text":"La première chose à faire est d’importer dans le ﬁchier de test la fonction à tester."},
      {"type":"p","text":"excerpt.test.js\ncopier"},
      {"type":"code","filename":"page-28-exemple-2","language":"javascript","code":"import excerpt from \"../src/utils/excerpt\";"},
      {"type":"p","text":"Exploitons désormais les 2 fonctions de référence : describe()  et test() ."},
      {"type":"h","text":"Déﬁnir un bloc de tests avec describe()"},
      {"type":"p","text":"La fonction describe()  va permettre de déﬁnir un bloc regroupant des tests"},
      {"type":"h","text":"relatifs à un même contexte ou une même fonctionnalité."},
      {"type":"p","text":"Importons-là :"},
      {"type":"image","src":"images/laconsole/vitest-p028.jpg","alt":"Page originale de Vitest.pdf - page 28"},
      {"type":"h","text":"Page 29"},
      {"type":"p","text":"excerpt.test.js\ncopier"},
      {"type":"code","filename":"page-29-exemple-1","language":"javascript","code":"import excerpt from \"../src/utils/excerpt\";"},
      {"type":"code","filename":"page-29-exemple-2","language":"javascript","code":"import { describe } from \"vitest\";\n+"},
      {"type":"p","text":"Dans le cas de notre fonction utilitaire excerpt() , il serait judicieux de créer un"},
      {"type":"p","text":"bloc de tests."},
      {"type":"p","text":"(\nCréer un bloc de test par fonction est une pratique courante."},
      {"type":"p","text":"excerpt.test.js\ncopier"},
      {"type":"code","filename":"page-29-exemple-3","language":"javascript","code":"import excerpt from \"../src/utils/excerpt\";"},
      {"type":"code","filename":"page-29-exemple-4","language":"javascript","code":"import { describe } from \"vitest\";"},
      {"type":"code","filename":"page-29-exemple-5","language":"javascript","code":"describe(\"Fonction excerpt()\", () => {\n+"},
      {"type":"p","text":"// Mes tests ici...\n+"},
      {"type":"code","filename":"page-29-exemple-6","language":"javascript","code":"});\n+"},
      {"type":"p","text":"Comme vous pouvez le constater, la fonction describe()  reçoit 2 arguments :"},
      {"type":"p","text":"1. Une chaîne de caractères décrivant le nom du groupe."},
      {"type":"p","text":"2. Une fonction de rappel (callback) qui contient les tests à exécuter. À l’intérieur"},
      {"type":"p","text":"de cette fonction de rappel, nous utiliserons la fonction test()  pour déﬁnir"},
      {"type":"p","text":"des tests."},
      {"type":"p","text":"La fonction describe()  agit comme un wrapper pour nos tests."},
      {"type":"image","src":"images/laconsole/vitest-p029.jpg","alt":"Page originale de Vitest.pdf - page 29"},
      {"type":"h","text":"Page 30"},
      {"type":"p","text":"La fonction describe()  permet également d’imbriquer des blocs de test aﬁn de"},
      {"type":"p","text":"sous-organiser des tests potentiellement nombreux."},
      {"type":"p","text":"excerpt.test.js\ncopier"},
      {"type":"code","filename":"page-30-exemple-1","language":"javascript","code":"import excerpt from \"../src/utils/excerpt\";"},
      {"type":"code","filename":"page-30-exemple-2","language":"javascript","code":"import { describe } from \"vitest\";"},
      {"type":"code","filename":"page-30-exemple-3","language":"javascript","code":"describe(\"Fonction excerpt()\", () => {"},
      {"type":"code","filename":"page-30-exemple-4","language":"javascript","code":"describe(\"Passer des données valides\", () => {\n+"},
      {"type":"p","text":"// Mes tests ici...\n+"},
      {"type":"code","filename":"page-30-exemple-5","language":"javascript","code":"});\n+"},
      {"type":"code","filename":"page-30-exemple-6","language":"javascript","code":"describe(\"Passer des données non valides\", () => {\n+"},
      {"type":"p","text":"// Mes tests ici...\n+"},
      {"type":"code","filename":"page-30-exemple-7","language":"javascript","code":"});\n+"},
      {"type":"code","filename":"page-30-exemple-8","language":"javascript","code":"});"},
      {"type":"h","text":"Déﬁnir un test avec test()"},
      {"type":"p","text":"La fonction test()  va permettre de déﬁnir un cas de test individuel à l’intérieur"},
      {"type":"p","text":"d’un bloc describe() ."},
      {"type":"p","text":"Importons-là :"},
      {"type":"p","text":"excerpt.test.js\ncopier"},
      {"type":"code","filename":"page-30-exemple-9","language":"javascript","code":"import excerpt from \"../src/utils/excerpt\";"},
      {"type":"code","filename":"page-30-exemple-10","language":"javascript","code":"import { describe, test } from \"vitest\";"},
      {"type":"image","src":"images/laconsole/vitest-p030.jpg","alt":"Page originale de Vitest.pdf - page 30"},
      {"type":"h","text":"Page 31"},
      {"type":"p","text":"Pour que nos tests soient qualitatifs, il est important de couvrir un maximum de"},
      {"type":"p","text":"scénarios, comme par exemple dans le cas de notre fonction excerpt()  :"},
      {"type":"p","text":"L’absence d’arguments lors de l’appel"},
      {"type":"p","text":"L’absence du second argument stopIndex"},
      {"type":"p","text":"Une valeur de 0 pour l’argument stopIndex"},
      {"type":"p","text":"Une valeur négative pour l’argument stopIndex"},
      {"type":"p","text":"Une valeur négative pour l’argument stopIndex"},
      {"type":"p","text":"Un texte plus long que l’indice du caractère de troncature"},
      {"type":"p","text":"Un texte de taille égale à l’indice du caractère de troncature"},
      {"type":"p","text":"Un texte plus court que l’indice du caractère de troncature"},
      {"type":"p","text":"excerpt.test.js\ncopier"},
      {"type":"code","filename":"page-31-exemple-1","language":"javascript","code":"import excerpt from \"../src/utils/excerpt\";"},
      {"type":"code","filename":"page-31-exemple-2","language":"javascript","code":"import { describe } from \"vitest\";"},
      {"type":"code","filename":"page-31-exemple-3","language":"javascript","code":"describe(\"Fonction excerpt()\", () => {"},
      {"type":"code","filename":"page-31-exemple-4","language":"javascript","code":"describe(\"Passer des données valides\", () => {"},
      {"type":"p","text":"test(\"Longueur du texte > Indice du caractère de tro\n+"},
      {"type":"p","text":"// Assertion...\n+"},
      {"type":"code","filename":"page-31-exemple-5","language":"javascript","code":"});\n+"},
      {"type":"p","text":"test(\"Longueur du texte = Indice du caractère de tro\n+"},
      {"type":"p","text":"// Assertion...\n+"},
      {"type":"code","filename":"page-31-exemple-6","language":"javascript","code":"});\n+"},
      {"type":"p","text":"test(\"Longueur du texte < Indice du caractère de tro\n+"},
      {"type":"p","text":"// Assertion...\n+"},
      {"type":"image","src":"images/laconsole/vitest-p031.jpg","alt":"Page originale de Vitest.pdf - page 31"},
      {"type":"h","text":"Page 32"},
      {"type":"code","filename":"page-32-exemple-1","language":"javascript","code":"});\n+"},
      {"type":"code","filename":"page-32-exemple-2","language":"javascript","code":"});"},
      {"type":"code","filename":"page-32-exemple-3","language":"javascript","code":"describe(\"Passer des données non valides\", () => {"},
      {"type":"code","filename":"page-32-exemple-4","language":"javascript","code":"test(\"Aucun argument\", () => {\n+"},
      {"type":"p","text":"// Assertion...\n+"},
      {"type":"code","filename":"page-32-exemple-5","language":"javascript","code":"});\n+"},
      {"type":"code","filename":"page-32-exemple-6","language":"javascript","code":"test(\"Pas d'argument <stopIndex>\", () => {\n+"},
      {"type":"p","text":"// Assertion...\n+"},
      {"type":"code","filename":"page-32-exemple-7","language":"javascript","code":"});\n+"},
      {"type":"code","filename":"page-32-exemple-8","language":"javascript","code":"test(\"Argument <stopIndex> = 0\", () => {\n+"},
      {"type":"p","text":"// Assertion...\n+"},
      {"type":"code","filename":"page-32-exemple-9","language":"javascript","code":"});\n+"},
      {"type":"code","filename":"page-32-exemple-10","language":"javascript","code":"test(\"Argument <stopIndex> < 0\", () => {\n+"},
      {"type":"p","text":"// Assertion...\n+"},
      {"type":"code","filename":"page-32-exemple-11","language":"javascript","code":"});\n+"},
      {"type":"code","filename":"page-32-exemple-12","language":"javascript","code":"});"},
      {"type":"code","filename":"page-32-exemple-13","language":"javascript","code":"});"},
      {"type":"p","text":"(\nCertains préfèrent utiliser l’alias it()  au lieu de test() ."},
      {"type":"p","text":"Comme vous pouvez le constater, la fonction test()  reçoit également 2"},
      {"type":"p","text":"arguments :"},
      {"type":"p","text":"1. Une chaîne de caractères décrivant le test."},
      {"type":"p","text":"2. Une fonction de rappel (callback) qui décrit le résultat attendu pour le test en"},
      {"type":"p","text":"question. Ce résultat est déﬁni au travers de ce que l’on appelle une assertion."},
      {"type":"image","src":"images/laconsole/vitest-p032.jpg","alt":"Page originale de Vitest.pdf - page 32"},
      {"type":"h","text":"Page 33"},
      {"type":"p","text":"Précédent :\n1. Initialisation\n〈"},
      {"type":"p","text":"Suivant :\n3. Ecrire des\nAssertions"},
      {"type":"p","text":"〉"},
      {"type":"h","text":"Thibaud d'Arros"},
      {"type":"p","text":","},
      {"type":"p","text":"●Fondateur"},
      {"type":"p","text":"●Développeur"},
      {"type":"p","text":"●Formateur"},
      {"type":"p","text":"L'AUTEUR"},
      {"type":"p","text":"Enfant, je passais des heures à remodeler le monde avec des\nLEGO. Plus tard, je découvre le dev, des LEGO où les briques"},
      {"type":"p","text":"@"},
      {"type":"p","text":"sont remplacées par des lignes de code. J'en fais mon métier"},
      {"type":"p","text":"puis je décide de transmettre cette passion en école de dev et\nsur laConsole."},
      {"type":"p","text":""},
      {"type":"p","text":"laConsole, plateforme d'e-learning dédiée au développement web."},
      {"type":"p","text":"M'abonner à la newsletter"},
      {"type":"p","text":"status : 200\nlaConsole © 2025"},
      {"type":"h","text":"E-LEARNING"},
      {"type":"h","text":"COMMUNAUTÉ"},
      {"type":"h","text":"LÉGAL"},
      {"type":"p","text":"Formations"},
      {"type":"p","text":"Ressources"},
      {"type":"p","text":"Mentions légales"},
      {"type":"p","text":"Cheatsheets"},
      {"type":"p","text":"A propos"},
      {"type":"p","text":"Politique de conﬁdentialité"},
      {"type":"p","text":"Blog"},
      {"type":"p","text":"Contact"},
      {"type":"p","text":"Faire ma veille"},
      {"type":"image","src":"images/laconsole/vitest-p033.jpg","alt":"Page originale de Vitest.pdf - page 33"},
    ],
  },
];

// ── Contenu fusionné depuis laConsoleArticles4Tests.ts ─────────────────────────────────────
// Articles laConsole.dev : texte intégral, code copiable et rendu visuel fidèle de chaque page.
export const laConsoleArticles4Tests: SubSection[] = [{"id":"laconsole-differences-entre-test-unitaire-d-integration-et-e2e","title":"Différences entre Test Unitaire, d'Intégration et E2E","blocks":[{"type":"note","variant":"info","title":"Source","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - 17 pages intégrées depuis laConsole.dev."},{"type":"h","text":"Page 1"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"TOP raccourcis Emmet"},{"type":"p","text":"HOT"},{"type":"h","text":"Di ! érences entre Test"},{"type":"h","text":"Unitaire, d'Intégration et"},{"type":"h","text":"E2E"},{"type":"p","text":"Découvrez les différences entre tests unitaires, d'intégration"},{"type":"p","text":"et E2E. Optimisez votre code et fiabilisez vos applications"},{"type":"p","text":"grâce à une stratégie de tests adaptée."},{"type":"p","text":"⏾"},{"type":"p","text":"oct. 2024 8 min"},{"type":"p","text":"# #"},{"type":"p","text":"debug programmation"},{"type":"p","text":"Inscription à la"},{"type":"p","text":"Dans le monde du développement, les tests sont"},{"type":"p","text":"NEWSLETTER"},{"type":"p","text":"essentiels pour garantir la qualité, la stabilité et la sécurité"},{"type":"p","text":"du code. Pourtant, avec tant de types de tests disponibles,"},{"type":"p","text":"il est facile de se perdre ! L’objectif de cet article est de"},{"type":"p","text":"vous initier aux 3 types de tests fonctionnels les plus"},{"type":"p","text":"répandus en développement web : test unitaire, test"},{"type":"p","text":"d’intégration et test E2E (End-to-End)."},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 1 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p001.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 1"},{"type":"h","text":"Page 2"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"h","text":"Pourquoi écrire des"},{"type":"h","text":"tests ?"},{"type":"p","text":"Dans le développement web, les tests jouent un rôle"},{"type":"p","text":"crucial dans l’ assurance qualité des applications."},{"type":"p","text":"Ils permettent de vérifier que le code fonctionne"},{"type":"p","text":"correctement lorsqu’il est mis à jour. Ces tests sont"},{"type":"p","text":"l’unique garantie de la stabilité d’une application et sont"},{"type":"p","text":"donc d’incontournables alliés pour la maintenance ."},{"type":"p","text":"La mise en place de tests, qu’ils soient unitaires ,"},{"type":"p","text":"d’intégration ou E2E , est essentielle pour éviter les bugs"},{"type":"p","text":"en production et fournir une expérience utilisateur fiable."},{"type":"p","text":"Bien que la mise en place d’un workflow de tests puisse"},{"type":"p","text":"sembler chronophage, outre la limitation des risques"},{"type":"p","text":"d’erreurs critiques, établir une stratégie de tests bien"},{"type":"p","text":"pensée contribue sur le long terme, à gagner du temps ."},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 2 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p002.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 2"},{"type":"h","text":"Page 3"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"h","text":"3 principaux types de"},{"type":"h","text":"tests"},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"p","text":"Lorsqu’il s’agit de vérifier la robustesse d’une application,"},{"type":"p","text":"trois types de tests se démarquent : les tests unitaires , les"},{"type":"p","text":"tests d’intégration et les tests E2E ."},{"type":"p","text":"Explorons les caractéristiques de ces types de tests,"},{"type":"p","text":"accompagnées d’exemples concrets pour appréhender leur"},{"type":"p","text":"application dans vos projets."},{"type":"h","text":"Test unitaire"},{"type":"h","text":"Rôle"},{"type":"p","text":"Le rôle des tests unitaires est de vérifier le fonctionnement"},{"type":"p","text":"de chaque fonction ou méthode de manière isolée pour"},{"type":"p","text":"s’assurer qu’elles produisent le résultat attendu, sans"},{"type":"p","text":"influence extérieure."},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 3 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p003.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 3"},{"type":"h","text":"Page 4"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"On peut assimiler un test unitaire au fait de tester"},{"type":"p","text":"#"},{"type":"p","text":"qu’une ampoule s’allume bien quand elle reçoit de"},{"type":"p","text":"l’électricité."},{"type":"p","text":"Les tests unitaires ciblent une logique précise et simple, ce"},{"type":"p","text":"qui aide à identifier rapidement les sources d’erreur dans le"},{"type":"p","text":"code."},{"type":"p","text":"Les tests unitaires sont réalisés directement dans le code ."},{"type":"p","text":"En général, chaque test est indépendant , ce qui garantit"},{"type":"p","text":"que les modifications ou erreurs dans une fonction"},{"type":"p","text":"n’impactent pas les autres."},{"type":"h","text":"Exemple concret"},{"type":"p","text":"Prenons l’exemple d’une fonction calculant le prix d’un"},{"type":"p","text":"café, auquel il est possible d’ajouter des suppléments."},{"type":"p","text":"Voici les prix fixés par supplément :"},{"type":"code","filename":"page-4-exemple-1","language":"javascript","code":"0.50 €"},{"type":"p","text":"noisette :"},{"type":"code","filename":"page-4-exemple-2","language":"javascript","code":"1.00 €"},{"type":"p","text":"caramel :"},{"type":"code","filename":"page-4-exemple-3","language":"javascript","code":"1.00 €"},{"type":"p","text":"chantilly :"},{"type":"code","filename":"page-4-exemple-4","language":"javascript","code":"calculerPrixCafe()"},{"type":"p","text":"Considérons la fonction suivante :"},{"type":"code","filename":"page-4-exemple-5","language":"javascript","code":"FONCTION calculerPrixCafe(prixBase, supplements)"},{"type":"code","filename":"page-4-exemple-6","language":"javascript","code":"// Tableau associatif des prix des suppléments"},{"type":"code","filename":"page-4-exemple-7","language":"javascript","code":"PRIX_SUPPLEMENTS = {"},{"type":"code","filename":"page-4-exemple-8","language":"javascript","code":"\"noisette\" : 0.5,"},{"type":"code","filename":"page-4-exemple-9","language":"javascript","code":"\"caramel\" : 1,"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 4 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p004.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 4"},{"type":"h","text":"Page 5"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"code","filename":"page-5-exemple-10","language":"javascript","code":"\"chantilly\" : 1,"},{"type":"code","filename":"page-5-exemple-11","language":"javascript","code":"}"},{"type":"code","filename":"page-5-exemple-12","language":"javascript","code":"// Vérifier que prixBase est un nombre positif"},{"type":"code","filename":"page-5-exemple-13","language":"javascript","code":"SI TYPE_DE(prixBase) != \"nombre\" OU prixBase"},{"type":"code","filename":"page-5-exemple-14","language":"javascript","code":"RETOURNER \"Erreur : le prix de base doit être un nombre positif.\""},{"type":"code","filename":"page-5-exemple-15","language":"javascript","code":"FIN SI"},{"type":"code","filename":"page-5-exemple-16","language":"javascript","code":"// Vérifier que supplements est un tableau"},{"type":"code","filename":"page-5-exemple-17","language":"javascript","code":"SI TYPE_DE(supplements) != \"tableau\" ALORS"},{"type":"code","filename":"page-5-exemple-18","language":"javascript","code":"RETOURNER \"Erreur : supplements doit être un tableau.\""},{"type":"code","filename":"page-5-exemple-19","language":"javascript","code":"FIN SI"},{"type":"code","filename":"page-5-exemple-20","language":"javascript","code":"// Vérifier que chaque élément du tableau est un supplément valide"},{"type":"code","filename":"page-5-exemple-21","language":"javascript","code":"POUR CHAQUE supplement DANS supplements"},{"type":"code","filename":"page-5-exemple-22","language":"javascript","code":"SI supplement PAS_DANS PRIX_SUPPLEMENTS"},{"type":"code","filename":"page-5-exemple-23","language":"javascript","code":"RETOURNER \"Erreur : supplément inconnu - \""},{"type":"code","filename":"page-5-exemple-24","language":"javascript","code":"FIN SI"},{"type":"code","filename":"page-5-exemple-25","language":"javascript","code":"FIN POUR"},{"type":"code","filename":"page-5-exemple-26","language":"javascript","code":"prixTotal = prixBase"},{"type":"code","filename":"page-5-exemple-27","language":"javascript","code":"// Calcul du prix des suppléments"},{"type":"code","filename":"page-5-exemple-28","language":"javascript","code":"POUR CHAQUE supplement DANS supplements"},{"type":"code","filename":"page-5-exemple-29","language":"javascript","code":"SI supplement DANS PRIX_SUPPLEMENTS ALORS"},{"type":"code","filename":"page-5-exemple-30","language":"javascript","code":"prixTotal = prixTotal + PRIX_SUPPLEMENTS"},{"type":"code","filename":"page-5-exemple-31","language":"javascript","code":"SINON"},{"type":"code","filename":"page-5-exemple-32","language":"javascript","code":"AFFICHER \"Supplément inconnu : \" + supplement"},{"type":"code","filename":"page-5-exemple-33","language":"javascript","code":"FIN SI"},{"type":"code","filename":"page-5-exemple-34","language":"javascript","code":"FIN POUR"},{"type":"code","filename":"page-5-exemple-35","language":"javascript","code":"RETOURNER prixTotal"},{"type":"code","filename":"page-5-exemple-36","language":"javascript","code":"FIN FONCTION"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 5 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p005.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 5"},{"type":"h","text":"Page 6"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"Un test unitaire doit donc vérifier que, pour une valeur"},{"type":"p","text":"donnée, la fonction calcule bien le prix du café. On isole"},{"type":"p","text":"donc cette fonction et on simule des entrées pour observer"},{"type":"p","text":"si elle produit les valeurs attendues."},{"type":"code","filename":"page-6-exemple-37","language":"javascript","code":"calculerPrixCafe()"},{"type":"p","text":"Test unitaire :"},{"type":"code","filename":"page-6-exemple-38","language":"javascript","code":"// Test unitaire : sans supplément"},{"type":"code","filename":"page-6-exemple-39","language":"javascript","code":"VERIFIER(calculerPrixCafe(2) = 2)"},{"type":"code","filename":"page-6-exemple-40","language":"javascript","code":"// Test unitaire : avec suppléments"},{"type":"code","filename":"page-6-exemple-41","language":"javascript","code":"VERIFIER(calculerPrixCafe(2, [\"noisette\"])"},{"type":"code","filename":"page-6-exemple-42","language":"javascript","code":"VERIFIER(calculerPrixCafe(2, [\"caramel\"])"},{"type":"code","filename":"page-6-exemple-43","language":"javascript","code":"VERIFIER(calculerPrixCafe(2, [\"chantilly\""},{"type":"code","filename":"page-6-exemple-44","language":"javascript","code":"VERIFIER(calculerPrixCafe(2, [\"noisette\","},{"type":"code","filename":"page-6-exemple-45","language":"javascript","code":"// Tests unitaires : entrées invalides"},{"type":"code","filename":"page-6-exemple-46","language":"javascript","code":"VERIFIER(calculerPrixCafe(-1) = \"Erreur : le prix de base doit être un nombre positif.\""},{"type":"code","filename":"page-6-exemple-47","language":"javascript","code":"VERIFIER(calculerPrixCafe(0) = \"Erreur : le prix de base doit être un nombre positif.\""},{"type":"code","filename":"page-6-exemple-48","language":"javascript","code":"VERIFIER(calculerPrixCafe(\"50\") = \"Erreur : le prix de base doit être un nombre positif.\""},{"type":"code","filename":"page-6-exemple-49","language":"javascript","code":"VERIFIER(calculerPrixCafe(null) = \"Erreur : le prix de base doit être un nombre positif.\""},{"type":"code","filename":"page-6-exemple-50","language":"javascript","code":"VERIFIER(calculerPrixCafe(2, \"wasabi\") = \"Erreur : supplements doit être un tableau.\""},{"type":"code","filename":"page-6-exemple-51","language":"javascript","code":"VERIFIER(calculerPrixCafe(2, [\"wasabi\"])"},{"type":"h","text":"Outils de tests unitaires"},{"type":"p","text":"Les outils permettant de faciliter l’intégration de tests"},{"type":"p","text":"unitaires au sein d’une application sont nommés"},{"type":"p","text":"frameworks de tests . Parmi les plus célèbres d’entre eux,"},{"type":"p","text":"on retrouve notamment :"},{"type":"p","text":"Jest , Mocha et Vitest pour JavaScript"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 6 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p006.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 6"},{"type":"h","text":"Page 7"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"JUnit pour Java"},{"type":"p","text":"PHPUnit pour PHP"},{"type":"p","text":"Ces frameworks permettent d’écrire des tests rapides et"},{"type":"p","text":"simples à intégrer dans un pipeline CI/CD."},{"type":"p","text":"$"},{"type":"p","text":"Découvrir le framework Vitest"},{"type":"h","text":"Test d’intégration"},{"type":"h","text":"Rôle"},{"type":"p","text":"Le rôle des tests d’intégration est de valider l’interaction"},{"type":"p","text":"entre plusieurs modules ou composants d’une application"},{"type":"p","text":"pour s’assurer qu’ils fonctionnent bien ensemble ."},{"type":"p","text":"Contrairement aux tests unitaires, qui isolent chaque"},{"type":"p","text":"fonction ou méthode, les tests d’intégration vérifient la"},{"type":"p","text":"communication et la compatibilité entre différentes parties"},{"type":"p","text":"du code."},{"type":"p","text":"On peut assimiler un test d’intégration au fait de"},{"type":"p","text":"#"},{"type":"p","text":"tester qu’une ampoule connectée à un interrupteur"},{"type":"p","text":"s’allume bien quand l’interrupteur est actionné."},{"type":"p","text":"Les tests d’intégration aident à identifier les erreurs de"},{"type":"p","text":"coordination , comme les problèmes d’interaction entre"},{"type":"p","text":"composants. Ces tests sont réalisés sur des systèmes où"},{"type":"p","text":"plusieurs modules (fonctions, base de données, APIs…)"},{"type":"p","text":"sont connectés et dépendent les uns des autres ."},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 7 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p007.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 7"},{"type":"h","text":"Page 8"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"h","text":"Exemple concret"},{"type":"p","text":"Reprenons l’exemple de notre interface permettant de"},{"type":"p","text":"commander plusieurs cafés, mais cette fois-ci, intéressons-"},{"type":"p","text":"nous à la mécanique de commande dans sa globalité,"},{"type":"p","text":"impliquant de :"},{"type":"p","text":"Calculer le prix des cafés"},{"type":"p","text":"Mettre à jour les stocks"},{"type":"code","filename":"page-8-exemple-52","language":"javascript","code":"commanderBoissons()"},{"type":"p","text":"Considérons la fonction suivante :"},{"type":"code","filename":"page-8-exemple-53","language":"javascript","code":"FONCTION commanderBoissons(boissons)"},{"type":"code","filename":"page-8-exemple-54","language":"javascript","code":"total = 0"},{"type":"code","filename":"page-8-exemple-55","language":"javascript","code":"POUR CHAQUE boisson DANS boissons FAIRE"},{"type":"code","filename":"page-8-exemple-56","language":"javascript","code":"// Vérifier le stock de la boisson"},{"type":"code","filename":"page-8-exemple-57","language":"javascript","code":"SI stock >= 1 ALORS"},{"type":"code","filename":"page-8-exemple-58","language":"javascript","code":"// Ajouter le prix de la boisson au total"},{"type":"code","filename":"page-8-exemple-59","language":"javascript","code":"total = total + calculerPrix(boisson"},{"type":"code","filename":"page-8-exemple-60","language":"javascript","code":"// Réduire le stock de la boisson"},{"type":"code","filename":"page-8-exemple-61","language":"javascript","code":"stock = stock - 1"},{"type":"code","filename":"page-8-exemple-62","language":"javascript","code":"SINON"},{"type":"code","filename":"page-8-exemple-63","language":"javascript","code":"// Gérer le cas où le stock est insuffisant"},{"type":"code","filename":"page-8-exemple-64","language":"javascript","code":"AFFICHER \"Stock insuffisant pour \" +"},{"type":"code","filename":"page-8-exemple-65","language":"javascript","code":"FIN SI"},{"type":"code","filename":"page-8-exemple-66","language":"javascript","code":"FIN POUR"},{"type":"code","filename":"page-8-exemple-67","language":"javascript","code":"RETOURNER total"},{"type":"code","filename":"page-8-exemple-68","language":"javascript","code":"FIN FONCTION"},{"type":"code","filename":"page-8-exemple-69","language":"javascript","code":"commanderBoissons()"},{"type":"p","text":"Test d’intégration : :"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 8 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p008.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 8"},{"type":"h","text":"Page 9"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"code","filename":"page-9-exemple-70","language":"javascript","code":"boissons = ["},{"type":"code","filename":"page-9-exemple-71","language":"javascript","code":"{ base: 2 },"},{"type":"code","filename":"page-9-exemple-72","language":"javascript","code":"{ base: 2, supplement: [\"noisette\", \"chantilly\""},{"type":"code","filename":"page-9-exemple-73","language":"javascript","code":"]"},{"type":"code","filename":"page-9-exemple-74","language":"javascript","code":"stock = 3"},{"type":"code","filename":"page-9-exemple-75","language":"javascript","code":"montant = commanderBoisson(boissons)"},{"type":"code","filename":"page-9-exemple-76","language":"javascript","code":"// Test d'intégration"},{"type":"code","filename":"page-9-exemple-77","language":"javascript","code":"VERIFIER("},{"type":"code","filename":"page-9-exemple-78","language":"javascript","code":"montant = 5.5 ET"},{"type":"code","filename":"page-9-exemple-79","language":"javascript","code":"stock = 1"},{"type":"code","filename":"page-9-exemple-80","language":"javascript","code":");"},{"type":"p","text":"Il ne s’agit pas d’un test unitaire mais bien d’un test"},{"type":"p","text":"d’intégration car c’est la mécanique de commande qui est"},{"type":"p","text":"testée dans son ensemble . Le test vérifie que les"},{"type":"p","text":"différentes unités ou modules du système interagissent"},{"type":"p","text":"correctement."},{"type":"code","filename":"page-9-exemple-81","language":"javascript","code":"commanderBoissons()"},{"type":"p","text":": Cette fonction gère la"},{"type":"p","text":"commande de boissons, vérifie le stock, calcule le prix"},{"type":"p","text":"total, et réduit le stock."},{"type":"code","filename":"page-9-exemple-82","language":"javascript","code":"calculerPrix()"},{"type":"p","text":": Cette fonction est appelée pour"},{"type":"p","text":"calculer le prix de chaque boisson."},{"type":"code","filename":"page-9-exemple-83","language":"javascript","code":"stock"},{"type":"p","text":"Variable : Cette variable contient le stock de"},{"type":"p","text":"boissons disponibles."},{"type":"p","text":"Ainsi, ce test d’intégration permet de vérifier plusieurs"},{"type":"p","text":"mécanismes :"},{"type":"p","text":"1. Interactions entre composants : Le test vérifie que la"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 9 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p009.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 9"},{"type":"h","text":"Page 10"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"code","filename":"page-10-exemple-84","language":"javascript","code":"commanderBoissons()"},{"type":"p","text":"fonction interagit"},{"type":"code","filename":"page-10-exemple-85","language":"javascript","code":"stock"},{"type":"p","text":"correctement avec la variable globale et la"},{"type":"code","filename":"page-10-exemple-86","language":"javascript","code":"calculerPrix()"},{"type":"p","text":"fonction ."},{"type":"code","filename":"page-10-exemple-87","language":"javascript","code":"stock"},{"type":"p","text":"2. État partagé : Le test vérifie que l’état partagé"},{"type":"p","text":"est correctement mis à jour après l’exécution de la"},{"type":"code","filename":"page-10-exemple-88","language":"javascript","code":"commanderBoissons()"},{"type":"p","text":"fonction ."},{"type":"p","text":"3. Résultat global : Le test vérifie que le montant de la"},{"type":"code","filename":"page-10-exemple-89","language":"javascript","code":"montant"},{"type":"p","text":"commande est correct."},{"type":"h","text":"Outils de tests d’intégration"},{"type":"p","text":"Au-delà de simples test unitaires, les frameworks de tests"},{"type":"p","text":"tels que Jest, Mocha, Vitest, JUnit ou encore PHPUnit"},{"type":"p","text":"proposent des fonctionnalités robustes pour la création et"},{"type":"p","text":"l’exécution de tests d’intégration."},{"type":"h","text":"Test E2E (End-to-End)"},{"type":"h","text":"Rôle"},{"type":"p","text":"Le rôle des tests E2E (« End-to-End » ou en français « de"},{"type":"p","text":"bout en bout ») est de vérifier le fonctionnement global de"},{"type":"p","text":"l’application du point de vue de l’utilisateur final."},{"type":"p","text":"On peut assimiler un test End-to-End au fait de"},{"type":"p","text":"tester le fonctionnement d’une ampoule quand un"},{"type":"p","text":"utilisateur entre dans une pièce, appuie sur un"},{"type":"p","text":"#"},{"type":"p","text":"interrupteur, et que l’ampoule s’allume. Ensuite,"},{"type":"p","text":"l’utilisateur actionne à nouveau l’interrupteur et on"},{"type":"p","text":"vérifie que l’ampoule s’éteint correctement."},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 10 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p010.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 10"},{"type":"h","text":"Page 11"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"Ces tests simulent des scénarios d’utilisation réels et"},{"type":"p","text":"vérifient que toutes les parties de l’application"},{"type":"p","text":"fonctionnent correctement ensemble . Il peut par exemple"},{"type":"p","text":"s’agir de :"},{"type":"p","text":"Commande d’un produit : Vérifier le parcours complet"},{"type":"p","text":"d’achat, de la recherche au paiement, pour assurer la"},{"type":"p","text":"fluidité."},{"type":"p","text":"Formulaire de contact : Tester la soumission et"},{"type":"p","text":"validation du formulaire pour garantir l’envoi des"},{"type":"p","text":"informations."},{"type":"p","text":"Inscription et connexion : S’assurer que l’utilisateur"},{"type":"p","text":"peut créer un compte et se connecter facilement."},{"type":"p","text":"Gestion du panier : Valider l’ajout, la modification et la"},{"type":"p","text":"suppression d’articles pour un processus d’achat"},{"type":"p","text":"cohérent."},{"type":"p","text":"Etc."},{"type":"h","text":"Formations"},{"type":"h","text":"gratuites"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Formez-vous au dev web avec 20+"},{"type":"p","text":"formations 100% gratuites ."},{"type":"p","text":"Réaliser des tests E2E (End-to-End) implique de simuler"},{"type":"p","text":"des interactions utilisateur réelles avec l’application…"},{"type":"p","text":"autrement dit, il est nécessaire de pouvoir déclencher des"},{"type":"p","text":"actions à travers l’interface utilisateur (UI) :"},{"type":"p","text":"Ouvrir un navigateur / Une application"},{"type":"p","text":"Accéder à une URL"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 11 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p011.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 11"},{"type":"h","text":"Page 12"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"Cliquer sur un élément de la page"},{"type":"p","text":"Ecrire dans un champ de formulaire"},{"type":"p","text":"Etc."},{"type":"h","text":"Exemple concret"},{"type":"p","text":"Gardons l’exemple de notre interface de commande de"},{"type":"p","text":"café. Un test E2E consisterait par exemple à simuler le"},{"type":"p","text":"parcours complet de commande de café par un utilisateur."},{"type":"p","text":"Test E2E : Commande de café avec suppléments :"},{"type":"code","filename":"page-12-exemple-90","language":"javascript","code":"// 1. Ouverture du navigateur"},{"type":"code","filename":"page-12-exemple-91","language":"javascript","code":"ouvrirNavigateur(\"http://monapp.com/commander\""},{"type":"code","filename":"page-12-exemple-92","language":"javascript","code":"// Test E2E"},{"type":"code","filename":"page-12-exemple-93","language":"javascript","code":"VERIFIER(window.open(true))"},{"type":"code","filename":"page-12-exemple-94","language":"javascript","code":"// 2. Sélectionner un café"},{"type":"code","filename":"page-12-exemple-95","language":"javascript","code":"cliquerSur(\"bouton-selectionner-cafe\")"},{"type":"code","filename":"page-12-exemple-96","language":"javascript","code":"// Test E2E"},{"type":"code","filename":"page-12-exemple-97","language":"javascript","code":"VERIFIER(window.contientTexte(\"Votre café a été ajouté au panier\""},{"type":"code","filename":"page-12-exemple-98","language":"javascript","code":"VERIFIER(panier.contientTexte(\"Café x1\"))"},{"type":"code","filename":"page-12-exemple-99","language":"javascript","code":"// 3. Ajouter 2 suppléments"},{"type":"code","filename":"page-12-exemple-100","language":"javascript","code":"cliquerSur(\"option-supplement-noisette\")"},{"type":"code","filename":"page-12-exemple-101","language":"javascript","code":"cliquerSur(\"option-supplement-chantilly\")"},{"type":"code","filename":"page-12-exemple-102","language":"javascript","code":"// Test E2E"},{"type":"code","filename":"page-12-exemple-103","language":"javascript","code":"VERIFIER(panier.contientTexte(\"Options (café 1) : noisette, chantilly\""},{"type":"code","filename":"page-12-exemple-104","language":"javascript","code":"// 4. Sélectionner un second café"},{"type":"code","filename":"page-12-exemple-105","language":"javascript","code":"cliquerSur(\"bouton-selectionner-cafe\")"},{"type":"code","filename":"page-12-exemple-106","language":"javascript","code":"// Test E2E"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 12 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p012.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 12"},{"type":"h","text":"Page 13"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"code","filename":"page-13-exemple-107","language":"javascript","code":"VERIFIER(window.contientTexte(\"Votre café a été ajouté au panier\""},{"type":"code","filename":"page-13-exemple-108","language":"javascript","code":"VERIFIER(panier.contientTexte(\"Café x2\"))"},{"type":"p","text":"Formations Ressources Blog"},{"type":"p","text":"laVeilleuse"},{"type":"p","text":"FREE"},{"type":"code","filename":"page-13-exemple-109","language":"javascript","code":"// 5. Finaliser la commande"},{"type":"code","filename":"page-13-exemple-110","language":"javascript","code":"cliquerSur(\"bouton-finaliser-commande\")"},{"type":"code","filename":"page-13-exemple-111","language":"javascript","code":"// Test E2E"},{"type":"p","text":""},{"type":"p","text":"SOMMAIRE"},{"type":"code","filename":"page-13-exemple-112","language":"javascript","code":"VERIFIER(window.contientTexte(\"Merci pour votre commande\""},{"type":"p","text":"Pourquoi écrire des tests ?"},{"type":"code","filename":"page-13-exemple-113","language":"javascript","code":"// Test E2E : état final de l'application"},{"type":"p","text":"3 principaux types de tests"},{"type":"code","filename":"page-13-exemple-114","language":"javascript","code":"VERIFIER("},{"type":"p","text":"Test unitaire"},{"type":"code","filename":"page-13-exemple-115","language":"javascript","code":"stock == 39 &&"},{"type":"p","text":"Rôle"},{"type":"code","filename":"page-13-exemple-116","language":"javascript","code":"commande.total == 5.5 &&"},{"type":"p","text":"Exemple concret"},{"type":"code","filename":"page-13-exemple-117","language":"javascript","code":"commande.items.contient(\"noisette\", \"chantilly\""},{"type":"p","text":"Outils de tests unitaires"},{"type":"code","filename":"page-13-exemple-118","language":"javascript","code":")"},{"type":"p","text":"Test d’intégration"},{"type":"p","text":"Rôle"},{"type":"p","text":"Exemple concret"},{"type":"p","text":"Outils de tests d’intégration"},{"type":"h","text":"Outils de tests E2E"},{"type":"p","text":"Test E2E (End-to-End)"},{"type":"p","text":"Rôle"},{"type":"p","text":"Parmi les plus célèbres outils permettant d’exécuter des"},{"type":"p","text":"Exemple concret"},{"type":"p","text":"tests E2E , on retrouve notamment :"},{"type":"p","text":"Outils de tests E2E"},{"type":"p","text":"Cypress"},{"type":"p","text":"Comparatif : Test Unitaire VS"},{"type":"p","text":"Test d’Intégration VS Test E2E"},{"type":"p","text":"Selenium"},{"type":"p","text":"Playwright"},{"type":"p","text":"Ces outils permettent d’écrire des tests E2E qui simulent"},{"type":"p","text":"des interactions utilisateur réelles et vérifient que"},{"type":"p","text":"l’application fonctionne correctement de bout en bout."},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 13 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p013.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 13"},{"type":"h","text":"Page 14"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"h","text":"Newsletter"},{"type":"p","text":"Inscrivez-vous pour recevoir"},{"type":"p","text":"chaque mois du contenu"},{"type":"p","text":"100% dev web ! #nospam"},{"type":"p","text":"S'inscrire"},{"type":"p","text":"KevCod3ur64@mail.com"},{"type":"p","text":"Quiz News Ressources"},{"type":"h","text":"Comparatif : Test"},{"type":"h","text":"Unitaire VS Test"},{"type":"h","text":"d’Intégration VS Test"},{"type":"h","text":"E2E"},{"type":"p","text":"Les tests jouent chacun un rôle clé pour garantir la qualité"},{"type":"p","text":"et la robustesse des applications . Voici un tableau"},{"type":"p","text":"comparatif mettant en lumière les caractéristiques de"},{"type":"p","text":"chacun de ces types de tests :"},{"type":"p","text":"Test"},{"type":"p","text":"Critères Test unitaire d’intégration Test E2E"},{"type":"p","text":"Environnement Code Code Environnement"},{"type":"p","text":"(exécution (exécution utilisateur"},{"type":"p","text":"isolée d’une d’interaction (navigateur,"},{"type":"p","text":"fonction) entre app mobile…)"},{"type":"p","text":"modules)"},{"type":"p","text":"Exemples Jest, Vitest, Jest, Vitest, Cypress,"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 14 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p014.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 14"},{"type":"h","text":"Page 15"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"d’outils Mocha, Mocha, JUnit, Selenium,"},{"type":"p","text":"JUnit, PHPUnit Playwright"},{"type":"p","text":"PHPUnit"},{"type":"p","text":"Mise en place Rapide Moyenne - Plus longue -"},{"type":"p","text":"nécessite des configuration"},{"type":"p","text":"dépendances réaliste"},{"type":"p","text":"contrôlées complexe"},{"type":"p","text":"Réalisme Bas - teste Moyen - Élevé - simule"},{"type":"p","text":"des teste des des scénarios"},{"type":"p","text":"éléments interactions réels"},{"type":"p","text":"isolés spécifiques"},{"type":"p","text":"Isolation Très isolé Partiellement Non isolé -"},{"type":"p","text":"(composants isolé système"},{"type":"p","text":"individuels) (groupes de complet"},{"type":"p","text":"modules)"},{"type":"p","text":"En résumé, les tests unitaires vérifient les composants"},{"type":"p","text":"individuels, les tests d’intégration valident les interactions"},{"type":"p","text":"entre modules, et les tests E2E assurent que les parcours"},{"type":"p","text":"utilisateur complets fonctionnent de bout en bout."},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 15 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p015.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 15"},{"type":"h","text":"Page 16"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"Thibaud d'Arros"},{"type":"p","text":"Fondateur Développeur"},{"type":"p","text":"● ●"},{"type":"p","text":"Formateur"},{"type":"p","text":"●"},{"type":"p","text":"'"},{"type":"p","text":"L"},{"type":"p","text":"Enfant, je passais des heures à"},{"type":"p","text":"'"},{"type":"p","text":"A"},{"type":"p","text":"U"},{"type":"p","text":"remodeler le monde avec des"},{"type":"p","text":"@"},{"type":"p","text":"T"},{"type":"p","text":"LEGO. Plus tard, je découvre le"},{"type":"p","text":"E"},{"type":"p","text":"U"},{"type":"p","text":"dev, des LEGO où les briques"},{"type":"p","text":"R"},{"type":"p","text":"sont remplacées par des lignes"},{"type":"p","text":""},{"type":"p","text":"de code. J'en fais mon métier"},{"type":"p","text":"puis je décide de transmettre"},{"type":"p","text":"cette passion en école de dev et"},{"type":"p","text":"sur laConsole."},{"type":"h","text":"Lire aussi"},{"type":"p","text":"Clean Code"},{"type":"p","text":"Différences"},{"type":"p","text":"Définition : : Ecrire du"},{"type":"p","text":"entre"},{"type":"p","text":"le Sucre Code Lisible"},{"type":"p","text":"Librairie et"},{"type":"p","text":"Syntaxique et"},{"type":"p","text":"Framework"},{"type":"p","text":"Maintenable"},{"type":"p","text":"programmation culture web programmation"},{"type":"p","text":"culture web programmation debug"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 16 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p016.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 16"},{"type":"h","text":"Page 17"},{"type":"p","text":"Différences entre Test Unitaire, d'Intégration et E2E - laConsole 02/03/2025 11 : 00"},{"type":"p","text":"E-LEARNING COMMUNAUTÉ LÉGAL"},{"type":"p","text":"Formations Ressources Mentions"},{"type":"p","text":"laConsole, plateforme d'e-learning dédiée au"},{"type":"p","text":"légales"},{"type":"p","text":"Cheatsheets A propos"},{"type":"p","text":"développement web."},{"type":"p","text":"Politique de"},{"type":"p","text":"Blog Contact"},{"type":"p","text":"M'abonner à la newsletter"},{"type":"p","text":"confidentialité"},{"type":"p","text":"Faire ma veille"},{"type":"p","text":"status : 200 laConsole © 2025"},{"type":"p","text":"https://laconsole.dev/blog/differences-test-unitaire-integration-e2e Page 17 sur 17"},{"type":"image","src":"images/laconsole-articles-4/differences-entre-test-unitaire-d-integration-et-e2e-laconsole-p017.jpg","alt":"Page originale de Différences entre Test Unitaire, d'Intégration et E2E - laConsole.pdf - page 17"}]}];

// ── Contenu fusionné depuis laConsoleArticles7Tests.ts ─────────────────────────────────────
// Articles laConsole.dev : texte intégral, code copiable et rendu visuel fidèle de chaque page.
export const laConsoleArticles7Tests: SubSection[] = [{"id":"laconsole-top-ressources-pour-dev-test-debugging","title":"Top Ressources pour Dev : Test & Debugging","blocks":[{"type":"note","variant":"info","title":"Source","text":"Top Ressources pour Dev : Test & Debugging - laConsole.pdf - 3 pages intégrées depuis laConsole.dev."},{"type":"h","text":"Page 1"},{"type":"p","text":"Top Ressources pour Dev : Test & Debugging - laConsole 02/03/2025 11 : 15"},{"type":"p","text":"TOP raccourcis Emmet"},{"type":"p","text":"HOT"},{"type":"p","text":"Formations Ressources Blog"},{"type":"p","text":"laVeilleuse"},{"type":"p","text":"FREE"},{"type":"h","text":"Test & Debugging"},{"type":"p","text":"Découvrez des outils puissants pour tester et déboguer"},{"type":"p","text":"votre code afin de garantir à vos sites web et APIs une"},{"type":"p","text":"qualité irréprochable."},{"type":"h","text":"Airbrake BrowserStack Bugfender"},{"type":"p","text":"Suivi des erreurs Tests cross- Journalisation à"},{"type":"p","text":"en temps réel browser sur des distance des"},{"type":"p","text":"pour applications environnements erreurs sur"},{"type":"p","text":"virtuels mobiles"},{"type":"p","text":"Découvrir"},{"type":"p","text":"Découvrir Découvrir"},{"type":"h","text":"Cucumber Cypress Hoppscotch"},{"type":"p","text":"Outil Outil de tests E2E Plateforme en"},{"type":"p","text":"d’automatisation automatisés au ligne de test"},{"type":"p","text":"de tests sein du d'API"},{"type":"p","text":"navigateur"},{"type":"p","text":"Découvrir Découvrir"},{"type":"p","text":"Découvrir"},{"type":"h","text":"HTTPie Insomnia Jam"},{"type":"p","text":"Plateforme/CLI de Plateforme de Extension"},{"type":"p","text":"https://laconsole.dev/ressources/test-debug Page 1 sur 3"},{"type":"image","src":"images/laconsole-articles-7/top-ressources-pour-dev-test-debugging-laconsole-p001.jpg","alt":"Page originale de Top Ressources pour Dev : Test & Debugging - laConsole.pdf - page 1"},{"type":"h","text":"Page 2"},{"type":"p","text":"Top Ressources pour Dev : Test & Debugging - laConsole 02/03/2025 11 : 15"},{"type":"p","text":"test d'API test d'API navigateur de"},{"type":"p","text":"report de bugs"},{"type":"p","text":"Découvrir Découvrir"},{"type":"p","text":"Découvrir"},{"type":"h","text":"Jest JUnit Mocha"},{"type":"p","text":"Framework JS de Framework Java Framework JS de"},{"type":"p","text":"tests unitaires et de tests unitaires tests unitaires et"},{"type":"p","text":"d'intégration et d'intégration d'intégration"},{"type":"p","text":"Découvrir Découvrir Découvrir"},{"type":"h","text":"Pest PHPUnit Playwright"},{"type":"p","text":"Framework PHP Framework PHP Outil de tests E2E"},{"type":"p","text":"de tests unitaires de tests unitaires automatisés"},{"type":"p","text":"et d'intégration et d'intégration polyvalent"},{"type":"p","text":"Découvrir Découvrir Découvrir"},{"type":"h","text":"Postman Puppeteer Selenium"},{"type":"p","text":"Plateforme de Automatisation Outil de tests E2E"},{"type":"p","text":"test d'API de tests dans automatisés au"},{"type":"p","text":"Chrome et Firefox sein du"},{"type":"p","text":"Découvrir"},{"type":"p","text":"avec JS navigateur"},{"type":"p","text":"Découvrir Découvrir"},{"type":"h","text":"Vitest"},{"type":"p","text":"Framework JS de"},{"type":"p","text":"tests basé sur"},{"type":"p","text":"Vite"},{"type":"p","text":"Découvrir"},{"type":"h","text":"Outils de tests et de debug : votre assurance"},{"type":"h","text":"qualité"},{"type":"p","text":"https://laconsole.dev/ressources/test-debug Page 2 sur 3"},{"type":"image","src":"images/laconsole-articles-7/top-ressources-pour-dev-test-debugging-laconsole-p002.jpg","alt":"Page originale de Top Ressources pour Dev : Test & Debugging - laConsole.pdf - page 2"},{"type":"h","text":"Page 3"},{"type":"p","text":"Top Ressources pour Dev : Test & Debugging - laConsole 02/03/2025 11 : 15"},{"type":"p","text":"Les tests et le débogage sont essentiels pour garantir la qualité de votre code et la"},{"type":"p","text":"fiabilité de vos applications web et APIs."},{"type":"p","text":"Découvrez des frameworks, plateformes et outils de débogage puissants pour"},{"type":"p","text":"automatiser vos tests fonctionnels : unitaires, d'intégration et E2E."},{"type":"p","text":"Explorez les plateformes essentielles pour tester vos endpoints d'API."},{"type":"p","text":"E- COMMUNAUTÉ LÉGAL"},{"type":"p","text":"LEARNING"},{"type":"p","text":"Ressources Mentions"},{"type":"p","text":"laConsole, plateforme d'e-learning"},{"type":"p","text":"Formations légales"},{"type":"p","text":"A propos"},{"type":"p","text":"dédiée au développement web."},{"type":"p","text":"Cheatsheets Politique de"},{"type":"p","text":"Contact"},{"type":"p","text":"M'abonner à la newsletter"},{"type":"p","text":"confidentialité"},{"type":"p","text":"Blog"},{"type":"p","text":"Faire ma"},{"type":"p","text":"status laConsole ©"},{"type":"p","text":"veille"},{"type":"p","text":"200"},{"type":"p","text":": 2025"},{"type":"p","text":"https://laconsole.dev/ressources/test-debug Page 3 sur 3"},{"type":"image","src":"images/laconsole-articles-7/top-ressources-pour-dev-test-debugging-laconsole-p003.jpg","alt":"Page originale de Top Ressources pour Dev : Test & Debugging - laConsole.pdf - page 3"}]}];

export const tests: Section = {
  id: "tests",
  title: "Tests",
  icon: "FlaskConical",
  tags: ["js", "python", "ts"],
  subsections: [
    {
      id: "tests-organisation-poo",
      title: "Organisation des tests en POO",
      blocks: [
        { type: "p", text: "Les tests sont regroupés dans des classes pour réutiliser du code, organiser proprement les tests et partager des attributs et méthodes." },
        { type: "note", variant: "info", title: "Règles courantes", text: "Une classe de test commence par Test (ex : TestUser). Une méthode de test commence par test_. Si ton application contient plusieurs classes → créer plusieurs classes de test séparées." },
      ],
    },
    {
      id: "tests-contexte-setup-teardown",
      title: "Gestion du contexte des tests",
      blocks: [
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────┐
│           CYCLE DE VIE D'UN TEST                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│   setup()       ──►  TEST  ──►  teardown()          │
│   (avant)              │        (après)             │
│                        │                            │
│   Prépare l'env.       │        Nettoie             │
│   Crée données         │        Supprime données    │
│   Init objets          │        temporaires         │
└─────────────────────────────────────────────────────┘`,
        },
        { type: "h", text: "setup()" },
        { type: "list", items: [
          "Exécutée avant chaque test",
          "Permet de préparer l'environnement",
          "Exemple : créer des données, initialiser des objets",
        ]},
        { type: "h", text: "teardown()" },
        { type: "list", items: [
          "Exécutée après chaque test",
          "Permet de nettoyer",
          "Exemple : supprimer des données temporaires",
        ]},
        { type: "h", text: "Autres variantes" },
        { type: "table", headers: ["Fonction", "Niveau"], rows: [
          ["setup_module() / teardown_module()", "Module"],
          ["setup_class() / teardown_class()", "Classe"],
          ["setup() / teardown()", "Méthode (chaque test)"],
        ]},
      ],
    },
    {
      id: "tests-code-robuste",
      title: "Rendre son code robuste",
      blocks: [
        { type: "p", text: "Les tests servent à : vérifier que le code fonctionne correctement, éviter les bugs, prévenir les régressions et sécuriser les mises à jour." },
      ],
    },
    {
      id: "tests-types-vue-ensemble",
      title: "Types de tests — Vue d'ensemble",
      blocks: [
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────────────┐
│                    PYRAMIDE DES TESTS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                         /\\                                      │
│                        /  \\  Tests fonctionnels (E2E)           │
│                       / UI \\  → Simuler utilisateur réel        │
│                      /──────\\                                   │
│                     /        \\  Tests d'intégration             │
│                    / Intégrat. \\ → Plusieurs modules ensemble   │
│                   /────────────\\                                │
│                  /              \\  Tests unitaires              │
│                 /    Unitaires   \\ → Une seule fonction         │
│                /──────────────────\\                             │
│                                                                 │
│   Plus on monte : + lent, + complexe, + coûteux                │
│   Plus on descend : + rapide, + isolé, + ciblé                  │
└─────────────────────────────────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "tests-unitaires",
      title: "Tests unitaires",
      blocks: [
        { type: "p", text: "Les tests unitaires vérifient une petite partie du code (fonction, composant)." },
        { type: "h", text: "Caractéristiques" },
        { type: "list", items: ["Testent une seule fonction", "Très rapides", "Isolés", "Faciles à automatiser"] },
        { type: "h", text: "Objectif" },
        { type: "list", items: ["Vérifier le comportement attendu", "Détecter les erreurs tôt", "Sécuriser les modifications"] },
      ],
    },
    {
      id: "tests-integration",
      title: "Tests d'intégration",
      blocks: [
        { type: "p", text: "Les tests d'intégration vérifient que plusieurs parties du système fonctionnent ensemble." },
        { type: "h", text: "Caractéristiques" },
        { type: "list", items: [
          "Testent plusieurs modules ensemble",
          "Incluent parfois des API ou bases de données",
          "Plus complexes que les tests unitaires",
        ]},
        { type: "h", text: "Objectif" },
        { type: "list", items: ["Vérifier la communication entre composants", "Détecter les erreurs d'interconnexion"] },
      ],
    },
    {
      id: "tests-fonctionnels",
      title: "Tests fonctionnels",
      blocks: [
        { type: "p", text: "Les tests fonctionnels vérifient un parcours utilisateur complet." },
        { type: "h", text: "Caractéristiques" },
        { type: "list", items: [
          "Simulation d'un utilisateur réel",
          "Test de bout en bout (end-to-end)",
          "Se fait via interface (web ou mobile)",
        ]},
        { type: "h", text: "Objectif" },
        { type: "list", items: ["Valider que l'application fonctionne pour l'utilisateur final"] },
      ],
    },
    {
      id: "tests-mise-en-place",
      title: "Mettre en place des tests",
      blocks: [
        { type: "p", text: "Les tests sont des fichiers de code supplémentaires qui permettent de vérifier automatiquement le bon fonctionnement d'une application. Ils sont exécutés par des outils spécialisés (tests unitaires, tests d'intégration, tests fonctionnels)." },
        { type: "h", text: "Outils de tests" },
        { type: "table", headers: ["Outil", "Usage principal"], rows: [
          ["Jest", "Tests unitaires et tests d'intégration (JavaScript)"],
          ["Playwright", "Tests fonctionnels end-to-end, simulation navigateur"],
          ["Vitest", "Tests unitaires JavaScript moderne (avec Vite)"],
          ["Mocha", "Tests Node.js (unitaires + intégration)"],
          ["Pytest", "Tests Python (unitaires + intégration)"],
        ]},
        { type: "code", filename: "example.test.jsx", language: "jsx", code: `describe('Test Suites', () => {
  it('should return 10', () => {
    expect(moyenne([5, 10, 15])).toEqual(10)
  })
})` },
        { type: "p", text: "Playwright : tests fonctionnels (end-to-end), simulation d'un utilisateur réel dans un navigateur." },
        { type: "note", variant: "info", title: "Intérêt des tests", text: "Si la fonction change ou casse → le test échoue automatiquement → on détecte une régression." },
        { type: "h", text: "Exécution des tests" },
        { type: "code", filename: "run.sh", language: "bash", code: `npm run test` },
        { type: "code", filename: "package.json", language: "json", code: `"scripts": {
  "test": "jest"
}` },
        { type: "h", text: "Intégration dans le déploiement CI/CD" },
        { type: "p", text: "Dans un pipeline (ex : GitLab CI), les tests sont exécutés automatiquement avant le déploiement." },
        { type: "code", filename: "ci.sh", language: "bash", code: `npm run test` },
        { type: "note", variant: "warning", title: "Important — avant de lancer les tests", text: "npm install jest" },
      ],
    },
    {
      id: "tests-types-logiciels",
      title: "Types de tests logiciels",
      blocks: [
        { type: "h", text: "Tests manuels" },
        { type: "p", text: "Test d'acceptation (Acceptance test) : vérifie que le système respecte les exigences métier." },
        { type: "list", items: [
          "Simule le comportement réel des utilisateurs",
          "Sert à valider si le produit est acceptable pour le client",
        ]},
        { type: "p", text: "Test de résilience (Resilience test) : vérifie que l'application continue de fonctionner même en cas de panne." },
        { type: "list", items: [
          "Simule des erreurs, pannes ou perturbations d'environnement",
          "Proche des tests de robustesse",
          "Exemple : chaos testing (type Netflix Chaos Monkey)",
        ]},
        { type: "h", text: "Tests automatisés" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Tests unitaires", "Tests de bas niveau. Vérifient fonctions, méthodes, classes. Rapides et très ciblés"],
          ["Tests d'intégration", "Vérifient l'interaction entre plusieurs modules. Détectent les problèmes de communication entre composants"],
          ["Tests fonctionnels", "Vérifient les résultats d'un processus. Ne s'intéressent pas aux états internes. Se concentrent sur le comportement attendu"],
          ["Tests End-to-End (E2E)", "Simulent un utilisateur réel. Testent tout le système de bout en bout. Vérifient les parcours complets (login, achat…)"],
        ]},
        { type: "h", text: "Tests de performance" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Test de charge (Load test)", "Simule un nombre d'utilisateurs défini. Vérifie le comportement sous charge normale ou prévue"],
          ["Test de stress (Stress test)", "Pousse le système au maximum. Détermine les limites de l'application"],
          ["Test de montée en charge (Scalability test)", "Augmente progressivement la charge. Identifie la limite de scalabilité"],
          ["Test de performance (Performance test)", "Mesure vitesse et fiabilité. Analyse temps de réponse et consommation de ressources"],
          ["Test de dégradation des transactions", "Analyse quelles transactions dégradent le système. Identifie les points faibles sous charge"],
          ["Test de fiabilité (Reliability test)", "Vérifie le comportement sur longue durée. Simule une utilisation intensive prolongée"],
          ["Test aux limites (Boundary test)", "Teste au-delà des capacités normales. Vérifie le comportement en surcharge extrême"],
        ]},
        { type: "h", text: "Tests de validation rapide" },
        { type: "p", text: "Test de fumée (Smoke test) : vérifie les fonctions principales après un build. Permet de savoir si un système est suffisamment stable pour continuer les tests." },
      ],
    },
    {
      id: "tests-qualite-code",
      title: "Tests et qualité du code",
      blocks: [
        { type: "h", text: "Types de tests (récapitulatif élargi)" },
        { type: "table", headers: ["Type", "Objectif principal"], rows: [
          ["Tests unitaires", "Vérifier une fonction ou un composant isolé. Rapides et automatisés"],
          ["Tests d'intégration", "Vérifier l'interaction entre plusieurs composants"],
          ["Tests End-to-End (E2E)", "Simuler un parcours utilisateur complet"],
          ["Tests de régression", "Vérifier qu'une modification n'a pas cassé l'existant"],
          ["Tests de performance", "Mesurer temps de réponse, stabilité sous charge, consommation ressources"],
          ["Tests de sécurité", "Détecter les vulnérabilités (HTTPS, injections, accès non autorisés)"],
          ["Tests d'acceptation", "Valider que le logiciel répond aux besoins métier"],
          ["Tests d'accessibilité", "Vérifier la conformité aux normes WCAG, ARIA (clavier, contraste, lecteurs d'écran)"],
        ]},
        { type: "h", text: "Phases de test" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│                  PHASES DE TEST                         │
├──────────────────┬──────────────────────────────────────┤
│ CAS NORMAUX      │ Données valides                      │
│                  │ Comportement attendu                  │
├──────────────────┼──────────────────────────────────────┤
│ CAS INATTENDUS   │ Données invalides                    │
│                  │ Actions imprévues                     │
├──────────────────┼──────────────────────────────────────┤
│ CAS LIMITES      │ Valeurs min/max                      │
│                  │ null / vides / extrêmes               │
└──────────────────┴──────────────────────────────────────┘`,
        },
      ],
    },
    {
      id: "tests-criticite-bugs",
      title: "Niveaux de criticité des bugs et types d'impact",
      blocks: [
        { type: "h", text: "Niveaux de criticité" },
        { type: "table", headers: ["Niveau", "Description"], rows: [
          ["Faible", "Le programme continue de fonctionner"],
          ["Élevé", "Certaines fonctionnalités sont impactées"],
          ["Critique", "Le programme est bloqué"],
        ]},
        { type: "h", text: "Types d'impact" },
        { type: "table", headers: ["Type", "Description"], rows: [
          ["Fonctionnel", "Impact sur les fonctionnalités"],
          ["Logique métier", "Erreur dans les règles métier"],
          ["Technique", "Problème de code ou dépendances"],
          ["Infrastructure", "Serveur, base de données, hébergement"],
          ["Sécurité", "Vulnérabilités exploitables"],
        ]},
      ],
    },
    {
      id: "tests-bugs-frequents",
      title: "Types de bugs fréquents",
      blocks: [
        { type: "h", text: "Web / Infrastructure" },
        { type: "list", items: [
          "Mauvaises URLs (absolues vs relatives)",
          "Fichiers manquants ou mal placés",
          "Problèmes de permissions",
          "Incompatibilité serveur (PHP, BDD…)",
          "Problèmes de configuration (.env, .htaccess)",
          "Cache navigateur / CDN",
          "Limites d'hébergement (taille fichiers, etc.)",
        ]},
        { type: "h", text: "Code" },
        { type: "list", items: ["Dépendances manquantes", "Config incorrecte", "Erreurs de compilation ou runtime"] },
        { type: "h", text: "Front-end" },
        { type: "p", text: "HTML/CSS : balises non fermées, CSS obsolète." },
        { type: "p", text: "UI : mauvais alignement, problème responsive." },
        { type: "p", text: "JavaScript / TypeScript : méthodes inexistantes, erreurs de scope, erreurs de type, DOM mal manipulé." },
        { type: "p", text: "API : endpoints inexistants, erreurs de requêtes, format de réponse incorrect (CORS, JSON…)." },
        { type: "p", text: "Performance : images non optimisées, trop de requêtes, boucles infinies." },
        { type: "p", text: "Accessibilité : manque d'ARIA, mauvais contraste, navigation clavier absente." },
      ],
    },
    {
      id: "tests-structure-erreur",
      title: "Structure d'un message d'erreur",
      blocks: [
        { type: "p", text: "Un bon message d'erreur contient : nom de l'erreur, message détaillé, fichier + ligne + colonne, stack trace (pile d'appels)." },
        {
          type: "diagram",
          content: `Type d'erreur (nom): Message d'erreur (détails)
at nomFonction (fichier: ligne : colonne)
at pile appel`,
        },
      ],
    },
    {
      id: "tests-importance",
      title: "Importance des tests",
      blocks: [
        { type: "list", items: [
          "Améliorent la qualité du logiciel",
          "Évitent les régressions",
          "Facilitent la maintenance",
          "Augmentent la confiance des développeurs",
          "Accélèrent le développement à long terme",
        ]},
        { type: "note", variant: "success", title: "Objectif global — les tests servent à garantir", text: "Fiabilité, stabilité, performance, sécurité, maintenabilité." },
      ],
    },
    {
      id: "tests-mocks",
      title: "Tests / Mocks en programmation web",
      blocks: [
        { type: "p", text: "Un mock est un objet simulé qui permet de remplacer un vrai appel (souvent HTTP) pendant les tests." },
        { type: "p", text: "Un mock permet :" },
        { type: "list", items: [
          "D'imposer le comportement d'une fonction ou d'un objet",
          "De simuler des variables, objets ou réponses API",
          "De fournir une réponse prédéfinie",
        ]},
        { type: "code", filename: "mock-response.json", language: "json", code: `{
  "id": 1,
  "title": "Mock post",
  "body": "Ceci est une réponse simulée"
}` },
        { type: "h", text: "Avantages des mocks" },
        { type: "p", text: "1. Gain de performance : pas d'appel réel au serveur, pas de latence réseau, tests beaucoup plus rapides." },
        { type: "p", text: "2. Stabilité : pas dépendant d'une API externe, pas de panne serveur, résultats toujours identiques." },
        { type: "p", text: "3. Contrôle total : on décide exactement de la réponse, on teste des cas précis (erreur, succès, timeout)." },
        { type: "h", text: "Comparaison Appel réel vs Mock" },
        { type: "table", headers: ["Appel réel HTTP", "Mock"], rows: [
          ["Lent", "Rapide"],
          ["Dépend du serveur", "Indépendant"],
          ["Variable", "Prévisible"],
          ["Peut échouer", "Stable"],
        ]},
      ],
    },
    {
      id: "tests-framework-vitest",
      title: "Framework — Vitest",
      blocks: [
        { type: "p", text: "Vitest est un framework de test JavaScript moderne (très rapide) utilisé principalement avec Vite. Il permet de tester du code (fonctions, composants, API) pour vérifier son bon fonctionnement." },
        { type: "h", text: "Installation & configuration" },
        { type: "p", text: "1. Création d'un projet Vite" },
        { type: "code", filename: "setup.sh", language: "bash", code: `npm create vite@latest mon-projet
cd mon-projet
npm install` },
        { type: "p", text: "2. Installer Vitest" },
        { type: "code", filename: "install-vitest.sh", language: "bash", code: `npm install -D vitest` },
        { type: "p", text: "3. Ajouter le script de test dans package.json" },
        { type: "code", filename: "package.json", language: "json", code: `"scripts": {
  "test": "vitest"
}` },
        { type: "p", text: "4. Lancer les tests" },
        { type: "code", filename: "run.sh", language: "bash", code: `npm run test` },
        { type: "h", text: "Structure d'un test" },
        { type: "code", filename: "math.test.jsx", language: "jsx", code: `import { describe, it, expect } from 'vitest'

describe('Math utils', () => {
  it('should add two numbers', () => {
    expect(1 + 2).toBe(3)
  })
})` },
        { type: "h", text: "Tester une fonction — Exemple complet" },
        { type: "code", filename: "utils.js", language: "jsx", code: `// utils.js
export function add(a, b) {
  return a + b
}` },
        { type: "code", filename: "utils.test.js", language: "jsx", code: `// utils.test.js
import { describe, it, expect } from 'vitest'
import { add } from './utils'

describe('add()', () => {
  it('ajoute deux nombres', () => {
    expect(add(2, 3)).toBe(5)
  })
})` },
        { type: "h", text: "Assertions (méthodes importantes)" },
        { type: "table", headers: ["Méthode", "Utilité"], rows: [
          ["toBe(value)", "Comparaison stricte (===)"],
          ["toEqual(obj)", "Comparaison d'objets"],
          ["toContain(item)", "Vérifie un élément dans un tableau"],
          ["toBeTruthy()", "Vrai"],
          ["toBeFalsy()", "Faux"],
          ["toThrow()", "Vérifie une erreur"],
        ]},
        { type: "h", text: "Test asynchrone" },
        { type: "code", filename: "fetchUser.js", language: "jsx", code: `// fetchUser.js
export async function fetchUser() {
  return await Promise.resolve({ name: 'Kat' })
}

// fetchUser.test.js
import { fetchUser } from './fetchUser'

it('retourne un utilisateur', async () => {
  const user = await fetchUser()
  expect(user.name).toBe('Kat')
})` },
        { type: "h", text: "Mocking (simuler des dépendances)" },
        { type: "p", text: "Manuel :" },
        { type: "code", filename: "greet.jsx", language: "jsx", code: `export function greet(api) {
  return \`Bonjour \${api.getName()}\`
}

import { it, expect } from 'vitest'
import { greet } from './greet'

it("greet utilise le nom de l'API", () => {
  const fakeApi = { getName: () => 'Kat' }
  expect(greet(fakeApi)).toBe('Bonjour Kat')
})` },
        { type: "p", text: "Avec vi.fn() :" },
        { type: "code", filename: "mockfn.jsx", language: "jsx", code: `import { vi, it, expect } from 'vitest'

it('fonction mockée', () => {
  const mockFn = vi.fn(() => 42)
  expect(mockFn()).toBe(42)
  expect(mockFn).toHaveBeenCalled()
})` },
        { type: "h", text: "Tester les erreurs" },
        { type: "code", filename: "div.jsx", language: "jsx", code: `function div(a, b) {
  if (b === 0) throw new Error('Division par zéro')
  return a / b
}

import { it, expect } from 'vitest'

it('doit jeter une erreur', () => {
  expect(() => div(10, 0)).toThrow('Division par zéro')
})` },
        { type: "h", text: "Coverage (couverture de tests)" },
        { type: "code", filename: "coverage.sh", language: "bash", code: `npx vitest run --coverage` },
        { type: "p", text: "Configuration optionnelle :" },
        { type: "code", filename: "vitest.config.js", language: "jsx", code: `export default {
  test: {
    coverage: {
      reporter: ['text', 'html']
    }
  }
}` },
      ],
    },
    {
      id: "tests-framework-mocha",
      title: "Framework — Mocha (Node.js)",
      blocks: [
        { type: "h", text: "Fonctionnalités principales" },
        { type: "list", items: [
          "Exécution des tests avec Node.js",
          "Exécution possible dans un navigateur",
          "Support des promesses (async/await)",
          "Génération de rapports de tests",
          "Facilité d'écriture des cas de test",
          "Détection des tests lents",
        ]},
        { type: "h", text: "Installation de Mocha" },
        { type: "code", filename: "install.sh", language: "bash", code: `# Installation globale
npm install -g mocha

# Installation locale (recommandé)
npm install mocha --save-dev` },
        { type: "p", text: "Ajouté dans les dépendances de développement du projet." },
        { type: "h", text: "Structure d'un projet de test Mocha" },
        { type: "code", filename: "init.sh", language: "bash", code: `mkdir mocha_test
cd mocha_test
npm init -y` },
        { type: "p", text: "Structure recommandée :" },
        {
          type: "diagram",
          content: `mocha_test/
├── test/
│   └── demoTest.js
├── services/
│   └── format.js
├── package.json`,
        },
        { type: "p", text: "Mocha recherche automatiquement les fichiers dans le dossier test/." },
        { type: "h", text: "Lancer les tests" },
        { type: "code", filename: "package.json", language: "json", code: `"scripts": {
  "test": "mocha"
}` },
        { type: "code", filename: "run.sh", language: "bash", code: `npm test` },
        { type: "h", text: "Écriture d'un premier test" },
        { type: "p", text: "Mocha utilise une syntaxe simple basée sur describe() → groupe de tests et it() → cas de test." },
        { type: "code", filename: "demoTest.js", language: "jsx", code: `// demoTest.js
const assert = require("assert");

describe("Mon premier test", function () {
  it("doit retourner 2 quand on additionne 1 + 1", function () {
    assert.strictEqual(1 + 1, 2);
  });
});` },
        { type: "h", text: "Assertion avec Node.js" },
        { type: "code", filename: "assert.jsx", language: "jsx", code: `assert.strictEqual(valeur, resultatAttendu, "Message en cas d'erreur");` },
        { type: "h", text: "Échec d'un test" },
        { type: "p", text: "Si on change la valeur attendue :" },
        { type: "code", filename: "fail.jsx", language: "jsx", code: `assert.strictEqual(1 + 1, 3);` },
        { type: "p", text: "Le test échoue automatiquement et Mocha affiche : l'erreur, le test concerné, le message d'échec." },
        { type: "h", text: "Exemple de module à tester" },
        { type: "code", filename: "services/format.js", language: "jsx", code: `// services/format.js
function format(str) {
  return str.replace(/ /g, "_");
}
module.exports = format;` },
        { type: "code", filename: "demoTest.js", language: "jsx", code: `// demoTest.js
const assert = require("assert");
const format = require("../services/format");

describe("Format module", function () {
  it("remplace les espaces par des underscores", function () {
    assert.strictEqual(format("hello world"), "hello_world");
  });
});` },
        { type: "h", text: "Bonnes pratiques Mocha" },
        { type: "list", items: [
          "Nommer clairement les tests",
          "Tester une seule fonctionnalité par it()",
          "Utiliser des assertions précises",
          "Séparer code métier et tests",
          "Écrire les tests en anglais (souvent recommandé)",
        ]},
        { type: "h", text: "Ressources utiles" },
        { type: "list", items: [
          "Node.js assert : https://nodejs.org/api/assert.html",
          "Chai (alternative d'assertions) : https://www.chaijs.com/api/assert/",
          "Mocha documentation : https://mochajs.org/",
        ]},
      ],
    },
    {
      id: "tests-pytest",
      title: "Pytest",
      blocks: [
        { type: "h", text: "Installation" },
        { type: "code", filename: "install.sh", language: "bash", code: `pip install pytest

# Vérifier version
pytest --version` },
        { type: "p", text: "Exemple simple :" },
        { type: "code", filename: "test_sqrt.py", language: "python", code: `import math

def test_sqrt():
    num = 25
    assert math.sqrt(num) == 5` },
        { type: "h", text: "Lancer les tests" },
        { type: "code", filename: "run.sh", language: "bash", code: `pytest` },
        { type: "h", text: "Plusieurs tests" },
        { type: "code", filename: "test_sqrt2.py", language: "python", code: `import math

def test_sqrt_ok():
    assert math.sqrt(25) == 5

def test_sqrt_ko():
    assert math.sqrt(25) == 6` },
        { type: "h", text: "Tester un échec volontaire" },
        { type: "p", text: "Sert à vérifier que le test détecte bien les erreurs." },
        { type: "code", filename: "test_sqrt_ko.py", language: "python", code: `def test_sqrt_ko():
    assert math.sqrt(25) != 6` },
      ],
    },
    {
      id: "tests-python-approches",
      title: "Python — Tests (doctest, unittest, setup/teardown)",
      blocks: [
        { type: "p", text: "Les tests servent à vérifier que ton code fonctionne correctement. On distingue trois approches : doctest (tests dans les docstrings), unittest (classes de test), pytest (outil moderne le plus utilisé)." },
        { type: "h", text: "1. Doctest (tests dans les docstrings)" },
        { type: "list", items: [">>> simule une commande Python", "Le résultat attendu est écrit juste en dessous"] },
        { type: "code", filename: "add.py", language: "python", code: `def add(a, b):
    """
    >>> add(2, 2)
    4
    """
    return a + b` },
        { type: "p", text: "Lancer les tests :" },
        { type: "code", filename: "run-doctest.sh", language: "bash", code: `python -m doctest nomTest.py -v` },
        { type: "h", text: "2. Unittest (tests avec classes)" },
        { type: "p", text: "assert vérifie une condition, si faux → le test échoue." },
        { type: "code", filename: "test_class.py", language: "python", code: `class TestClass:
    def test_ok(self):
        assert 2 == 2` },
        { type: "h", text: "3. Setup et teardown (Python)" },
        { type: "list", items: ["setup_method → avant chaque test", "teardown_method → après chaque test"] },
        { type: "code", filename: "test_setup_teardown.py", language: "python", code: `class TestClass:

    def setup_method(self, method):
        print("Setup method")

    def teardown_method(self, method):
        print("Teardown method")

    def test_ok(self):
        assert 2 == 2` },
        { type: "p", text: "Lancer les tests :" },
        { type: "code", filename: "run.sh", language: "bash", code: `python nom_test.py -s` },
      ],
    },
    {
      id: "tests-tdd",
      title: "Test-Driven Development (TDD)",
      blocks: [
        { type: "p", text: "La méthodologie TDD (Test-Driven Development) est une façon spécifique de créer un programme, dans laquelle les tests sont écrits avant la méthode testée." },
        { type: "p", text: "Au-delà du code en lui-même, c'est un processus de réflexion qui va faire travailler le développeur sur la logique du programme : pourquoi devrait-il faire cela, quel devrait être son comportement quand tel ou tel cas se présente ?" },
        { type: "p", text: "Le résultat est que chaque scénario doit être envisagé. Ensuite, une fois plusieurs cas de test créés, la méthode réellement testée peut être écrite." },
        { type: "h", text: "Red – Green – Refactor !" },
        {
          type: "diagram",
          content: `┌─────────────────────────────────────────────────────────┐
│              CYCLE TDD : RED → GREEN → REFACTOR         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ┌──────────┐      ┌──────────┐      ┌──────────────┐ │
│   │  🔴 RED  │ ───► │ 🟢 GREEN │ ───► │  REFACTOR    │ │
│   └──────────┘      └──────────┘      └──────┬───────┘ │
│       │                                       │         │
│   Écrire le         Écrire la            Améliorer      │
│   test (il         fonctionnalité         le code       │
│   échoue)          (le test passe)        (no régress.) │
│       ▲                                       │         │
│       └───────────────────────────────────────┘         │
│                    Boucle continue                      │
└─────────────────────────────────────────────────────────┘`,
        },
        { type: "list", items: [
          "Red : écrire le test. Quand le test existe mais que la fonctionnalité n'existe pas encore, le test échoue bien sûr.",
          "Green : écrire la fonctionnalité souhaitée. L'objectif est de faire passer le test.",
          "Refactor : maintenant que tout fonctionne, améliorer le code. L'accent peut être mis sur les répétitions, le respect des standards du langage…",
        ]},
        { type: "note", variant: "info", text: "Et le cycle boucle à nouveau vers la phase red ! L'un des objectifs de ce cycle est de traiter une petite étape à la fois." },
        { type: "h", text: "Pourquoi le TDD est-il nécessaire ?" },
        { type: "p", text: "Ce processus est une façon de penser. Généralement, quand un projet démarre, les premières étapes sont l'analyse des besoins utilisateurs. Dans un processus agile, des Cas d'Usage sont dessinés avec des critères d'acceptation — \"Que se passe-t-il quand tout va bien ? Que se passe-t-il quand une erreur est commise ?\". Ces critères sont une base parfaite pour le TDD." },
        { type: "h", text: "Comment créer des tests avant ce qu'ils testent ?" },
        { type: "p", text: "Exemple — fonction de division d'une calculatrice :" },
        { type: "code", filename: "test_calculator.py", language: "python", code: `import math
import pytest
import Calculator

class TestClass:

    def test_division_ok(self):
        cal = Calculator
        assert cal.divide(4, 2) == 2

    def test_division_should_throw_exception(self):
        cal = Calculator
        with pytest.raises(ZeroDivisionError):
            assert cal.divide(4, 0) == 5` },
        { type: "p", text: "Les deux tests échouent (phase RED — la fonction divide n'existe pas encore)." },
        { type: "p", text: "Maintenant la phase green — écrire la fonctionnalité :" },
        { type: "code", filename: "calculator.py", language: "python", code: `def divide(a, b):
    return a / b` },
        { type: "p", text: "Résultat : les deux tests passent ✅" },
        { type: "p", text: "Quant au refactor : il devrait s'agir, par exemple, de placer la fonction divide dans une classe." },
        { type: "h", text: "Test de non-régression" },
        { type: "p", text: "Chaque fois qu'un nouveau cycle TDD est effectué, chaque test créé doit être relancé. C'est ce qu'on appelle un test de non-régression." },
        { type: "p", text: "Comme le développement se fait une petite étape à la fois, il est utile de lancer les tests pour s'assurer que le nouveau développement n'a pas cassé les précédents. Chaque test réalisé lors d'un cycle précédent doit passer. Si ce n'est pas le cas, le bug doit être trouvé et le code corrigé." },
        { type: "list", items: [
          "Le TDD est une façon de découper le développement en petites briques",
          "Le cycle red-green-refactor apporte de la qualité au code",
        ]},
      ],
    },
  {
      id: "vitest-vue-intro",
      title: "Vitest + Vue Test Utils — Introduction et premier test",
      blocks: [
        { type: "p", text: "Vitest est un framework de test unitaire nativement intégré à Vite, conçu pour être rapide et compatible avec l'écosystème Vue. Il partage la même configuration que Vite (résolution de modules, plugins, alias) et propose une API très proche de Jest." },
        { type: "h", text: "Installation" },
        { type: "code", filename: "install-vitest.sh", language: "bash", code: `npm install -D vitest
# ou
yarn add -D vitest` },
        { type: "p", text: "Pour tester des composants Vue, on ajoute également @vue/test-utils :" },
        { type: "code", filename: "install-vue-test-utils.sh", language: "bash", code: `npm install -D @vue/test-utils
# ou
yarn add -D @vue/test-utils` },
        { type: "h", text: "Configuration dans package.json" },
        { type: "code", filename: "package.json", language: "json", code: `{
  "scripts": {
    "test": "vitest"
  }
}` },
        { type: "h", text: "Premier test" },
        { type: "p", text: "Un test Vitest se compose d'une fonction test() (ou it()) qui prend un nom descriptif et une fonction de test, à l'intérieur de laquelle on utilise expect() pour formuler des assertions." },
        { type: "code", filename: "example.test.js", language: "javascript", code: `import { test, expect } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})` },
        { type: "h", text: "Lancer les tests" },
        { type: "code", filename: "run.sh", language: "bash", code: `npm run test` },
        { type: "p", text: "Par défaut, Vitest se lance en mode watch : il surveille les fichiers et relance automatiquement les tests concernés à chaque modification." },
        { type: "h", text: "Interface graphique Vitest UI" },
        { type: "code", filename: "install-ui.sh", language: "bash", code: `npm install -D @vitest/ui` },
        { type: "code", filename: "run-ui.sh", language: "bash", code: `npx vitest --ui` },
        { type: "p", text: "Vitest UI ouvre un tableau de bord dans le navigateur listant tous les tests, leur statut (succès/échec) et le détail des assertions — pratique pour visualiser rapidement l'état d'une suite de tests." },
        { type: "h", text: "Les matchers principaux" },
        { type: "table", headers: ["Matcher", "Utilité"], rows: [
          ["toBe(valeur)", "Comparaison stricte (===)"],
          ["toEqual(objet)", "Comparaison profonde d'objets/tableaux"],
          ["toBeTruthy() / toBeFalsy()", "Vérifie qu'une valeur est vraie/fausse"],
          ["toContain(élément)", "Vérifie qu'un tableau ou une chaîne contient un élément"],
          ["toHaveProperty(clé)", "Vérifie qu'un objet possède une propriété"],
          ["toThrow()", "Vérifie qu'une fonction lève une exception"],
        ]},
      ],
    },
    {
      id: "vitest-vue-test-utils-mount",
      title: "Vue Test Utils — Monter et tester un composant",
      blocks: [
        { type: "p", text: "@vue/test-utils fournit la fonction mount() pour instancier un composant Vue dans un environnement de test, en simulant son rendu et en donnant accès à une API pour interagir avec lui (classes, texte, événements)." },
        { type: "h", text: "Composant testé — NotificationToast.vue" },
        { type: "p", text: "Un composant de notification qui affiche un message, se masque quand le message est vide (classe notification--slide) et émet un événement clear-notification au clic sur le bouton de fermeture." },
        { type: "h", text: "Test 1 — masquer la notification quand le message est vide" },
        { type: "code", filename: "NotificationToast.test.js", language: "javascript", code: `import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import NotificationToast from '../NotificationToast.vue'

test('notification slides up when message is empty', () => {
  const message = ''
  const wrapper = mount(NotificationToast, {
    props: { message },
  })
  expect(wrapper.classes('notification--slide')).toBe(false)
})` },
        { type: "p", text: "wrapper.classes(nomClasse) retourne un booléen indiquant si l'élément racine du composant possède cette classe CSS." },
        { type: "h", text: "Test 2 — émettre un événement au clic sur le bouton de fermeture" },
        { type: "p", text: "Ce test est asynchrone car trigger() déclenche un événement qui renvoie une promesse — il faut attendre sa résolution avant de vérifier les changements qu'il provoque." },
        { type: "code", filename: "NotificationToast.test.js", language: "javascript", code: `test('emits event when close button is clicked', async () => {
  const wrapper = mount(NotificationToast, {
    data() {
      return {
        clicked: false
      }
    }
  })
  const closeButton = wrapper.find('button')
  await closeButton.trigger('click')
  expect(wrapper.emitted()).toHaveProperty('clear-notification')
})` },
        { type: "table", headers: ["Méthode", "Rôle"], rows: [
          ["wrapper.find(sélecteur)", "Similaire à querySelector — accepte classe, id ou attribut, renvoie un élément"],
          ["élément.trigger(événement)", "Déclenche un événement (click, focus, blur, keydown…), renvoie une promesse"],
          ["wrapper.emitted()", "Renvoie un objet listant tous les événements émis par le composant"],
        ]},
        { type: "h", text: "Test 3 — afficher le bon message" },
        { type: "code", filename: "NotificationToast.test.js", language: "javascript", code: `test('renders correct message to viewer', () => {
  const message = 'Something happened, try again'
  const wrapper = mount(NotificationToast, {
    props: { message },
  })
  expect(wrapper.find('p').text()).toBe(message)
})` },
        { type: "p", text: "wrapper.find('p').text() extrait le contenu textuel de l'élément, de façon similaire à innerText en JavaScript natif. On préfère parfois cibler une classe ou un attribut plutôt que la balise elle-même si plusieurs éléments du même type existent dans le composant." },
      ],
    },
    {
      id: "vitest-mocking-api-axios",
      title: "Vitest — Simuler (mock) des appels API avec Axios",
      blocks: [
        { type: "p", text: "Le mocking est une technique utilisée en test logiciel pour simuler le comportement d'objets ou de systèmes externes dont dépend le code testé, afin d'isoler ce code des variables hors de son contrôle (connexions réseau, services externes)." },
        { type: "note", variant: "info", text: "Les mocks permettent de tester le code de manière plus approfondie et plus fiable, sans dépendre de la disponibilité ou du comportement réel des services externes." },
        { type: "h", text: "Composant testé — PostCard.vue (appel API avec Axios)" },
        { type: "code", filename: "install-axios.sh", language: "bash", code: `npm install axios
#or
yarn add axios` },
        { type: "code", filename: "src/components/PostCard.vue", language: "html", code: `<template>
  <div>
    <div v-if="post">
      <h1 data-testid="post-title">{{ post.title }}</h1>
      <p data-testid="post-body">{{ post.body }}</p>
    </div>
    <p v-if="loading" data-testid="loader">Loading...</p>
    <p v-if="error" data-testid="error-message">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const post = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchPost = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    post.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPost();
});
</script>` },
        { type: "p", text: "Le composant importe Vue et Axios, crée trois variables d'état (post, loading, error), définit une fonction fetchPost() qui récupère un article via l'API JSONPlaceholder et met à jour l'état en conséquence, puis appelle cette fonction au montage du composant. Le template affiche titre et corps de l'article en tenant compte des états loading et error." },
        { type: "h", text: "Ce qu'on va tester" },
        { type: "list", items: [
          "L'application effectue une requête API avec succès et affiche les bonnes données",
          "L'application gère correctement les erreurs et affiche un message d'erreur si la requête échoue",
        ]},
        { type: "note", variant: "info", text: "On peut tester ces deux cas sans jamais effectuer de véritable appel réseau vers le serveur JSONPlaceholder — c'est tout l'intérêt du mocking." },
        { type: "h", text: "Réponse simulée et suite de tests" },
        { type: "code", filename: "src/components/tests/PostCard.test.js", language: "javascript", code: `import axios from "axios";
import { mount } from "@vue/test-utils";
import PostCard from "../PostCard.vue";

const mockPost = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto",
};

describe("Post Component", () => {
  // tests à suivre...
});` },
        { type: "p", text: "Pour intercepter la requête GET faite par Axios et lui faire renvoyer une valeur simulée (plutôt que d'appeler le vrai serveur), on utilise la fonction spyOn de Vitest, accessible via l'assistant vi importé depuis vitest (import { vi } from 'vitest')." },
      ],
    },
    ...laConsoleTests,
    ...laConsoleArticles4Tests,
    ...laConsoleArticles7Tests,
  ],
};
