document.body.style.border = "20px solid #FF0000";

(function (headband, browser) {
    "use strict";
  
    function initiate()
    {
	//	console.log ("Custom home page Mozilla");

      var objet  = headband.createElement("div");
      
      objet.className = "DEMO-manifest";
      
      objet.style.width = "100%";
      objet.style.height = "50px";
      objet.style.background = "#00AAAA";
      objet.style.color = "#FFFF00";
      objet.style.textAlign = "center";
      objet.style.fontWeight = "bold";
      objet.style.fontSize = "25px";

      objet.innerHTML = "Thank you for visiting Mozilla's Customized Home Page";

      headband.body.appendChild(objet);
    }

    if (/^(interactive|complete)$/i.test(headband.readyState)) {
        initiate();
    } else {
        headband.addEventListener("DOMContentLoaded", initiate);
        window.addEventListener("load", initiate);
    }

})(document, chrome||browser);


