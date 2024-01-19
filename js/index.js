$(function(){
    $('#menu').slicknav({
        brand:"RONIT GUPTA",
        label:""
    });
});

$(document).ready(function() {
    $(".skitter-large").skitter({
        navigation:true,
        dots:false,
        auto_play:true,
        interval:2000,
        theme:"clean"
    });
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true

        },
        425:{
            items:2,
            nav:false,
            loop:true
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
    });
  });


  $(document).ready(function()
  {
    $(".progress_bar").animate({"width":"95%"},2500,function()
    {
        $(".progress_bar1").animate({"width":"91%"},2500,function()
        {
            $(".progress_bar2").animate({"width":"88%"},2500,function()
            {
                $(".progress_bar3").animate({"width":"96%"},2500)
            })
        });
    });
  });
  
  $(document).ready(function(){
    $(".one1").click(function()
    {
        window.open("AllProjectsWebsite/Car/index.html")
    });

    $(".two2").click(function()
    {
        window.open("AllProjectsWebsite/App/signupPage/index.html")
    });

    $(".three3").click(function()
    {
        window.open("AllProjectsWebsite/Page Viewver/index.html")
    });

    $(".four4").click(function()
    {
        window.open("AllProjectsWebsite/Tate Real World/index.html")
    });

    $(".five5").click(function()
    {
        window.open("AllProjectsWebsite/Spotify Music App/index.html")
    });

    $(".six6").click(function()
    {
        window.open("AllProjectsWebsite/Trading/index.html")
    });

    $(".seven7").click(function()
    {
        window.open("AllProjectsWebsite/Video Player/index.html")
    });

  });


