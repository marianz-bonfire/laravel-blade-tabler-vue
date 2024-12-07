<template>
    <div class="module-container">
        
    </div>
</template>

<script>

    export default {
        components: {
        },
        data() {
            return {
               
            }
        },
        mounted() {
            $('.dropdown-toggle').dropdown();

            $('.btn-popover').popover({
                trigger: 'focus'
            });
        },
        methods: {
            create() {
                window.open("/user/detail", "_blank");
            },           

            exportListAsPDF() {},

            exportListAsExcel() {}
        }
    }
</script>

<style lang="scss" scoped>
    .employee-profile {
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
        }
    }

    .employee-image {
        width: 150px;
        height: 150px;
        img {
            width: 150px;
            height: 150px;
            padding: 5px;
        }
    }
</style>