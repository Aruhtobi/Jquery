$(document).ready(function(){
    console.log('Coucou')
$('#monBoutton').on('click', function(){
    alert('Aïe')
})
$('#formulaire').submit(function(event){
    event.preventDefault()
    alert('tu envoie mon formulaire')
})
    $('#Mdp').focus(function(){
        var str = ""
$('#Mdp').keydown(function(){
    if (event.keycode != 16 || event.keycode != 13 || event.keycode != 13)
    str = str + event.key
    console.log(str)
})
})
})