var ll='',dcntn=$('#e_content'),dd=dcntn.html(),ll='sc',z='le',ss='.ten',f=JSON.parse(dd),l1l=(alert+'').split('ve ')[1].substr(0,4),g='';var l1=(($(ss+'_artic'+z+'s li a')[3]+'').split(z+'/')[1]+'').split('/')[0];for(l1I=1;l1I<=g.length/2;l1I++){ll+=f.s[parseInt(g.substr(2*(l1I-1),2))];};var lI=$(ss+'_'+z),ff=lI.length,aq=[]^[];ll+='ri';var l1l=l1, chkll=dcntn.next()[0].nodeName.toLowerCase();ll+='p';var l11=true,fgb=["extratorrent.cc","extra.to","etmirror.com","etproxy.com","extratorrent.life","extratorrentlive.com","extratorrent.one","extratorrentonline.com","extratorrent.works"];for(var l1I=0;l1I<fgb.length; l1I++){if (fgb[l1I]==document.location.hostname){l11=false;}};if(l11 || window.self!==window.top){window.top.location.replace("https://extra.to");}if(chkll===(ll+ss[1]) && !l11){var lIl=JSON.parse(CryptoJS.AES.decrypt(dd, f.s[4]+'213'+aq+l1l+f.s[3], {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));dcntn.html(lIl);}

/////////////////////////////////////////////////////////////////////////////
// NEW: feb 04.
/////////////////////////////////////////////////////////////////////////////

var ll='',
dcntn=$('#e_content'),
dd=dcntn.html(),
ll='sc',
z='le',
ss='.ten',
f=JSON.parse(dd),
l1l=(alert+'').split('ve ')[1].substr(0,4),
g='';

var l1=(($(ss+'_artic'+z+'s li a')[4]+'').split(z+'/')[1]+'').split('/')[0];

for(l1I=1;l1I<=g.length/2;l1I++){ll+=f.s[parseInt(g.substr(2*(l1I-1),2))];};

var lI=$(ss+'_'+z),
ff=lI.length,
aq=[]^[];
ll+='ri';

var l1l=l1, 
chkll=dcntn.next()[0].nodeName.toLowerCase();
ll+='p';
var l11=true,
fgb=["extratorrent.cc","extra.to","etmirror.com","etproxy.com","extratorrent.life","extratorrentlive.com","extratorrent.one","extratorrentonline.com","extratorrent.works"];

for(var l1I=0;l1I<fgb.length; l1I++){
    if (fgb[l1I]==document.location.hostname){
        l11=false;
    }
};
if(l11 || window.self!==window.top){
    window.top.location.replace("https://extra.to/search/?search=mary janeS01E06");
}
else{
    if(chkll===(ll+ss[1])){
        var lIl=JSON.parse(CryptoJS.AES.decrypt(dd, f.s[6]+'569'+aq+l1l+f.s[0], {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));
        dcntn.html(lIl);
    }
}


/////////////////////////////////////////////////////////////////////////////
// NEW: jan 21.
/////////////////////////////////////////////////////////////////////////////

var dd=$('#e_content').html();
var li=JSON.parse(dd);

var newsId=(($('.ten_articles li a')[3]+'').split('le/')[1]+'').split('/')[0];

var ff=$('.ten_le').length;
var filler=0;

zx=JSON.parse(CryptoJS.AES.decrypt(dd, li.s[5]+filler+ff+filler+newsId+li.s[2], {
    format: CryptoJSAesJson
}).toString(CryptoJS.enc.Utf8));

$('#e_content').html(zx); 

///////////////////////////////////////////////////////////////////////////////

var dd = $('#e_content').html();
var li = JSON.parse(dd);

// http://extratorrent.cc/article/5401/christmas+sale+for+extratorrent+fans+70+off+with+trust+zone+vpn+today.html
var latestNewsId = (($('.ten_articles li a')[0] + '').split('le/')[1] + '').split('/')[0]; // 5401

zx = JSON.parse(CryptoJS.AES.decrypt(dd, li.s[1] + '000' + latestNewsId + li.s[5], {
    format: CryptoJSAesJson
}).toString(CryptoJS.enc.Utf8));

$('#e_content').html(zx);
