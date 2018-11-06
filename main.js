'use strict';

function handleEventListeners() {

    // nav bar functionality
    $('#homeNav').click(function() {
        console.log('navCommand');
        $('.homePage').removeClass('hidden');
        $('.aboutUs').addClass('hidden');
        $('.services').addClass('hidden');
        $('.contact').addClass('hidden');
    });

    $('#aboutUsNav').click(function() {
        console.log('navCommand');
        $('.aboutUs').removeClass('hidden');
        $('.homePage').addClass('hidden');
        $('.services').addClass('hidden');
        $('.contact').addClass('hidden');
    });

    $('#servicesNav').click(function() {
        console.log('navCommand');
        $('.services').removeClass('hidden');
        $('.aboutUs').addClass('hidden');
        $('.homePage').addClass('hidden');
        $('.contact').addClass('hidden');
    });

    $('#contactNav').click(function() {
        console.log('navCommand');
        $('.contact').removeClass('hidden');
        $('.aboutUs').addClass('hidden');
        $('.services').addClass('hidden');
        $('.homePage').addClass('hidden');
    });

    // Pop-up Modal functionality
    $('.closeBtn').click(function() {
        $('.modal').addClass('hidden');
        $('.homePageHeader').removeClass('hidden');
    });

    // Nav Bar Mobile
    $('.dropDownMenu').click(function() {
        console.log('dropdown');
        $('.dropDownContent').toggleClass('hidden');
        $('.dropDownMenu').toggleClass('menuBackground');
    })

    $('#homeNavMobile').click(function() {
        console.log('navCommand');
        $('.homePage').removeClass('hidden');
        $('.aboutUs').addClass('hidden');
        $('.services').addClass('hidden');
        $('.contact').addClass('hidden');
        $('.dropDownContent').toggleClass('hidden');
        $('.dropDownMenu').toggleClass('menuBackground');
    });

    $('#aboutUsNavMobile').click(function() {
        console.log('navCommand');
        $('.aboutUs').removeClass('hidden');
        $('.homePage').addClass('hidden');
        $('.services').addClass('hidden');
        $('.contact').addClass('hidden');
        $('.dropDownContent').toggleClass('hidden');
        $('.dropDownMenu').toggleClass('menuBackground');
    });

    $('#servicesNavMobile').click(function() {
        console.log('navCommand');
        $('.services').removeClass('hidden');
        $('.aboutUs').addClass('hidden');
        $('.homePage').addClass('hidden');
        $('.contact').addClass('hidden');
        $('.dropDownContent').toggleClass('hidden');
        $('.dropDownMenu').toggleClass('menuBackground');
    });

    $('#contactNavMobile').click(function() {
        console.log('navCommand');
        $('.contact').removeClass('hidden');
        $('.aboutUs').addClass('hidden');
        $('.services').addClass('hidden');
        $('.homePage').addClass('hidden');
        $('.dropDownContent').toggleClass('hidden');
        $('.dropDownMenu').toggleClass('menuBackground');
    });
}




function callFunctions(){
    handleEventListeners();
  }
  
  // when the page loads, call `callFunctions`
  $(callFunctions);