const App = new Vue({
    el: "#app",
    data: {
        currentFilm: [],
        value: "",
        apiKey: "fe5a411220156931adf0623172772b2b",
        lenguage: "it-IT",
        areFilm: false,
        areTv: false,
    },
    methods: {
        searchFilm: function(){

            axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: "fe5a411220156931adf0623172772b2b",
                    language: "it-IT",
                    query: this.value,
                }
            })
            .then((response) => {
                /* console.log(response.data.results); */
                this.currentFilm = response.data.results;
                /* console.log(this.currentFilm); */
            })

            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: this.apiKey,
                    language: this.lenguage,
                    query: this.value,
                }
            })
                .then((response) => {
                    /* console.log(response.data.results); */
                    this.currentFilm = [...this.currentFilm, ...response.data.results];
                    /* console.log(this.currentFilm); */
                })
        }
    },
})