# Installation

## récupération projet

Pour travailler sur cet exercice, commencez par faire un fork du repository (bouton en haut à droite de la page), puis clonez le nouveau repo en local (git clone <https://...>)

## installation backend

Vous devez avoir installé nodejs sur votre ordinateur pour procéder à la suite. Pour le télécharger : https://nodejs.org/en (prendre la version LTS et pas la Current)

Dans un terminal, positionnez vous sur le dossier backend du projet, et exécutez la commande

```
npm install
```

Une fois terminée, vous pouvez lancer la commande

```
npm start
```

Ce qui devrait lancer l'execution du serveur. Si tous se passe bien, vous aurez ceci affiché dans le terminal :

```
> 3esgi-nodejs@1.0.0 start
> node server

serveur en route 
```

## lancement du frontend

lancer le fichier html/index.html avec liveserver

# Objectif de l'exercice

Sur la page index.html : 

Afficher la liste des produits (une route http://localhost:3000/product permet de récupérer les données)

Un exemple de produit en html est présent en commentaire dans le fichier html

Sur la page detail.html

Afficher le détail du produit (l'id du produit devrait être présent dans l'url, pour le récupérer en js : https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams) (une route  http://localhost:3000/product/:id permet de récupérer les infos d'un produit par son id)

Lors d'un clic sur le bouton "ajouter au panier" il faudra ajouter ce produit dans le panier de client (attention, il doit être connecté pour celà, une route  http://localhost:3000/product en méthode POST permet de l'ajouter, il faudra passer dans le body JSON l'id du produit et la quantité)

```json
{
    "id": <id du produit>,
    "quantity: <quantité du produit>
}
```

Sur la page d'inscription :

Losrque le formulaire est remplis, au clic sur le bouton, il faudra envoyer les informations d'inscription (une route est prévue http://localhost:3000/auth/signin en post, avec le body JSON email et password)

```json
{
    "email": <email du client>,
    "password: <mot de passe du client>
}
```

Si tout s'est bien passé, on redirige vers la page login.html (voir https://developer.mozilla.org/en-US/docs/Web/API/Location/assign)

Sur la page de connexion :

Losrque le formulaire est remplis, au clic sur le bouton, il faudra envoyer les informations de connexion (une route est prévue http://localhost:3000/auth/login en post, avec le body JSON email et password)

```json
{
    "email": <email du client>,
    "password: <mot de passe du client>
}
```

Si la connexion s'est bien passée, le serveur retournera l'id du client, son email, et un token d'authentification (jwt)

Il faudra stocker ces informations pour les conserver plus tard (le token doit être envoyé dans certaines requête dans le header authorization)

Pour toutes les pages : 

Si l'utilisateur est connecté, il faut alors modifier le menu de navigation, pour afficher celui en exemple dans le html.

Au click sur le lien "deconnexion", il faudra retirer les informations du localstorage et reafficher le menu d'origine

La plupart des fichiers sont déjà créer, mais vous pouvez en créer d'autres si vous le juger utile.