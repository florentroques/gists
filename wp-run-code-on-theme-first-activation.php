<?php

add_action('after_switch_theme', 'theme_first_activation_setup');

function theme_first_activation_setup()
{
	if (get_option('theme_name_first_theme_activation') === false) {
		// Set a flag if the theme activation happened
		add_option('theme_name_first_theme_activation', true, '', false);

		// stuff here only runs once, when the theme is activated for the 1st time
    
  }
}
