// Contact form validation
$('#contactForm').on('submit', function(e){
    e.preventDefault();
    let valid = true;
    $(this).find('input, textarea').each(function(){
        if(!this.checkValidity()) valid = false;
        $(this).toggleClass('is-invalid', !this.checkValidity());
        $(this).toggleClass('is-valid', this.checkValidity());
    });
    if(valid) alert('Form submitted successfully!');
});

// Project buttons click
$('.view-btn').click(function(){
    alert('Project details coming soon!');
});
