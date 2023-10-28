let tab;
let tabContent;
clickField=document.getElementById("second-tab");

window.onload=function(){
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}
function hideTabsContent(a){
    for (let i=a;i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tabs').onclick=function(event){
    let target=event.target;
    if(target.className=='tab'){
        for(let i=0; i<tab.length;i++){
            if(target==tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}
function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
function generate(){
    let rtl=document.getElementById('rtl').value;
    let rtr=document.getElementById('rtr').value;
    let rbr=document.getElementById('rbr').value;
    let rbl=document.getElementById('rbl').value;
    
    let ttl=document.getElementById('ttl');
    let ttr=document.getElementById('ttr');
    let tbr=document.getElementById('tbr');
    let tbl=document.getElementById('tbl');
    
    let block=document.getElementById('block');

    let text=document.querySelector("textarea");
    
    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;
   
    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';

    text.value='border-radius:'+block.style.borderRadius+';';
}
clickField.addEventListener('click', listPositionGenerator);
function listPositionGenerator(){
    let list=document.querySelector("ul");
    let text=document.getElementById("text");
    if(list.style.listStylePosition =="inside"){
        list.style.listStylePosition="outside";
    } else{
        list.style.listStylePosition="inside";
    }
    text.value='listStylePosition:'+list.style.listStylePosition+';';
}
function listTypeGenerator(){
    let list=document.getElementById("third");
    let selector=document.querySelector("select");
    list.style.listStyleType=selector.value;
    let text=document.getElementById("last-text");
    text.value='ListStylePosition:'+list.style.listStyleType+';';
}