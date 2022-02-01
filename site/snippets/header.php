<!doctype html>
<html class="no-js" lang="">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<?php echo css('assets/css/main.css') ?>
	</head>
<body>
<header class="header" role="banner">
	<a class="logo" href="<?php echo url() ?>">
		<img src="<?php echo url('assets/images/logo.svg') ?>" alt="<?php echo $site->title()->html() ?>" />
	</a>
	<?php snippet('navigation') ?>
</header>
