/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */
$(function () {
  $('.prettyprint').addClass ('linenums');
  prettyPrint ();

  $('.tab').OAtab ({defaultActive: 4});
  // $('.img').OAimgLiquid ();
  $('.demo').OAimgLiquid ();
});