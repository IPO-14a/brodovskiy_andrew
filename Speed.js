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
}(10,100));