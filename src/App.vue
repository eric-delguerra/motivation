<template>
    <v-app>
        <transition name="router-anim">
            <router-view/>
        </transition>
    </v-app>

</template>
<script>

    export default {
        name: 'home',

        data: () => ({
            //
        }),
    };
</script>

<style lang="scss">

    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";
    // Set your colors
    $primary: #8c67ef;
    $primary-invert: findColorInvert($primary);
    $twitter: #4099FF;
    $twitter-invert: findColorInvert($twitter);
    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
            "white": ($white, $black),
            "black": ($black, $white),
            "light": ($light, $light-invert),
            "dark": ($dark, $dark-invert),
            "primary": ($primary, $primary-invert),
            "info": ($info, $info-invert),
            "success": ($success, $success-invert),
            "warning": ($warning, $warning-invert),
            "danger": ($danger, $danger-invert),
            "twitter": ($twitter, $twitter-invert),
            "cyan": ($cyan, $cyan-invert),
            "serious": (#05F2DB, $black)
    );
    // Links
    $link: $primary;
    $link-invert: $primary-invert;
    $link-focus-border: $primary;
    /*// Import Bulma and Buefy styles*/
    @import "~bulma";
    @import "~buefy/src/scss/buefy";

    .page {
        position: static;
        width: inherit;
    }

    .router-anim-enter-active {
        animation: enter 1s;
        animation-delay: 0.6s;
        opacity: 0;
    }

    .router-anim-leave-active {
        animation: leave 1s;
    }

    .backHome:hover {
        transition-duration: 0.3s;
        transform: scale(1.1);
    }

    .underline {
        font-weight: bold;
        display: inline;
        transition-duration: 0.8s;
        padding: 1.3125rem .25rem 1.5625rem;
        @media screen and (max-device-width: 425px) {
             font-size: 1rem;
            background-size: 5rem 3.6rem;
        }
    }


    @keyframes enter {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes leave {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(0.5);
            opacity: 0.6;
        }
        100% {
            transform: translateX(-250px) scale(0.5);
            opacity: 0;
        }
    }
</style>