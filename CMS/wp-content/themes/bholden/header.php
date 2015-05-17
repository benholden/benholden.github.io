<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:700|Open+Sans:400italic,700italic,400,700' rel='stylesheet' type='text/css'>
	<script src="<?php echo get_template_directory_uri(); ?>/static/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="page" class="hfeed site">
		<header class="container-fluid header-bar dk-grey-bg">
			<!-- Example row of columns -->

			<div class="row">
				<div class="logo"><span class="logo-highlight">B</span><span class="logo-text">Holden</span></div>
				<div class="navigation">
					<div class="nav-button">
						<span class="glyphicon glyphicon-align-justify"></span>
					</div>
					<ul class="nav-items">
						<li><a href="#home" class="nav-link nav-link-1">Home</a></li>
						<li><a href="#about-me" class="nav-link nav-link-2">About Me</a></li>
						<li><a href="#work" class="nav-link nav-link-3">Work</a></li>
						<li><a href="#notes" class="nav-link nav-link-4">Notes</a></li>
						<li><a href="#contact-me" class="nav-link nav-link-5">Contact me</a></li>
					</ul>
				</div>
			</div>
		</header><!-- /header -->

		<div id="main" class="site-main">
