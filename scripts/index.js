var listNodes = document.getElementById('original').childNodes;
var result = '';
    for (let p of listNodes) {
        if(p.tagName != undefined){
            if (p.innerHTML.indexOf("https")!=-1){
                let strHref = p.innerHTML.split(' ');
                result += `<p>${strHref[0]} <a href="${strHref[1]}">${strHref[1]}</a></p>`;
            }
            else {
                result += `<p>${p.innerHTML}</p>`;            
            }
      }  
    }
document.getElementById('col-right').innerHTML = `${result}`;