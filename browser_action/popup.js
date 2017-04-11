(function(browser) {
  "use strict";

  // message Welcome
  document.getElementById("message").textContent ="Welcome the demo manifest";

  document.getElementById("jdll").onclick = function() {
      document.body.style.border = "10px solid #FF0000";
      view("JDLL", 
	   "Hello Man... this is a event : Journées du Logiciel Libre (JDLL) 2017", 
	   "http://www.jdll.org",
	   "/resources/jdll.png");
  };

  document.getElementById("mozfr").onclick = function() {
      document.body.style.border = "30px solid #00FF00";
      view("MOZ fr", 
	   "the site of the french community Mozilla", 
	   "http://www.mozfr.org",
	   "/resources/mozfr.png");
  };
    
  document.getElementById("elePHPant").onclick = function() {
      document.body.style.border = "20px solid #AAAAAA";
      view("elePHPant", 
	   "the elePHPant official", 
	   "http://www.elephpant.com",
	   "/resources/elephpant.png");
  };

  document.getElementById("mozilla").onclick = function() {
      document.body.style.border = "10px solid #0000FF";
      view("mozilla", 
	   "Fondation Mozilla", 
	   "https://www.mozilla.org",
	   "/resources/mozilla.png");
  };
  
  document.getElementById("reset").onclick = function() {
      document.body.style.border = "0px solid #000000";
  };   

  
// view POPUP  
function view(title, message, url, picture) {
    var id = url;
    
    var datas = {
      "type":    "basic",
      "title":   title,
      "iconUrl": picture,
      "message": message,
      "requireInteraction": true
    };

    try {
      if (id) {
	browser.notifications.create(id, datas, function() {});
	execute(id,datas);
      }
    } catch (ee) {
      delete datas.requireInteraction;
      browser.notifications.create(id, datas, function() {});
      execute(id,datas);
    }	  
}
    
    
// Execute    
function execute(id,datas) {     
    browser.notifications.onClicked.addListener(function(id, byUser) {
      if (/^(http|https):\/\//.test(id)) {
            setTimeout(function() {
                browser.tabs.create({ "url": id });
            }, 1);
      }

      browser.notifications.clear(id);
    });
    
}


})(chrome||browser);
