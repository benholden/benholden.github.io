<?php
/*
Template Name: Homepage
*/
?>
	<?php get_header(); ?>
			<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<div class="entry-content">
						<h1 class="entry-title"><?php the_title(); ?></h1>
						<?php the_content(); ?>
						<?php the_block(block2); ?>
					</div><!-- .entry-content -->

				</article><!-- #post -->

			<?php endwhile; ?>

<?php get_footer(); ?>
