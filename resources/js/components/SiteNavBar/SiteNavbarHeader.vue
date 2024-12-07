<template>
    <header class="navbar navbar-expand-md sticky-top d-print-none">
        <container>
            <!--Toggle menu for mobile view-->
            <button class="navbar-toggler" type="button" @click="toggleMenu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <slot name="site-navbar-logo">
                <site-navbar-logo :image-url="imageUrl" :href="href" :alt="alt" />
            </slot>

            <div class="navbar-nav flex-row order-md-last">
                <slot name="site-navbar-buttons">
                    <site-navbar-buttons />
                </slot>
                <div class="d-none d-md-flex">
                    <site-navbar-toggle-theme></site-navbar-toggle-theme>
                    <slot name="site-navbar-notifications">
                        <site-navbar-notifications />
                    </slot>
                </div>
                <slot></slot>
            </div>
        </container>
    </header>
</template>

<script>
export default {
    name: "site-navbar-header",
    props: {
        imageUrl: { default: '/' },
        href: { default: '' },
        alt: { default: 'Tabler Vue' },
    },

    methods: {
        toggleMenu(e) {
            e.preventDefault()
            this.$emit('toggle-menu')
        }
    }
}
</script>

<style scoped></style>