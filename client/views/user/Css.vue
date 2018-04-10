<template>
    <div class="test-css">
        Hi Css man !!!!
        <div class="constant-width-to-height-ratio"></div>
        <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
        </ul>
        <!-- <div class="donut"></div> -->
        <div class="test-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1">
                <circle cx="100" cy="100" r="90" stroke="black" stroke-width="20" fill="transparent" />
            </svg>
        </div>

        <!-- <figure class="chart" data-percent="75">
            <figcaption>HTML</figcaption>
            <img class="html" src="../../assets/svg/html5.svg">
            <svg width="200" height="200">
                <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
            </svg>
        </figure> -->
    </div>
</template>
<script>
// import DateUtil from '../../util/date';
export default {
    data() {
        return {
            show: true,
            msg: ''
        };
    },
    methods: {}
};
</script>
<style lang="less" scoped>
.test-css {
    .test-svg {
        width: 200px;
        height: 200px;
        border: 20px solid #ccc;
        border-radius: 50%;
        position: relative;
        svg {
            position: absolute;
            left: -20px;
            top: -20px;
            stroke-dasharray: 566;
            stroke-dashoffset: 566;
            // animation: draw 5s ease 3;
            transition: all 3s ease;
            transform: rotate(-90deg);
        }
        svg:hover {
            stroke-dashoffset: 0;
        }
    }
    @keyframes draw {
        0% {
            stroke-dashoffset: 566;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
    .constant-width-to-height-ratio {
        background: #333;
        width: 100px;
    }
    .constant-width-to-height-ratio::before {
        content: '';
        padding-top: 50%;
        float: left;
    }
    .constant-width-to-height-ratio::after {
        content: '';
        display: block;
        clear: both;
    }
    ul {
        counter-reset: counter;
    }
    li::before {
        counter-increment: counter;
        content: counters(counter, '.') ' ';
    }
    @keyframes donut-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .donut {
        display: inline-block;
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: #7983ff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: donut-spin 1.2s linear infinite;
    }

    .chart {
        position: relative;
        display: inline-block;
        color: #999;
        font-size: 20px;
        text-align: center;
    }

    .chart figcaption {
        // padding: 50px 25px;
        width: 190px;
        height: 190px;
        border: 20px solid #f0f0f0;
        border-radius: 50%;
        line-height: 50px;
    }

    .chart img {
        position: absolute;
        max-width: 100px;
        max-height: 100px;
        background: white;
    }
    .html {
        top: 50px;
        left: 45px;
    }

    .html + svg .outer {
        stroke: #e34f26;
    }

    .css {
        top: 55px;
        left: 48px;
    }

    .css + svg .outer {
        stroke: #0d84ce;
    }

    .javascript {
        max-width: 90px;
        max-height: 90px;
        top: 45px;
        left: 45px;
    }

    .javascript + svg .outer {
        stroke: #f0e040;
    }

    .node {
        width: 200px;
        height: 200px;
        top: 45px;
        left: 45px;
    }

    .node + svg .outer {
        stroke: #83cd29;
    }

    .chart svg {
        position: absolute;
        top: 0;
        left: 0;
    }

    .outer {
        fill: transparent;
        stroke: #333;
        stroke-width: 20;
        stroke-dasharray: 534;
        transition: stroke-dashoffset 1s;
        -webkit-animation-play-state: running;
    }

    .chart:hover .outer {
        stroke-dashoffset: 534 !important;
        -webkit-animation-play-state: paused;
    }

    .chart[data-percent='75'] .outer {
        stroke-dashoffset: 133;
        -webkit-animation: show75 2s;
        animation: show75 2s;
    }

    @keyframes show100 {
        from {
            stroke-dashoffset: 537;
        }

        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes show75 {
        from {
            stroke-dashoffset: 537;
        }

        to {
            stroke-dashoffset: 124;
        }
    }

    @keyframes show50 {
        from {
            stroke-dashoffset: 537;
        }

        to {
            stroke-dashoffset: 267;
        }
    }
    @keyframes show25 {
        from {
            stroke-dashoffset: 537;
        }

        to {
            stroke-dashoffset: 401;
        }
    }
}
</style>
