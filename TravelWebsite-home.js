$('#dialog').click(function ()
{
    $(this).speedoPopup(
    {
        width:550,
        height:265,
        useFrame: TRUE,
        href: '#divContentToPopup'
    });
});