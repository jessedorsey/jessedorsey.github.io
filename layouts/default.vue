<template>
    <div>
        <SiteHeader />
        <div class="site-container">
            <slot />
        </div>
        <SiteFooter />
    </div>
</template>
<style>
html,
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.site-container {
    padding-top: 50px;
}


@media (max-width: 480px) {
    .site-container {
        padding-top: 5em;
    }
}
</style>