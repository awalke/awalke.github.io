function onResumeClick() {
  window.location='media/Allison_Walke_Resume.pdf';
}

function onNameClick() {
  $(document).ready(function(){
      $("#innerName").toggleClass("bgChange");
      $("#nameTitle").toggleClass("wordChange");
      $(".info").toggleClass("visible");
      $(".link").toggleClass("visible");
      // setTimeout(function () {
      //   $(".info").toggleClass("visible");
      // }, 1000);
  });
}

function onAboutClick() {
  $(document).ready(function(){
      $("#innerAbout").toggleClass("bgChange");
      $("#aboutTitle").toggleClass("wordChange");
      $(".aboutInfo").toggleClass("visible");
  });
}

function onProjectsClick() {
  $(document).ready(function(){
      $("#innerProjects").toggleClass("bgChange");
      $("#projectsTitle").toggleClass("wordChange");
      $(".projectsInfo").toggleClass("visible");
      $(".projLink").toggleClass("visible");
  });
}
