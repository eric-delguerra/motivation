<template>
    <div class="container background">
        <div class="columns is-mobile is-centered">
            <h1 class="is-size-1 font-weight-bold font-italic column is-half titre">Re-bonjour <h1 class="underline is-size-1 font-weight-bold font-italic">{{enterpriseName}}</h1></h1>
        </div>
        <br>
        <div class="is-half column">
            <p class="subtitle">En reconversion professionnelle, j'ai intégré fin 2018 la formation developpeur web du Campus Numérique
                in The Alps afin d'apprendre un métier qui me correspond vraiment.</p>
        </div>
        <hr>
        <div class="columns">
            <div class="column is-half text-right">
                <p class="subtitle"> 1.</p>
            </div>
            <div class="column is-half ">
                <p class="subtitle">Actuellement en alternance chez BSM/IZYFLOW, je cherche à continuer de monter en compétence l'année
                    prochaine (2020/2021), pour cela je souhaite intégrer la formation de l'IUT1 en Service Mobiles et
                    Interface Nomade en alternance. </p>
            </div>
        </div>
        <hr>
        <div class="column is-half">
            <p class="subtitle">Soucieux d’un beau code et très créatif, j’aime laisser libre cours à mon imagination quand on parle de
                nouveau projet. J’ai une certaine attirance pour la Back-End mais cette année supplémentaire me
                permettrai de réellement travailler sur l’intégration. </p>
        </div>
        <hr>
        <div class="column is-half is-offset-6">
            <p class="subtitle">Lors de mon année en alternance, j’ai essentiellement travaillé en VueJS et PHP Slim. Quand j’écris ces
                lignes un nouveau projet est sur le point d’être mis en place, et il sera en NodeJS et VueJS. J’ai
                également quelques connaissances dans plusieurs autres langages (C#, JAVA, Python) et quelques
                frameworks (Laravel, Symfony).
                J’utilise également Git pour le versionning de mes projets.
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Serious",
        data(value) {
            return {
                enterpriseName: ''
            }
        },
        created() {
            this.enterpriseName = localStorage.getItem("name")
        }
    }
</script>

<style lang="scss" scoped>

    .titre {
        padding-bottom: 2rem;
    }
    .underline{
        font-weight: bold;
        background-size: 1px 1em;
        box-shadow: inset 0 -0.25em #ff7eda;
        display: inline;
        transition-duration: 0.8s;
    }
</style>