const { createApp } = Vue;

createApp({
    data() {
        return {
            fileurl: './icons/',
            message: 'Welcome, User!',
            cards
        }
    },
    methods: {
        // image path getter
        getImagePath(filename) {
            return this.fileurl + filename;
        }
    }
}).mount('#app');