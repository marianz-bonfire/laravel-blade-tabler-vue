<template>
    <page-wrapper>
        <page-header :title="title" />
        <div class="page-body">
            <slot></slot>

        </div>
    </page-wrapper>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageWrapper from "./PageWrapper.vue";

export default {
    name: "page",
    props: {
        title: { default: '', type: String }
    },
    components: {
        PageHeader,
        PageWrapper
    }
}
</script>

<style scoped></style>