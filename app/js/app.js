// JavaScript Document

import $ from "jquery";
import Swiper, { Navigation, Pagination } from 'swiper';
import "./hasAttr";
import {rwdMedia} from "./rwdMedia";
import {rippletInit} from './ripplet';
import Cookies from 'js-cookie';
import scrollToId from "./scrollToId";
import {addBackToTop} from 'vanilla-back-to-top';

window.rwdMedia = rwdMedia;
window.Cookies = Cookies;
window.rippletInit = rippletInit;
window.scrollToId = scrollToId;

Swiper.use([Navigation, Pagination]);

$(document).ready(function(e) {

    rippletInit();

    addBackToTop({
        diameter: 56,
        backgroundColor: '#FFFFFF',
        textColor: '#F28300',
        innerHTML: ''
    });

    const jumbotronSwiper = new Swiper('.section-jumbotron.swiper-container', {
        pagination: {
            el: '.section-jumbotron.swiper-container .swiper-pagination',
            renderBullet: (index, className) => {
                const slides = document.querySelectorAll('.section-jumbotron .swiper-slide');
                return `<span class="${className}"><b>${index + 1}.</b> ${slides[index].dataset.paginationItem}</span>`;
            },
            clickable: true
        },
        navigation: {
            nextEl: '.section-jumbotron.swiper-container .swiper-button-next',
            prevEl: '.section-jumbotron.swiper-container .swiper-button-prev',
        },
    });

    const JMSwiper = new Swiper('.JM-swiper.swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
            nextEl: '.JM-swiper.swiper-container .swiper-button-next',
            prevEl: '.JM-swiper.swiper-container .swiper-button-prev',
        },
    });

});

// jQuery.fn.jquery
// $.fn.popover.Constructor.VERSION
// $.fn.hasAttr
