<div class="styleguide-element">
	<?php
		ob_start();
		include $element;
		$output = ob_get_clean();
		echo $output;
	?>
	<pre class="styleguide-element-source source-code language-markup"><code><?php echo html($output) ?></code></pre>
</div>
