
function closepopupSignin () {
    document.getElementById('popupsignin_close').style.display='none'
    document.getElementById('bg_popup').style.display='none'

}

function showpopupSignin () {
    document.getElementById('popupsignin_close').style.display='block'
    document.getElementById('popuplogin_close').style.display='none'
    document.getElementById('bg_popup').style.display='block'

}

function closepopupLogin () {
    document.getElementById('popuplogin_close').style.display='none'
    document.getElementById('bg_popup').style.display='none'
    
}

function showpopupLogin () {
    document.getElementById('popuplogin_close').style.display='block'
    document.getElementById('popupsignin_close').style.display='none'
    document.getElementById('bg_popup').style.display='block'
    
}

function closepopup () {
    document.getElementById('popupsignin_close').style.display='none'
    document.getElementById('bg_popup').style.display='none'
    document.getElementById('popuplogin_close').style.display='none'
    document.getElementById('bg_popup').style.display='none'
}