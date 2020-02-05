<template>
    <div v-if="!mobileWidth" class="page" style="margin-top: .4rem">
        <section id="serious" class="hero is-medium is-serious" @click="motivationView('Serious')">
            <div class="hero-body">
                <div class="container">
                    <h1 :style="{color: colorsArray[3]}" :class="[mobileWidth ? minTitleSerious : '']">
                        De la rigueur ?
                    </h1>
                </div>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title" id="meet">
                        <!--                        <span class="arrow">↑</span>   -->
                        Que recherchez-vous <h1 class="underline" :style="{backgroundImage: underlineColor}">
                        {{enterpriseName}}</h1> ?
                        <!--                        <span class="arrow">↓</span>-->
                    </h1>
                </div>
            </div>
        </section>
        <section id="fun" class="hero is-medium is-fun" @click="motivationView('Fun')">
            <div class="hero-body">
                <div class="container has-text-right">
                    <h1 :style="{color: colorsArray[3]}" :class="[mobileWidth ? minTitleFun : '']">
                        De la créativité ?
                    </h1>
                </div>
            </div>
        </section>
        <v-btn class="mx-2 contactAnim" fab dark large color="error" style="animation-delay: 0.3s"
               @click="sendMail">
            <v-icon dark>mdi-email</v-icon>
        </v-btn>
        <v-btn v-if="admin" class="mx-2 adminAnim" fab dark large color="error" style="animation-delay: 0.3s">
            <v-icon dark>mdi-wrench</v-icon>
        </v-btn>
    </div>
    <div v-else :style="{height: (window.height - 60) + 'px'}" style="max-width: 425px;">

        <div class="container">
            <h1 class="helloMobile">Bonjour</h1>
            <h1 class="underlineHome" style="font-style: italic" :style="{backgroundImage: underlineColor}">
                {{enterpriseName}}</h1>
            <hr>
        </div>
        <div class="container">
            <div class="container">
                <h2 class="text-center mobileTitle">Motivations</h2>
            </div>
            <section id="seriousMobile" class="hero is-medium is-serious" @click="motivationView('Serious')">
                <div class="hero-body">
                </div>
            </section>

            <div class="container">
                <h2 class="text-center mobileTitle">Compétences</h2>
            </div>

            <section id="funMobile" class="hero is-medium is-serious" @click="motivationView('Fun')">
                <div class="hero-body">
                </div>
            </section>
        </div>


        <div class="overflow-hidden">
            <v-bottom-navigation
                    :input-value="showNav"
                    color="secondary"
                    grow
                    :fixed="true"
            >
                <v-btn style="margin-top: 0.5rem;" @click="goToLinkeidn">
                    <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn style="margin-top: 0.5rem;" @click="sendMail">
                    <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-btn style="margin-top: 0.5rem;" @click="goToGithub">
                    <v-icon>mdi-github-circle</v-icon>
                </v-btn>
            </v-bottom-navigation>
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
            } else {
                this.prompt()
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
                    },
                    confirmText: 'Valider',
                    trapFocus: true,
                    type: 'is-serious',
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
                        console.log(typeof nbr)
                        localStorage.setItem("firstPassage", (nbr + 1).toString())
                    }
                    localStorage.setItem("name", value)
                }
            },
            motivationView(view) {
                this.$router.push('page/' + view)
                this.fireCall(view)
            },
            fireCall(value) {
                let db = firebase.firestore()
                // db.collection("analytics").add({
                //     name: this.enterpriseName,
                //     style: value,
                //     created_at: new Date()
                // })
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
            goToGithub(){
                window.open(this.gitHubLink)
            }
        },
        computed: {
            underlineColor() {
                return 'linear-gradient(\n transparent 28%, ' + this.randomColor + ' 28%, ' + this.randomColor + ' 55%, transparent 55%)'
            },
            mobileWidth() {
                if (this.window.width < 430) {
                    return true
                } else {
                    return false
                }
            }
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
        filter: grayscale(1);
        background-image: url('../assets/seriously.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right 50% bottom 75%;
        transition-duration: 0.7s;
        box-shadow: 4px 1px 5px black;

        @media screen and (max-device-width: 425px) {
            height: 9rem;
            box-shadow: none;
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
        }
    }

    #funMobile {
        background-image: url('../assets/serious.jpg');
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

    .minTitleFun {
        font-size: 0.8rem;
        font-weight: bold;
        text-align: left;
        margin-left: 13rem;

        @media only screen and (max-device-width: 375px) {
            margin-left: 11rem;
        }
        @media only screen and (max-device-width: 320px) {
            margin-left: 9rem;
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
        @media screen and (max-device-width: 425px) {
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
        @media screen and (max-device-width: 425px) {
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

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
