$(function () {

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var $popupOverlay = $('.js-popup-overlay');
  var $popupClose = $('.js-popup-close');
  var $popup = $('.js-popup');

  var $calcItems = $('.js-calc-form-item');
  var $checkboxOther = $('.js-checkbox-other');
  var $checkboxBox = $('.js-checkbox');

  var $sliderTime = $('.js-slider-time');
  var $calcTimeText = $('.js-calc-time-text');
  var $calcTimeInput = $('.js-calc-time-input');

  var $inputIdea = $('.js-calc-idea');
  var $inputScenario = $('.js-calc-scenario');
  var $inputsHeoesAmount = $('.js-calc-heroes-amount');
  var $inputHeroSearch = $('.js-calc-hero-search');
  var $inputVisagiste = $('.js-calc-visagiste');
  var $inputStylist = $('.js-calc-stylist');
  

  var DEF_TIME = 120;

  /**
   * fn calculation
   */
  function calculate() {

  }

  /**
   * init time slider
   */
  $sliderTime.slider({
    range: "min",
    value: DEF_TIME,
    min: 10,
    max: 600,
    step: 10,
    slide: function( event, ui ) {
      getTimeFormat(ui.value);
    }
  });

  /**
   * formating time
   * @param val
   */
  function getTimeFormat(val) {
    var parseMin = parseInt(val / 60);
    var parseSec = val - parseMin * 60;
    var minText = (parseMin != 0 ) ? parseMin+' мин &nbsp;&nbsp;' : '';
    var secText = (parseSec != 0 ) ? parseSec+' c' : '00 c';

    $calcTimeText.html( minText + secText);
    $calcTimeInput.val(minText + secText).trigger('change');
  }
  getTimeFormat(DEF_TIME);

  /**
   * show other input or hide
   */
  $('input', $checkboxBox).on('change', function () {
    var $thisCalcItem = $(this).closest($calcItems);
    var $thisOtherBox = $('.js-other-input', $thisCalcItem);


    if ($(this).is(':checked') && $(this).hasClass('js-checkbox-other')){
      var $thisInputBox = $(this).closest($checkboxBox);
      $thisOtherBox = $thisInputBox.next('.js-other-input');

      console.log('1');

      $('.js-other-input', $thisCalcItem).addClass('visibility');
      $('input', $('.js-other-input', $thisCalcItem)).val('').trigger('change');

      $thisOtherBox.removeClass('visibility');
      $('input', $thisOtherBox).focus();

    } else if ($(this).is(':checked') && !$(this).hasClass('js-checkbox-other')) {

      $thisOtherBox.addClass('visibility');
      $('input', $thisOtherBox).val('').trigger('change');
    }
  });

  /**
   * set popup vals
   */
  function defVals() {
    var popupHeight = windowHeight - 100;
    $popup.css('height', popupHeight+'px');
  }
  defVals();


  $(window).on('scroll', function () {

  });

  $(window).on('resize', function () {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    defVals();
  });

});