<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once 'inc/scripts-and-styles.php';
require_once 'inc/render.php';

/**
 * Register the post list block and render callback functions.
 * Also registers the filter for rendering the post list.
 */
function bb_guten_post_list_init_block() {
	register_block_type( 'bigbite/postlist', array(
		'render_callback' => 'bb_render_post_list_block',
		'editor_script'   => 'guten_post_list-cgb-block-js',
	) );

	add_filter( 'gutenberg_post_list_render_filter', 'render_guten_post_list_filter', 10, 2 );
}

add_action( 'init', 'bb_guten_post_list_init_block' );
