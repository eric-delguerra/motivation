<template>
    <div>

        <div v-if="!mobileWidth" class="page" style="left: 29rem">

            <div class="columns" style="height: 90vh">
                <div class="column is-two-fifths">
                    <img v-if="!mobileWidth" src="../assets/fun.jpg" alt=""
                         style="filter: grayscale(1); height: 100vh; object-fit: cover">
                </div>
                <div class="column is-half">
                    <div style="height: 15vh"></div>
                    <div class="container">
                        <vue-typer style="font-size: 5rem; margin-top: 25rem; padding-bottom: 2rem"
                                   text='Eric Del Guerra ' :repeat='0' caret-animation='smooth'
                                   :type-delay='150'
                                   erase-style='backspace'></vue-typer>

                        <hr>
                        <p style="width: 65%; font-size: 1.3rem">
                            <vue-typer
                                    :text='["Développeur junior", "26 ans", "Grenoble"]' caret-animation='smooth'
                                    :type-delay='100'
                                    erase-style='backspace'></vue-typer>

                        </p>
                        <p style="font-size: 1.1rem">
                            Je suis actuellement à la recherche d'une alternance à partir de septembre 2020 pour faire
                            une
                            licence en
                            développement mobile et interface nomade à l'IUT 1 de Grenoble.<br> <br></p>

                        <span @click="motivationView('skills')" style="cursor: pointer; width: 30%; font-size: 1.1rem; margin-bottom: .8rem">
                            <v-icon size="x-large" color="accent">mdi-book-account-outline</v-icon>
                            Mes compétences </span><br>
                        <span @click="motivationView('motivation')"
                           style="cursor: pointer; margin-top: 1rem; width: 30%; font-size: 1.1rem">
                            <v-icon size="x-large" color="accent">mdi-book-open-page-variant</v-icon>
                            Mes motivations
                        </span>
                        <div style="margin-top: 3rem; z-index: 5!important;" class="text-right">
                            <span @click="sendMail" style="cursor: pointer">Contactez-moi
                                <v-icon color="accent" size="large">mdi-email</v-icon>
                            </span><br>
                            <span @click="goToGithub" style="cursor: pointer">Mon Github
                                <v-icon color="accent" size="large">mdi-github</v-icon>
                            </span><br>
                            <a href="../../public/Eric_Del_Guerra_CV.pdf" target="_blank" style="cursor: pointer; color: black" @click="CvView">Mon CV en pdf
                                <v-icon color="accent" size="large">mdi-file-pdf-outline</v-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <v-footer v-if="!mobileWidth" fixed padless color="accent" class="font-weight-medium" style="z-index: 0!important;">
            <v-col cols="12" class="text-center" style="color: white">2020 - Eric Del Guerra</v-col>
        </v-footer>
        <div v-else :style="{height: window.height + 'px'}" style="" class="mobileBackground">

            <!--            <div class="container" style="">-->
            <!--&lt;!&ndash;                <h1 class="helloMobile">Bonjour</h1>&ndash;&gt;-->
            <!--&lt;!&ndash;                <h1 class="underlineHome" style="font-style: italic; font-size: 3rem" :style="{backgroundImage: underlineColor}">&ndash;&gt;-->
            <!--&lt;!&ndash;                    {{enterpriseName}}</h1>&ndash;&gt;-->

            <!--                <p style="color: gray; text-align: center; font-size: 1.5rem; letter-spacing: normal"> Je recherche pour l'année prochaine une-->
            <!--                    alternance pour une formation de développeur mobile</p>-->
            <!--            </div>-->
            <!--            <section id="seriousMobile" class="hero is-medium is-serious" @click="motivationView('motivation')">-->
            <!--                <div class="container">-->
            <!--                    <p class="skill">Motivation</p>-->
            <!--                </div>-->
            <!--            </section>-->


            <!--            <div class="container">-->
            <!--                &lt;!&ndash;                <h2 class="text-center mobileTitle">Compétences</h2>&ndash;&gt;-->
            <!--            </div>-->

            <!--            <section id="funMobile" class="hero is-medium is-serious" @click="motivationView('skills')">-->
            <!--                <div class="container">-->
            <!--                    <p class="skill">Compétence</p>-->
            <!--                </div>-->
            <!--            </section>-->

            <div class="container" style="top: 8vh">
                <div class="column">
                    <p style=" text-align: center; font-size: 2rem;margin-bottom: 1rem;"><span style="color: #A61780"></span>Eric Del Guerra</p>
                    <p style="font-size: 1rem; text-align: center"><span>Developpeur Junior - </span><span>26 ans - </span><span>Grenoble</span></p>
                    <hr>
                    <p style="color: gray; text-align:justify; font-size: 1rem; letter-spacing: normal"><span>Je recherche
                        pour l'année prochaine une
                        alternance pour la formation développement et interface mobile à l'IUT 1 de Grenoble</span></p>

                    <div class="column has-text-centered" style="margin-top: 1.7rem">
                        <v-btn style="margin:0.5rem;" small outlined rounded color="info"
                               @click="motivationView('skills')">
                            <v-icon size="medium" color="info" left>mdi-school</v-icon>Compétences
                        </v-btn>
                        <v-btn style="margin:0.5rem;" small outlined rounded color="info"
                               @click="motivationView('motivation')">
                            <v-icon size="medium" color="info" left>mdi-book-open-page-variant</v-icon>Motivations
                        </v-btn>

                    </div>
                    <div class="column has-text-centered">
                        <v-btn small outlined rounded color="info" @click="CvView">
                            <a href="../../public/Eric_Del_Guerra_CV.pdf" target="_blank" style="cursor: pointer;color:#A61780 ">
                                <v-icon color="info" size="large" left>mdi-file-pdf-outline</v-icon>Mon CV.pdf
                            </a>
                        </v-btn>
                    </div>
                </div>
            </div>


            <div class="overflow-hidden">
                <v-bottom-navigation
                        :input-value="showNav"
                        color="secondary"
                        grow
                        :fixed="true"
                >
                    <v-btn style="margin-top: 0.5rem;" @click="goToLinkeidn">
                        <v-icon color="info">mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn style="margin-top: 0.5rem;" @click="sendMail">
                        <v-icon color="info">mdi-email</v-icon>
                    </v-btn>
                    <v-btn style="margin-top: 0.5rem;" @click="goToGithub">
                        <v-icon color="info">mdi-github</v-icon>
                    </v-btn>
                </v-bottom-navigation>
            </div>
        </div>
    </div>

</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'home',
        data() {
            return {
                enterpriseName: this.$route.params.name,
                randomColor: '',
                colorsArray: [
                    '#05F2DB',
                    '#0388A6',
                    '#F205CB',
                    '#A61780'
                ],
                window: {
                    width: 0,
                    height: 0
                },
                minTitleFun: 'minTitleFun',
                minTitleSerious: 'minTitleSerious',
                admin: false,
                email: 'mailto:delguerra.eric@gmail.com',
                showNav: true,
                linkedinLink: 'https://www.linkedin.com/in/eric-del-guerra-66245480/',
                gitHubLink: 'https://github.com/eric-delguerra'
            }
        },
        created() {
            if (this.$route.params.name) {
                this.fixData(this.$route.params.name)
            } else if (localStorage.getItem("name")) {
                this.fixData(this.capitalizeFirstLetter(localStorage.getItem("name")))
            }
            this.randomColor = this.getRandomColor()
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        methods: {
            prompt() {
                this.$buefy.dialog.prompt({
                    message: `Pour une navigation personnalisée`,
                    inputAttrs: {
                        placeholder: 'Entreprise, prénom, etc',
                        maxlength: 15,
                        minlength: 3,
                        canCancel: [false, false, false],
                        color: "#0388A6"
                    },
                    confirmText: 'Valider',
                    trapFocus: true,
                    type: 'is-darkBlue',
                    onConfirm: (value) => this.fixData(value)
                })
            },
            fixData(value) {
                if (value === "" || value === " " || value === "  ") {
                    this.prompt()
                } else {
                    if (value === "Moumousse") {
                        this.admin = true
                    }
                    this.enterpriseName = this.capitalizeFirstLetter(value)
                    if (parseInt(localStorage.getItem("firstPassage")) < 1) {
                        this.$buefy.toast.open({
                            message: 'Bonjour ' + value,
                            type: 'is-cyan',
                            duration: 5000
                        })
                        localStorage.setItem("firstPassage", "1")
                    } else {
                        let nbr = parseInt(localStorage.getItem("firstPassage"))
                        localStorage.setItem("firstPassage", (nbr + 1).toString())
                    }
                    localStorage.setItem("name", value)
                }
            },
            motivationView(view) {
                this.$router.push({name: view})
                this.fireCall(view)
            },
            fireCall(value) {
                let db = firebase.firestore()
                if (this.enterpriseName === undefined) {
                    this.enterpriseName = "Anonyme"
                }
                db.collection("analytics").add({
                    name: this.enterpriseName,
                    style: value,
                    created_at: new Date()
                })
            },
            getRandomColor() {
                return this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
            },
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            },
            sendMail() {
                window.open(this.email)
            },
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            goToLinkeidn() {
                window.open(this.linkedinLink)
            },
            goToGithub() {
                window.open(this.gitHubLink)
            },
            CvView(){
                let db = firebase.firestore()
                if (this.enterpriseName === undefined) {
                    this.enterpriseName = "Anonyme"
                }
                db.collection("CvConsult").add({
                    name: this.enterpriseName,
                    created_at: new Date()
                })
            }
        },
        computed: {
            underlineColor() {
                return 'linear-gradient(\n transparent 28%, ' + this.randomColor + ' 28%, ' + this.randomColor + ' 55%, transparent 55%)'
            },
            mobileWidth() {
                if (this.window.width < 650) {
                    return true
                } else {
                    return false
                }
            },

        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
    }
</script>

<style lang="scss" scoped>
    @import "~bulma/sass/utilities/_all";


    $screen-sm-mobile: 370px;
    // Small tablets and large smartphones (landscape view)
    $screen-sm-min: 430px;

    // Small tablets (portrait view)
    $screen-md-min: 768px;

    // Tablets and small desktops
    $screen-lg-min: 992px;

    // Large tablets and desktops
    $screen-xl-min: 1200px;

    @mixin smMobile {
        @media (min-width: #{$screen-sm-mobile}) {
            @content;
        }
    }

    // Small devices
    @mixin sm {
        @media (min-width: #{$screen-sm-min}) {
            @content;
        }
    }

    // Medium devices
    @mixin md {
        @media (min-width: #{$screen-md-min}) {
            @content;
        }
    }

    // Large devices
    @mixin lg {
        @media (min-width: #{$screen-lg-min}) {
            @content;
        }
    }

    // Extra large devices
    @mixin xl {
        @media (min-width: #{$screen-xl-min}) {
            @content;
        }
    }

    // Custom devices
    @mixin rwd($screen) {
        @media (min-width: $screen+'px') {
            @content;
        }
    }

    body {
        overflow: hidden; /* Hide scrollbars */
    }

    #serious, #seriousMobile, #funMobile {
        /*background-image: url("../assets/seriouslyFilter.png"), url('../assets/seriously.jpg');*/
        /*background-size: 50%, cover;*/
        /*background-position: right 60rem bottom 0, right 50% bottom 75%;*/
        border: solid black 2px;
        width: 80%;
        margin: auto;
        /*filter: grayscale(1);*/
        padding-top: 2rem;
        /*background-image: url('../assets/seriously.jpg');*/
        /*background-repeat: no-repeat;*/
        /*background-size: cover;*/
        /*background-position: right 50% bottom 75%;*/
        transition-duration: 0.7s;
        box-shadow: 4px 1px 5px black;

        @media screen and (max-device-width: 650px) {
            height: 9rem;
            box-shadow: none;
            background-image: url("../assets/motivation.png");
            filter: none;
            background-color: transparent;
            border: none;
            animation: none;
            margin-top: 0;
        }


        h1 {
            @include sm {
                font-size: 1rem !important;
                margin-left: -10px !important;
            }
            @include lg {
                font-size: 2rem !important;
            }

        }

        h2 {
            @include sm {
                font-size: .7rem !important;
                margin-left: -10px;
            }
            @include xl {
                font-size: 1rem !important;
                margin-left: 0;
            }
        }

        &:hover {
            cursor: pointer;
            border-bottom: solid black 3px;
            filter: grayscale(0.1);
            background-position: right 50% bottom 65%;
            padding-top: 2rem;
            box-shadow: 8px 5px 15px black;
            @media screen and (max-device-width: 1000px) {
                border-bottom: none;
                filter: none;
                background-position: 0;
                padding-top: 0;
                box-shadow: none;
            }
        }
    }

    #funMobile {
        background-image: url('../assets/competences.png');
    }

    #fun {
        border: solid black 2px;
        width: 80%;
        margin: auto;
        filter: grayscale(1);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right 50% bottom 45%;
        transition-duration: 0.7s;
        background-image: url('../assets/fun.jpg');
        box-shadow: 4px 1px 5px black;


        h1 {
            @include sm {
                font-size: 1rem !important;
                margin-right: -25px;
            }
            @include lg {
                font-size: 2rem !important;
                margin-right: 0;
            }
        }

        h2 {
            @include sm {
                font-size: .7rem !important;
                margin-right: -25px;
            }
            @include xl {
                font-size: 1rem !important;
                margin-right: 20px;
            }
        }

        &:hover {
            cursor: pointer;
            filter: grayscale(0.1);
            background-position: right 50% bottom 55%;
            padding-top: 2rem;
            box-shadow: 8px 5px 15px black;
        }
    }


    .minTitleSerious {
        font-size: 0.8rem;
        font-weight: bold;
        text-align: left;
        margin-left: 7rem;


        @include smMobile {
            margin-left: 9rem;
            font-size: 1rem;
        }

    }

    #meet {
        font-size: 1.5rem !important;
        @media screen and (max-device-width: 1000px) {
            font-size: 1rem !important;
        }
    }

    .arrow {
        font-size: 3rem;
        margin: 3rem;
    }

    .contactAnim {
        position: absolute;
        left: 1.7rem;
        top: 5rem;
        animation: contact 5s infinite;
        @media screen and (max-device-width: 765px) {
            margin: auto;
            top: 1rem;
            position: relative;
            animation: none;
        }
    }

    @keyframes contact {
        0% {
            top: 5rem;
        }
        10% {
            top: 4rem;
        }
        15% {
            top: 5rem;
        }
        20% {
            top: 4.5rem;
        }
        25% {
            top: 5rem;
        }
        100% {
            top: 5rem;
        }
    }

    .adminAnim {
        position: absolute;
        left: 6.5rem;
        top: 5rem;
        animation: contact 5s infinite;
    }

    .helloMobile {
        font-size: 2rem;
        margin-left: 2rem;
        animation-delay: 1s;
        animation: helloMobileEnter 1.5s forwards;
        font-weight: bold;
    }

    .underlineHome {
        font-weight: bold;
        display: inline;
        transition-duration: 0.8s;
        padding: 1.3125rem .25rem 1.5625rem;
        @media screen and (max-device-width: 1000px) {
            font-size: 3rem;
            background-size: 10rem 3rem;
            background-position-x: 4rem;
            margin-left: 7rem;
            animation-delay: 1.5s;
            animation: helloMobileEnter 1.5s forwards;
            opacity: 0;
        }
    }

    .mobileTitle {
        font-weight: bold;
    }

    div.container {
        font-family: Consolas;

        h1 {
            /*animation: typing 4s steps(16) forwards;*/
            /*overflow: hidden;*/
            /*white-space: nowrap;*/
            /*border-right: 4px solid black;*/
        }

        p {
            line-height: 1.2rem;
        }
    }

    @keyframes typing {
        from {
            width: 0ch;
        }
        to {
            width: 15ch;
        }
    }

    @keyframes borderClip {
        from {
            border-right: 4px black;
        }
        to {
            border-right: 4px solid black;
        }
    }

    button {
        font-family: Consolas;
    }

    .skill {
        font-family: Consolas;
        font-size: 2rem;
        margin: 1rem;
    }

    /*.mobileBackground {*/
    /*    background: linear-gradient( #343434, rgba(136, 136, 136, 0.99));*/
    /*}*/

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
