<template>
    <div class="core">
        <slot></slot>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .core {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>