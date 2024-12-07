export default {
    name: 'container',
    props: {
      maxWidth: 0
    },
    template: `<div class="container-xl"><slot/></div>`,
    computed: {
        style() {
            const style = {maxWidth: this.maxWidth}
            return style
        }
    }
}