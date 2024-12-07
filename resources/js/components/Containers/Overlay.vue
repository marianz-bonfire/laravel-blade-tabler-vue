<template>
    <div
        ref="overlay"
        class="overlay-container"
        v-show="visible"
        tabindex="0"
        @keyup.esc.stop.prevent="closeOverlay"
    >
        <div class="overlay-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'overlay',
        props: {
            visible: {
                type: Boolean
            },
            canEscape: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            closeOverlay() {
                if (!this.canEscape) {
                    return;
                }

                this.$emit('update:visible', false);
            }
        },
        watch: {
            'visible': function(value) {
                if (value) {
                    this.$nextTick(() => {
                        this.$refs.overlay.focus();
                    });
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .overlay-container {
        position: absolute;
        overflow: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        z-index: 1000;
    }
    .overlay-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>
