function registerNavButtons() {
  var sections = ['aboutme', 'resume', 'portfolio', 'projects', 'contactme'];

  sections.forEach(function(section) {
    clickAndScroll('#nav-' + section, '#' + section + '-section');
  });
}

function clickAndScroll(link, section) {
  var delay = 700;

  $(link).click(function() {
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, delay);

    return false;
  });
}