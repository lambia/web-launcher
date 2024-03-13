const { createApp } = Vue;
const lang = "it-IT";

createApp({
    data() {
        return {
            cards,
            lang,
            searchstring: "",
            results: [],
            apiUrl: "https://api.themoviedb.org/3",
            imageUrl: "https://image.tmdb.org/t/p/w500/",
            options: {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDk3OWE4YWI3YzEyYTc1MWYxZjVhZTZjMzM4ZGU0ZCIsInN1YiI6IjY1NmRiZjhkNGE0YmY2MDEwMzUxMTc0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NQ5B3w-U4U5Uwg3nCOX7asEO-psqD_ken-kkZrHFZSA'
                },
            },
            // ToDo: recupera lista dei provides italiani, poi lascia scegliere l'utente
            // fetch('https://api.themoviedb.org/3/watch/providers/movie?language=it-IT&watch_region=IT', options)
            //     .then(response => response.json())
            //     .then(response => { x = response; })
            availableProviders: [
                337,	//Disney Plus
                8,	    //Netflix
                119,	//Amazon Prime Video
                2,	    //Apple TV
                350,	//Apple TV Plus
                3,	    //Google Play Movies
                29,	    //Sky Go
                39,	    //Now TV
                359,	//Mediaset Infinity
                109,	//Timvision
                110,	//Infinity+
                222,	//Rai Play
                188,	//YouTube Premium
                68,	    //Microsoft Store
                584,	//Discovery+ Amazon Channel
                10,	    //Amazon Video
                582,	//Paramount+ Amazon Channel
                283,	//Crunchyroll
            ],
            hiddenProviders: [
                35,	    //Rakuten TV
                11,	    //MUBI
                40,	    //Chili
                641,	//Nexo Plus
                100,	//GuideDoc
                414,	//VVVVID
                190,	//Curiosity Stream
                475,	//DOCSVILLE
                521,	//Spamflix
                538,	//Plex
                546,	//WOW Presents Plus
                551,	//Magellan TV
                554,	//BroadwayHD
                559,	//Filmzie
                444,	//Dekkoo
                567,	//True Story
                569,	//DocAlliance Films
                315,	//Hoichoi
                300,	//Pluto TV
                677,	//Eventive
                688,	//ShortsTV Amazon Channel
                692,	//Cultpix
                701,	//FilmBox+
                1726,	//Infinity Selection Amazon Channel
                1727,	//CG Collection Amazon channel
                1728,	//iWonder Full Amazon channel
                1729,	//Full Action Amazon Channel
                1730,	//Cine Comico Amazon Channel
                201,	//MUBI Amazon Channel
                588,	//MGM Amazon Channel
                531,	//Paramount Plus
                1771,	//Takflix
                309,	//Sun Nxt
                445,	//Classix
                1796,	//Netflix basic with Ads
                1853,	//Paramount Plus Apple TV Channel 
                1862,	//UAM TV
                1894,	//CineAutore Amazon Channel
                1895,	//Anime Generation Amazon Channel
                1896,	//Raro Video Amazon Channel
                1897,	//MIDNIGHT FACTORY Amazon Channel
                1715,	//Shahid VIP
            ]
        }
    },
    methods: {
        search() {
            this.results = [];

            if (this.searchstring.length >= 3) {
                fetch(`${this.apiUrl}/search/multi?query=${encodeURIComponent(this.searchstring)}&include_adult=true&language=it-IT&page=1&region=it-IT`, this.options)
                    .then(r => r.json())
                    .then(r => {
                        this.results = r.results.filter(item => item.media_type !== "person"); //filtra le "person"
                        this.getProviders();
                    }).catch(err => {
                        console.error(err)
                    });
            }
        },
        clear() {
            this.results = [];
            this.searchstring = "";
        },
        getProviders() {

            this.results.forEach((element, i) => {
                fetch(`${this.apiUrl}/${element.media_type}/${element.id}/watch/providers`, this.options)
                    .then(r => r.json())
                    .then(r => { this.results[i].providers = this.filterProviders(r.results.IT); });
            });
        },
        filterProviders(providers) {
            let result = {};

            if (providers) {
                if (providers.link) {
                    result.link = providers.link;
                }
                if (providers.flatrate) {
                    let flatrate = providers.flatrate.filter(provider => {
                        return this.availableProviders.includes(provider.provider_id);
                    });
                    result.flatrate = flatrate;
                }
                // if (providers.rent) {
                //     let rent = providers.rent.filter(provider => {
                //         return this.availableProviders.includes(provider.provider_id);
                //     });
                //     result.rent = rent;
                // }
                // if (providers.buy) {
                //     let buy = providers.buy.filter(provider => {
                //         return this.availableProviders.includes(provider.provider_id);
                //     });
                //     result.buy = buy;
                // }
            }

            return result;
        },
        parseDate(date) {
            return new Date(date).getFullYear();
        },
        parseStars(stars) {
            // arrotonda all'intero più vicino (9.4 -> 9.0, 9.5 -> 10)
            // dividi per due (9.0 -> 4.5, 10 -> 5)
            // risultato: 9.4 -> 4.5 stelle, 10 -> 5 stelle
            return Math.round(stars) / 2;
        },
        parseDescription(desc, size) {
            size--; //prendi in considerazione il "." che dovremo aggiungere in chiusura
            if (desc.length <= size) {
                return desc; //già ok
            }

            desc = desc.slice(0, desc.lastIndexOf("."));

            while (desc.length > size) {
                //se ci sono ancora "." per cui spezzare la stringa
                if (desc.lastIndexOf(".") > 0) {
                    desc = desc.slice(0, desc.lastIndexOf("."));
                } else {
                    desc = "Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatul.";
                    break; //abbiamo finito
                }
            }
            return desc + ".";
        }
    }
}).mount('#app');