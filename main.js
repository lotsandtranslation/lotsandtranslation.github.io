function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

r(function(){
    var s = 'moc.noitalsnartdnastol@akinom';
    var e = s.split("").reverse().join("");
    $('#email').html('<a href="mailto:'+e+'">'+e+'</a>');
});
var random_images_array = ["VC-front-white.png" ,"VC-front-black.png", "VC-front-grey.png", "VC-front-skin.png"];

function getRandomImage(imgAr, path) {
    path = path || 'img/';
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}