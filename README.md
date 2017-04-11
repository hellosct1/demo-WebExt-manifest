# demo-WebExt-manifest
Demo WebExtension Manifest for the WebExtensions of the browser



## Information
La démo a été présentée aux Journées du Logiciel Libre (JDLL) à Lyon (France) - 2 avril 2017

La demo a été testée sur :

- Firefox Nightly 55
- Chrome 57
- Opera 44
- Edge
 


## Fonctionnality WebExtension

De nombreuses fonctionnalités sont présentes pour construire son #manifest.json#
Différentes fonctions Javascript utilisent le DOM pour commmuniquer

### browser_action

Il se position dans la barre des actions et affiche différents bouton : 

- Journées du Logiciel Libre (JDLL) : http://www.jdll.org
- Le site francophone de la communauté Française : http://www.mozfr.org
- Le site officiel des elePHPants : http://www.elephpant.com
- La fondatio Mozilla : https://www.mozilla.org
- Un bouton RESET


La première fonctionnalité : 

- Un menu propose différents boutons à cliquer.
- Chaque clic ajoutera un cadre d'une couleur Différente
- Un bouton RESET permet de revenir à l'origine

La deuxième fonctionnalité : 

- Affiche un popup en bas de l'écran avec différentes informations, logo
- Chaque fenêtre permet d'ouvrir un nouvel onglet vers le site internet choisi


### content_scripts

La zone de content scripts permet de modifier l'intérieur de la fenêtre

- Quelque soit le bouton, une bordure sera affichée pour réduire la zone d'affichage
- Pour le bouton "Mozilla", un message sera affiché en bas du site internet dans une balise DIV


### background

Les actions et animations sont activés par les appels en arrière plan
Elles sont déclarées dans le fichier manifest.json

### Resources

Les ressources embarquent différentes images dans l'extension pour éviter de les charger à chaque fois.
Ces images sont affichées dans le popup du bouton choisi


### permission

Différentes permissions ont été ajoutés pour permettre à l'extension de fonctionné


## Crédit
(c) Christophe Villeneuve - 2017



