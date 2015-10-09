
(function t (){    
    marquee = document.createElement("marquee");
    body = document.getElementsByTagName("body")[0];
    marquee.innerHTML = body.innerHTML;
    body.innerHTML = "";
    body.appendChild(marquee);
})();