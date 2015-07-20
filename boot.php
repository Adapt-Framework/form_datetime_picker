<?php

namespace extensions\form_datetime_picker;
use \frameworks\adapt as adapt;

/* Prevent direct access */
defined('ADAPT_STARTED') or die;

$adapt = $GLOBALS['adapt'];

/*
 * Include  css & javascript
 */
$adapt->dom->head->add(new adapt\html_script(array('type' => 'text/javascript', 'src' => '/adapt/extensions/form_datetime_picker/static/js/form_datetime_picker.js')));


?>