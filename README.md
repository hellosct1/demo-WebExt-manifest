# demo-WebExt-manifest
Demo WebExtension Manifest for the WebExtensions of the browser



## Information
The demo was presented at the Free Software Days (JDLL) in Lyon (France) - April 2, 2017

The demo was tested on:

- Firefox Nightly 55
- Chrome 57
- Opera 44
- Edge
 


## Fonctionnality WebExtension

Many features are present to build its #manifest.json#
Different Javascript functions use the DOM to communicate


### browser_action

It is positioned in the action bar and displays different button: 

- Journées du Logiciel Libre (JDLL) : http://www.jdll.org
- The Francophone site of the French community : http://www.mozfr.org
- The official elePHPants website : http://www.elephpant.com
- The fondation Mozilla : https://www.mozilla.org
- A RESET button


First realization: 

- A menu offers several buttons to click.
- More info add a frame of a different color
- A RESET button is used to return to the origin


The second effort:

- Post a popup at the bottom of the screen with different information, logo
- Each window allows to open a new tab to the chosen site


### content_scripts

The content scripting area allows you to change the inside of the window

- Regardless of the button, a border will be displayed to reduce the display area
- For the "Mozilla" button, a SERA message is displayed at the bottom of the website in a DIV tag

### background

Actions and animations are activated by background calls
They are declared in the file manifest.json


### Resources

The resources embed different images in the extension to avoid the chargers each time.
These images are displayed in the popup of choice of choice


### permission

Different permissions have been added to allow the extension to work


## Crédit
(c) Christophe Villeneuve - 2017



