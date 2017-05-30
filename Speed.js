(function (count,fileds) {
    function cl(id){x=document.getElementById(id);return x?(x.className.indexOf('bomb')!=-1?1:0):0;}
    var bombs=0;
    for(i=0;i<fileds;i++){
        r=document.createElement('div');
        if(Math.random()*fileds<count){r.className='bomb close',document.getElementById('text').innerHTML=(++bombs)+' bomb\'s';}
        else r.className='close';
        r.id=Math.floor(i/10)+'_'+i%10;
        document.body.appendChild(r);
    }
    function open(i,j){
        dom=document.getElementById(i+'_'+j);
        if(!dom||dom.className.indexOf('close')==-1)return;
        if(dom.className.indexOf('bomb')!=-1){
            divs=document.getElementsByTagName('div');
            for(i=0;i<divs.length;i++)divs[i].className=divs[i].className.indexOf('bomb')!=-1?'bomb':'';
            alert('You lose!');
        }
}(10,100));