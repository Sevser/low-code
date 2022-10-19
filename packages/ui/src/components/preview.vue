<template>
    <div>
        i am preview {{ selectedElement }}
    </div>
</template>
<script>
export default {
    inject: ['getSelectedElement'],
    name: 'preview',
    computed: {
        selectedElement() {
            return this.getSelectedElement();
        }
    }
}
</script>