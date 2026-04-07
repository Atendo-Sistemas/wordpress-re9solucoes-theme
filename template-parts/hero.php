<?php
/**
 * Hero Section Template for Re9 Soluções Theme
 *
 * @package Re9_Solucoes
 */

// Define title and CTA button link here
$title = 'Welcome to Re9 Soluções';
$cta_link = '#'; // Change this to your CTA link

?>
<section class="hero">
    <div class="hero-content">
        <h1><?php echo esc_html( $title ); ?></h1>
        <a href="<?php echo esc_url( $cta_link ); ?>" class="btn btn-primary">Get Started</a>
    </div>
</section>
