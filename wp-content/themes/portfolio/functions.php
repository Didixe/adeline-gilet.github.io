<?php   

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/assets/css/theme.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/theme.css'));
    wp_enqueue_style('header-style', get_stylesheet_directory_uri() . '/assets/css/header.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/header.css'));
    wp_enqueue_style('firstPart-style', get_stylesheet_directory_uri() . '/assets/css/firstPart.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/firstPart.css'));
    wp_enqueue_style('secondPart-style', get_stylesheet_directory_uri() . '/assets/css/secondPart.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/secondPart.css'));
    wp_enqueue_style('footer-style', get_stylesheet_directory_uri() . '/assets/css/footer.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/footer.css'));
    wp_enqueue_style('form-style', get_stylesheet_directory_uri() . '/assets/css/form.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/form.css'));
    wp_enqueue_style('projects-style', get_stylesheet_directory_uri() . '/assets/css/projects.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/projects.css'));

    wp_enqueue_script('header-script', get_stylesheet_directory_uri() . '/assets/js/header.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/js/header.js'), true);
    wp_enqueue_script('animationText-script', get_stylesheet_directory_uri() . '/assets/js/animationText.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/js/animationText.js'), true);
    wp_enqueue_script('carrouselAnimation-script', get_stylesheet_directory_uri() . '/assets/js/carrouselAnimation.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/js/carrouselAnimation.js'), true);
    wp_enqueue_script('parallax-script', get_stylesheet_directory_uri() . '/assets/js/parallax.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/js/parallax.js'), true);
    wp_enqueue_script('pictureAnimation-script', get_stylesheet_directory_uri() . '/assets/js/pictureAnimation.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/js/pictureAnimation.js'), true);

}

