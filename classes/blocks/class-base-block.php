<?php
/**
 * Base block class.
 *
 * @package P4GBKS
 */

namespace P4GBKS\Blocks;

/**
 * Class Base_Block
 *
 * @package P4GBKS\Blocks
 */
abstract class Base_Block {

	protected const CSS_VARIABLES_ATTRIBUTE = [
		'type'    => 'object',
		'default' => [],
	];

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	abstract public function prepare_data( $fields ): array;

	/**
	 * @param array $attributes Block attributes.
	 *
	 * @return mixed
	 */
	public function render( $attributes ) {

		$data = $this->prepare_data( $attributes );

		\Timber::$locations = P4GBKS_PLUGIN_DIR . '/templates/blocks';

		$block_output = \Timber::compile( static::BLOCK_NAME . '.twig', $data );

		// phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText
		$empty_message = defined( 'static::EMPTY_MESSAGE' ) ? __( static::EMPTY_MESSAGE, 'planet4-blocks' ) : "Block content is empty. Check the block's settings or remove it.";

		// Return empty string if rendered output contains only whitespace or new lines.
		// If it is a rest request from editor/admin area, return a message that block has no content.
		$empty_content = $this->is_rest_request() ? '<div class="EmptyMessage">' . $empty_message . '</div>' : '';

		return ctype_space( $block_output ) ? $empty_content : $block_output;
	}

	/**
	 * Outputs an error message.
	 *
	 * @param string $message Error message.
	 */
	public function render_error_message( $message ) {
		// Ensure only editors see the error, not visitors to the website.
		if ( current_user_can( 'edit_posts' ) ) {
			\Timber::render(
				P4GBKS_PLUGIN_DIR . 'templates/block-error-message.twig',
				[
					'category' => __( 'Error', 'planet4-blocks' ),
					'message'  => $message,
				]
			);
		}
	}

	/**
	 * Returns if current request is a rest api request.
	 *
	 * @return bool
	 */
	protected function is_rest_request() {
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return true;
		}
		return false;
	}

	/**
	 * Update the attributes of a block to the latest version.
	 * It returns an array with the new version of the block attributes.
	 * PHPCS does not allow me to add the return type if there is no return statement, but here we always throw an
	 * exception, so adding a return after triggers another CS rule. Disabling the violated rule,
	 * Squiz.Commenting.FunctionComment.InvalidNoReturn, is not working in the doc comment.
	 *
	 * @param array $fields The old version of the block attributes.
	 * @throws NotImplemented If no implementation is given by the subclass.
	 */
	public static function update_data( array $fields ) {
		throw new NotImplemented( 'Method update_data is not implemented for ' . static::class );
	}
}
