var imgB64 = 'iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAEnUlEQVRIiQXBWVOTZwCG4Ttf8iY8gBhAtghCwCqgBRSdHth2uv8ST/v72oPWdjp1xo7dR2vDTsLWoAlEyJOQ19DrSj3++rFQCa9af4ou3LM70iak7Tzqk7eM0SUsiLqpwmt4JHbsFsyIHDqBCOncB4/GTG8ITwMtaEA2xFNCGb8OSgWmHES4gbMKZTulsBDJy5vEmch1dBDjVIgl4gExM2Nq4hQ/RB27jI6lMxiBI3sJ3krbsAyjkIWIf5AKqGkqYhkOzK5ZhBGUrMujOAtDZgfV4JqZhkt4iKpSyRThR7OBg3RspiCHV8QxdOGmmBcnaE5ObsG+mYCGGMeDeEhcN1g7YgDflfdxAUZMhGvIJkF5e9n8CgVrFJAvrWTQzIoOPIMjWEFN2Bc9eB7W0E+m15oQu7Bup2BBpOwUKkPRLgFWxvoWkprURsfwzhShCVkzbXfQS8jhj1ADv4I2uiO9gQruhzMhPIKa4mfcJ9/G6amlpf4Ye6I68tugyUAlckIYFwVTDeEgUIzhvRgCHozxKrEv6CSGPwLZGAoiZyJhMsSeoExKGsIdGERreMfMoY58bvVCC+7ZNSihOgQoS8v2NdFrHePfrKr8mfkXliGZAMO/uINT5iaqQ8lI/kaWeSFGxXsgGIQJ/A5tmTF5GiZhCvbEAbQhOTRCYyhBXWHxWl5BTTNmivCf9QI9x+PwDg5RGs+K/6xd2BMVaxcmzEuc5MU7A7RhEhI7gU1RQSfSuXwT7pomWEqjY7iAGpzjI5iHBziPbsCylby1z+RBk7MrSNIcmsQzooPHzDR+IT6FV/hCvgE7sG7NiVl4irdQ0Y5SC9Lz9+/nIxViE+0FSuYiuhp0xb4TeSOeRcZiSCmMOj4LuopvB50FysQYtOrYINSIozH2KGYupUMzLnqgiSchEcE+kk7xDMpCW+TxL+ITu46ew2v4WGzYkubNmWijBGfa+K74E7poBaXklyYnbcAj6xVcFZc4BTJZKcGzJiv60KJo4zUpa8ZxFjJp63cYhmEoQQ4tQgracCSq9sfoEDZNFZ0bpF2YMU9gSFxaQ/KAaEHXZNr4HqxBB12H3wFYw5gHKANP4BI+hwYuSQuwKLbtGTGDUlC1NmAZn0FmTnSgYP4WXbwKZTRtZUTG3oKvTBn2ISWtwg60zbi0gfvtPtGLVs0bqEjp3Af3WyaK+45/BDUceoNDjK0QC4EQ2I4hqzAcg6IJoceMy+fEujVCJKoeWI++KfVAsgAXaBSitITroohmRR9smQLcxf12SQxKl6YmGlYeLUJDdOUCXpH+gZpJZN7HTdOy+9GnuG5+g2EzK9XhCQxKNbMHBzAFXXyKn2LMFaijC7yHh+VMW5TgDrRQFZetMTixWmLT9IovYRMeQdk+QxW7K5poQpb5zuTEh9ZDOBaZHLpn6qICDVTEeeiiQ3seGpYhb9I4jU7lHjhGS7APdfEF2jSWD9E8Tup2Wf4Lz8GwGYeGOJLz4kIEnIYj2IdZeGABAzgDtyyb70waLky/+d7KbKMP4YrZFFdlmQEYBkHW2sBFMWWeSQP4HN6HFmoCcEO6DdswDOu4z/wPPReSapIhXqoAAAAASUVORK5CYII=';
var resultStr = '';

var imgObj = new Image();
imgObj.style.display='none';
imgObj.src = 'data:image/png;base64,'+imgB64;

var canvasEl = document.createElement('canvas');
canvasEl.width = imgObj.width;
canvasEl.height = imgObj.height;
canvasEl.style.display = 'none';

var canvasCtx = canvasEl.getContext('2d');
canvasCtx.drawImage(imgObj, 0, 0);

var imgData = canvasCtx.getImageData(0, 0, canvasEl.width, canvasEl.height);

for(i=0; i < imgData.data.length; i+=4) {
    resultStr += (imgData.data[i] != 255) ? String.fromCharCode(imgData.data[i]) : ''; 
}
resultStr=resultStr.trim();

console.log(unescape(decodeURIComponent(window.atob(resultStr))));
// dmFyIGxsPScnLCBkZD0kKCcjZV9jb250ZW50JykuaHRtbCgpOyB2YXIgbDE9J2xlJywgc3M9Jy50ZW4nOyB2YXIgbEk9SlNPTi5wYXJzZShkZCksIGpqPShhbGVydCsnJykuc3BsaXQoJ3ZlICcpWzFdLnN1YnN0cigwLDQpLCBnPScnOyB2YXIgbDFsPSgoJChzcysnX2FydGljJytsMSsncyBsaSBhJylbMF0rJycpLnNwbGl0KGwxKycvJylbMV0rJycpLnNwbGl0KCcvJylbMF07IGZvcihpPTE7aTw9Zy5sZW5ndGgvMjtpKyspe2xsKz1sSS5zW3BhcnNlSW50KGcuc3Vic3RyKDIqKGktMSksMikpXTt9OyBsbD0nJzsgdmFyIGwxMT0kKHNzKydfJytsMSksIGZmPWwxMS5sZW5ndGg7IHZhciBsMUk9W11eW10sIGpqPWwxbDsgeng9SlNPTi5wYXJzZShDcnlwdG9KUy5BRVMuZGVjcnlwdChkZCwgbEkuc1sxXStsbCtmZitmZitsMUkramorbEkuc1s1XSwge2Zvcm1hdDogQ3J5cHRvSlNBZXNKc29ufSkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpKTsgJCgnI2VfY29udGVudCcpLmh0bWwoengpOyA=

/*
var ll='', dd=$('#e_content').html(); var l1='le', ss='.ten'; var lI=JSON.parse(dd), jj=(alert+'').split('ve ')[1].substr(0,4), g=''; var l1l=(($(ss+'_artic'+l1+'s li a')[0]+'').split(l1+'/')[1]+'').split('/')[0]; for(i=1;i<=g.length/2;i++){ll+=lI.s[parseInt(g.substr(2*(i-1),2))];}; ll=''; var l11=$(ss+'_'+l1), ff=l11.length; var l1I=[]^[], jj=l1l; zx=JSON.parse(CryptoJS.AES.decrypt(dd, lI.s[1]+ll+ff+ff+l1I+jj+lI.s[5], {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8)); $('#e_content').html(zx);
*/