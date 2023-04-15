function fun(){
    var api="https://chart.googleapis.com/chart?cht=qr&chs=";
    var img=document.getElementById("myimg");
    var width=document.getElementById("select").value;
    var text=document.getElementById("mytext").value;
    if(text!==""&&width=="100x100")
    {
        img.src=api+width+"&chl="+text;
    }
    else if(text!==""&&width=="150x150")
    {
        img.src=api+width+"&chl="+text;
    }
    else if(text!==""&&width=="200x200")
    {
        img.src=api+width+"&chl="+text;
    }
    else if(text!==""&&width=="250x250")
    {
        img.src=api+width+"&chl="+text;
    }
    else if(text!==""&&width=="300x300")
    {
        img.src=api+width+"&chl="+text;
    }
    else{
        alert("ENTER TEXT");
    }

}

$(document).ready(function(){
    $("#q").click(function(){
        $("h1").toggleClass("a");
        $("body").toggleClass("que");
        $("#b1").toggleClass("b2");
        $("#q").toggleClass("j");
    });
});