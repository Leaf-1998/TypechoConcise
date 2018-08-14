document.body.onload = function() {
    var div = document.createElement('div');
    var diva = document.getElementById('header');
    diva.parentNode.insertBefore(div, diva);
    div.id = 'top-img';
    div.className = 'section';
    diva.className = 'clearfix sectionfp-auto-height';
};