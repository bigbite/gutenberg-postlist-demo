/**
 * Post Component.
 *
 * @param {string} postTitle - Current post title.
 * @param {function} clickHandler - this is the handling function for the add/remove function
 * @param {Integer} postId - Current post ID
 * @param {string|boolean} featured_image - Posts featured image
 * @param icon
 * @returns {*} Post HTML.
 */
export const Post = ({ title: { rendered: postTitle } = {}, clickHandler, id: postId, featured_image = false, icon }) => (
	<article className="post">
		<figure className="post-figure" style={{ backgroundImage: `url(${featured_image})` }}>
		</figure>
		<div className="post-body">
			<h3 className="post-title">{postTitle}</h3>
		</div>
		<button onClick={() => clickHandler(postId)}>{icon}</button>
	</article>
);
