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
                selections: {
                    branch: {
                        options: [
                            { label: 'Branch 1', value: 'Branch 1' },
                            { label: 'Branch 2', value: 'Branch 2' },
                            { label: 'Branch 3', value: 'Branch 3' },
                        ]
                    },
                    department: {
                        options: [
                            { label: 'Department 1', value: 'Department 1' },
                            { label: 'Department 2', value: 'Department 2' },
                            { label: 'Department 3', value: 'Department 3' },
                        ]
                    },
                    position: {
                        options: [
                            { label: 'Position 1', value: 'Position 1' },
                            { label: 'Position 2', value: 'Position 2' },
                            { label: 'Position 3', value: 'Position 3' },
                        ]
                    },
                    role: {
                        options: [
                            { label: 'Role 1', value: 'Role 1' },
                            { label: 'Role 2', value: 'Role 2' },
                            { label: 'Role 3', value: 'Role 3' },
                        ]
                    },
                },                
                toggle: {
                    password: false
                }
            }
        },
        mounted() {
        },
        computed: {
        },
        methods: {
            

            generatePassword() {
                let randomPassword = Math.random().toString(36).substr(2, 8);
            },
        }
    }
</script>

<style lang="scss" scoped>

    .image-preview {
        img {
            width: 100px;
            height: 100px;
        }
    }
</style>