# Nautilux Frontend Test

Le but de ce test est d'évaluer tes capacités à implémenter les solutions qui permettront à ton interface de communiquer avec une API, de gérer les données et de respecter l'intégration d'un design donné. Nous attendons de ta part que tu sois également capable de maîtriser les outils que nous utilisons dans nos projets.

> **IMPORTANT :** MODIFICATION DU README POUR LE TEST

## Stack technique

> **Important :** Pour le bon fonctionnement du projet et de sa compilation, il est recommandé d'utiliser *nvm* pour switcher facilement 
> entre version de node. De même yarn a été utilisé pour mieux gérer les dépendances.
> 
> Version **node** = **v16.19.1 LTS**
> 
> Version **npm** = **8.19.3**

Ce projet est basé sur React. 

La gestion des données se fait grâce à **Redux**.

Les échanges avec l'API se font avec **axios** et **redux-saga**.

Le routage se base sur **react-navigation**.

## Améliorations possibles

Voici les améliorations possibles avec plus de temps :

- Utilisation de typage = PropsType ou Typescript
- Utilisation de modèle de validation de la donnée (JOI, typescript)
- Utilisation de react hook form pour automatiser les formulaires, la validation et la sécurité des textes.
- Découpler la partie métier de la partie UI avec de la clean architecture, par exemple port/adapter.
- Dockeriser l'ensemble pour qu'il n'y est plus de problème à l'initialisation de l'environnement en fonction de l'OS et des versions de node et npm principalement.
- Travailler avec des components pour ne pas dupliquer le code et améliorer la lisibilité.
- Utiliser des styled-component pour le css et profiter de la notion d'imbriqué.
- Mettre en place des tests unitaire (TDD) de notre logique métier avec jest. Les tests d'intégration et e2e sont moins important et plus compliqué à mettre en place et à gérer partant du principe qu'un UI peut changer régulièrement.
- Refactorer les parties qui en ont besoins.
- Utiliser un framework css (MUI, Tailwind)
- Utiliser des linters adaptés et corriger les warnings/erreurs des linters.

**Important** : Il est intéressant d'utiliser des surcouches, mais pas au détriment de la livraison de fonctionnalités en production. Il faut que d'autres développeur sénior ou junior puissent agir et développer BIEN rapidement.

## Ta mission

Tu devras dans ce test :

1. Récupérer et afficher sous forme de tableau une liste d'interventions.
2. Faire en sorte que les interventions puissent être triées selon leur date de création.
3. Créer une page dédiée pour les interventions, accessible en cliquant sur une ligne du tableau.
4. Créer un formulaire pour créer une nouvelle intervention.
5. Respecter le design selon les maquettes fournies.

## Détails

### 1. Récupérer et afficher sous forme de tableau une liste d'interventions.

La liste des interventions doit être récupérée via la ressource `/interventions` de l'API REST.
Tu devras la stocker dans le store et l'afficher sous forme de tableau en respectant la maquette associée.

[Lien vers la maquette](https://scene.zeplin.io/project/5f4e2323e148ba0c5d36deda/screen/5f4e2338c620cb0cd7427169)

### 2. Faire en sorte que les interventions puissent être triées selon leur date de création.

En cliquant sur l'entête de la colonne **Date**, le tri des interventions doit changer selon leur date de création (`created_at`).

### 3. Créer une page dédiée pour les interventions, accessible en cliquant sur une ligne du tableau.

Chaque ligne du tableau est cliquable et renvoie sur la page `/intervention/:id` qui affiche toutes les informations de l'intervention.

Le bouton **Retour** renvoit vers la liste des interventions.

[Lien vers la maquette](https://scene.zeplin.io/project/5f4e2323e148ba0c5d36deda/screen/5f4e548572321db4628af05f)

### 4. Créer un formulaire pour créer une nouvelle intervention.

En cliquant sur le bouton **Créer une intervention**, l'utilisateur doit être redirigé sur la page `/create` qui présente un formulaire de création.
Tu devras créer cette page et gérer le routage.
Le formulaire permet de renseigner les champs :

- `name` : nom
- `description` : description de l'intervention
- `sender_name` : nom du demandeur
- `sender_email` : email du demandeur
- `sender_phone` : téléphone du demandeur

Le champ `created_at` et rempli à la soumission du formulaire et respecte le format `YYYY-MM-DD HH:ss:mm`.

À la soumission du formulaire, on est redirigé vers `/` et l'intervention est ajoutée à la fin de la liste.

[Lien vers la maquette](https://scene.zeplin.io/project/5f4e2323e148ba0c5d36deda/screen/5f4e233747c8ddb83c816a00)

**Pas de requête vers l'API pour ce point.**

### 5. Respecter le design selon les maquettes fournies.

Pour chaque page tu devras intégrer le style de la maquette correspondante. Tu peux styliser comme tu le souhaire (inline CSS, styled-components, fichier CSS importé). Pas de pixel perfect non plus, nous voulons juste ici que le rendu soit similaire au design associé.

## Installation

Clône ce dépôt et installe les dépendances, il est préférable d'utiliser yarn :

```
yarn install
ou npm install
```

Lance le serveur web :

```
yarn start
ou npm start
```

Lance dans un autre terminal le serveur de l'API _(depuis la racine)_ :

```
node server/server.js
```

_Note : le port par défaut de l'API est 3001._

## Rendu

Tu peux nous rendre ton test terminé sous la forme d'un zip (**sans `node_modules`**) ou d'un dépôt git en ligne.
N'hésites pas à nous contacter si tu as la moindre question !