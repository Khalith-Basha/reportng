function toggleDiv(divId)
{
    if (document.getElementById)
    {
        var current = document.getElementById(divId).style;
        current.display = current.display == 'block' ? 'none' : 'block';

    }
    else if (document.all)
    {
        var current = document.all[divId].style;
        current.display = current.display ? "" : "block";
    }
}


function toggle(toggleId)
{
    var toggle;
    if (document.getElementById)
    {
        toggle = document.getElementById(toggleId);
    }
    else if (document.all)
    {
        toggle = document.all[toggleId];
    }
    toggle.innerHTML = toggle.innerHTML == "+" ? "-" : "+";
}