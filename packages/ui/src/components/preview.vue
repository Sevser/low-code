<template>
    <div>
        <div v-if="showIframe">
            <iframe :src="iframeUrl"></iframe>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    inject: ['getSelectedElement'],
    name: 'preview',
    data() {
        return {
            showIframe: false,
            guid: null,
        };
    },
    computed: {
        iframeUrl() {
            return `http://localhost:4500/viewModel?guid=${this.guid}`;
        },
        selectedElement() {
            return this.getSelectedElement();
        }
    },
    watch: {
        selectedElement() {
            this.createPreview();
        },
    },
    methods: {
        async createPreview() {
            this.showIframe = false;
            if (!this.selectedElement) {
                return;
            }
            const data = await axios.post('http://localhost:4500/create', {
                data: {
                    model: this.selectedElement,
                }
            });
            this.guid = data.data.data.guid;
            setTimeout(() => {
                this.showIframe = true;
            });
        },
    },
    mounted() {
        this.createPreview();
    },
}
</script>