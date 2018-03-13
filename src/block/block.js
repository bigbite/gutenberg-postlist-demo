/**
 * BLOCK: guten-post-list
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import { PostSelector } from './components/PostSelector';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType, PlainText } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'bigbite/postlist', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'guten-post-list - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'guten-post-list — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		blockTitle: {
			type: 'string'
		},
		selectedPosts: {
			type: 'array',
			default: []
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: class extends Component {
		constructor(props) {
			super(...arguments);
			this.props = props;

			this.onTitleChange = this.onTitleChange.bind(this);
			this.updateSelectedPosts = this.updateSelectedPosts.bind(this);
		}

		onTitleChange(blockTitle) {
			this.props.setAttributes({ blockTitle });
		}

		updateSelectedPosts( selectedPosts ) {
			this.props.setAttributes({ selectedPosts });
		}

		render() {
			const { className, attributes: { blockTitle = '' } = {} } = this.props;

			return (
				<div className={className}>
					<div className="title-wrapper">
						<PlainText
							value={blockTitle}
							onChange={this.onTitleChange}
						/>
					</div>
					<PostSelector
						selectedPosts={this.props.attributes.selectedPosts}
						updateSelectedPosts={this.updateSelectedPosts}
					/>
				</div>
			);
		}
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: () => {
		return null;
	},
} );
