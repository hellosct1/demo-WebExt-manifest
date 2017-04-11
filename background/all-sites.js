(function (doc, browser) {
    "use strict";

  
    function initiate()
    {
      document.body.style.border = "10px solid #FF00AA";
    }

    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        initiate();
    } else {
        doc.addEventListener("DOMContentLoaded", initiate);
        window.addEventListener("load", initiate);
    } 
})(document, chrome||browser);
