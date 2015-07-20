<?php

namespace extensions\form_datetime_picker{
    
    /* Prevent direct access */
    defined('ADAPT_STARTED') or die;
    
    class view extends \extensions\forms\view_field_input{
        
        public function __construct($form_data, $user_data){
            parent::__construct($form_data, $user_data);
            $this->add_class('form-datetime-picker');
        }
        
    }

}

?>