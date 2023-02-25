<script>
export default {

    // Return movie list to display
    data() {
        return {
           movieList: ''
        }
    },

    // The method used to call the backend search
    methods: {
        searchMovies() {
           movieList = backend.movieSearch(movieSubject);
        }
    },

    // Include backend script
    mounted() {
        let backendScript = document.createElement('script')
        backendScript.setAttribute('src', '../webservice/backendSearch.js')
        document.head.appendChild(backendScript)
        console.log(`The page has been loaded`)
    }
}
</script>

<template>
    <input v-model="movieSubject" placeholder="Movie subject" />
    <button @click="searchMovies">Search</button>
    <p>Your movie list</p>
    <p> {{ movieList }}</p>
</template>
