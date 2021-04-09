const App = new Vue({
    el: "#app",
    data: {
        currentFilm: [],
        value: ""
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
                console.log(response.data.results);
                this.currentFilm = response.data.results;
                console.log(this.currentFilm);
            })
        }
    },
})