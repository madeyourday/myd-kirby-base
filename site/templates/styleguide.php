<?php snippet('header') ?>
<?php snippet('styleguide-navigation') ?>

<br>

<?php if (strtolower($page->context()) == 'content'): ?>
	<div class="wrapper-styleguide-content">
		<div class="wrapper">
<?php elseif (strtolower($page->context()) == 'main' || !$page->context()): ?>
	<div class="wrapper">
<?php elseif (strtolower($page->context()) == 'main-fullwidth'): ?>
	<div class="wrapper-fullwidth">
<?php endif ?>

	<?php if ($page->hasFiles()): ?>
		<?php foreach ($page->files()->filterBy('extension', '==', 'html') as $file): ?>
			<?php echo kirbytext($page->{'note_' . preg_replace('/^\d+-/', '', $file->name())}()) ?>
			<?php snippet('styleguide-element', array('element' => $file->root())) ?>
		<?php endforeach ?>
	<?php endif ?>

<?php if (strtolower($page->context()) == 'content'): ?>
		</div>
	</div>
<?php elseif (strtolower($page->context()) == 'main' || !$page->context()): ?>
	</div>
<?php elseif (strtolower($page->context()) == 'main-fullwidth'): ?>
	</div>
<?php endif ?>

<?php snippet('footer') ?>
