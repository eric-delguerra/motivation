<template>
    <div class="page" style="margin-top: .4rem">
        <section id="serious" class="hero is-medium is-serious" @click="motivationView('Serious')">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Sérieusement ?
                    </h1>
                    <h2 class="subtitle">
                        Quand il faut on est pro.
                    </h2>
                </div>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title" id="meet">
                        Comment devons-nous nous rencontrer <h1 class="underline">{{enterpriseName}}</h1> ?
                    </h1>
                </div>
            </div>
        </section>
        <section id="fun" class="hero is-medium is-fun" @click="motivationView('Fun')">
            <div class="hero-body">
                <div class="container has-text-right">
                    <h1 class="title">
                        Personnellement.
                    </h1>
                    <h2 class="subtitle">
                        Je ne mort pas !
                    </h2>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import firebase from 'firebase'

    export default {
        name: 'home',
        data() {
            return {
                enterpriseName: this.$route.params.name
            }
        },
        created() {
            if (this.$route.params.name) {
                this.fixData(this.$route.params.name)
            } else if (localStorage.getItem("name")) {
                this.fixData(localStorage.getItem("name"))
            } else {
                this.prompt()
            }
        },
        methods: {
            prompt() {
                this.$buefy.dialog.prompt({
                    message: `Présentez-vous !`,
                    inputAttrs: {
                        placeholder: 'Entreprise, prénom, etc',
                        maxlength: 15,
                        minlength: 3,
                        canCancel: [false, false, false],
                    },
                    trapFocus: true,
                    onConfirm: (value) => this.fixData(value)
                })
            },
            fixData(value) {
                if (value === "" || value === " " || value === "  ") {
                    this.prompt()
                } else {
                    if (localStorage.getItem("firstPassage") !== "1"){
                        this.enterpriseName = value
                        this.$buefy.toast.open({
                            message: 'Bonjour ' + value,
                            type: 'is-cyan',
                            duration: 5000
                        })
                        localStorage.setItem("firstPassage", "1")
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
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "~bulma/sass/utilities/_all";
    // Small tablets and large smartphones (landscape view)
    $screen-sm-min: 528px;

    // Small tablets (portrait view)
    $screen-md-min: 768px;

    // Tablets and small desktops
    $screen-lg-min: 992px;

    // Large tablets and desktops
    $screen-xl-min: 1200px;
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

    #serious {
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


        h1 {
            color: red;
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
            border-bottom: solid black 3px;
            filter: grayscale(0.1);
            background-position: right 50% bottom 65%;
            padding-top: 2rem;
            box-shadow: 8px 5px 15px black;
        }
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
            color: #0027bf !important;
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
            filter: grayscale(0.4);
            background-position: right 50% bottom 55%;
            padding-top: 2rem;
            box-shadow: 8px 5px 15px black;
        }
    }

    #meet {
        font-size: 1.5rem !important;

        .underline {
            font-size: 1.52rem !important;
            font-weight: bold;
            background-size: 1px 1em;
            box-shadow: inset 0 -0.45em #ff7eda;
            display: inline;
            transition-duration: 0.8s;
            &:hover{
                box-shadow: inset 0 -0.2em #ff7eda;
            }
        }
    }

</style>
