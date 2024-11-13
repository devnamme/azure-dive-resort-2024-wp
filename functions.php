<?php

define('THEME_URI', get_template_directory_uri());


function azure_add_title_support() {
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'azure_add_title_support');


function azure_register_styles() {
    $version = wp_get_theme()->get('Version');

    wp_enqueue_style('styles-tailwind', get_template_directory_uri() . '/default/css/tailwind-output.css', array(), $version, 'all');
    wp_enqueue_style('styles-fonts', get_template_directory_uri() . '/default/css/fonts.css', array(), $version, 'all');
}

add_action('wp_enqueue_scripts', 'azure_register_styles');

/**
 * Disables WordPress admin bar
 */
add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );

?>