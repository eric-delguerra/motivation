<template>
    <div>
        <section id="serious" class="hero is-medium is-serious" @click="motivationView('Serious')">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Medium title
                    </h1>
                    <h2 class="subtitle">
                        Medium subtitle
                    </h2>
                </div>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Comment devons-nous nous rencontrer {{enterpriseName}} ?
                    </h1>
                </div>
            </div>
        </section>
        <section id="fun" class="hero is-medium is-fun"  @click="motivationView('Fun')">
            <div class="hero-body">
                <div class="container has-text-right">
                    <h1 class="title">
                        Medium title
                    </h1>
                    <h2 class="subtitle">
                        Medium subtitle
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
            } else if (localStorage.getItem("name")){
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
                if (value === "" || value === " " || value === "  "){
                    this.prompt()
                } else {
                    this.enterpriseName = value
                    this.$buefy.toast.open({
                        message: 'Bonjour ' + value,
                        type: 'is-cyan',
                        duration: 5000
                    })
                    localStorage.setItem("name", value)
                }
            },
            motivationView(view){
                this.$router.push('page/'+view)
                this.fireCall(view)
            },
            fireCall(value){
                let db = firebase.firestore()
                db.collection("analytics").add({
                    name: this.enterpriseName,
                    style: value,
                    created_at: new Date()
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "~bulma/sass/utilities/_all";

    body {
        overflow: hidden; /* Hide scrollbars */
    }

    #serious, #fun {
        filter: grayscale(1);
        background-image: url('../assets/test.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right 50% bottom 50%;
        transition-duration: 0.7s;
    }

    #serious:hover, #fun:hover {
        filter: grayscale(0);
        background-position: right 50% bottom 45%;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
