$(document).ready(function (){
  $("#name").hide();
  $(".menu").hide();
  $(".description").hide();
  $(".projects").hide();

  $("#about").click(function(){
    aboutMeClick();
  });

  $("#projects").click(function(){
    projectsClick();
  });

  $("#exit").click(function () {
    exitClick();
  });

  setTimeout(function() {
    $("#name").fadeIn(1000);
    showAbout();
  }, 500);
});

function projectsClick() {
  $(".menu").fadeOut(500);
  $(".projects").fadeIn(1000);
  $(".projects").css("z-index", "2");
}

function exitClick() {
  $(".menu").fadeIn(1000);
  $(".projects").fadeOut(500);
  $(".menu").css("z-index", "2");
}


function aboutMeClick() {
  // $(".landingPage").css("background-image", "url(media/koda-fine-bg.png)");
  $(".description").fadeIn(1000);
}

function showAbout() {
  setTimeout(function() {
    $("#about").fadeIn(1000);
    showResume();
  }, 1000);
}

function showResume() {
  setTimeout(function() {
    $("#resume").fadeIn(1000);
    showProjects();
  }, 300);
}

function showProjects() {
  setTimeout(function() {
    $("#projects").fadeIn(1000);
    showGitHub();
  }, 300);
}

function showGitHub() {
  setTimeout(function() {
    $("#github").fadeIn(1000);
    showLinkedIn();
  }, 300);
}

function showLinkedIn() {
  setTimeout(function() {
    $("#linkedin").fadeIn(1000);
  }, 300);
}
