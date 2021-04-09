const App = new Vue({
    el: "#app",
    data: {
        currentFilm: [],
        value: ""
    },
    methods: {
        searchFilm: function(){
            const Self = this;
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: "fe5a411220156931adf0623172772b2b",
                    language: "it-IT",
                    query: Self.value,
                }
            })
            .then(function(response){
                console.log(response.data);
            })
        }
    },
})