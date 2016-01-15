<?php

namespace adapt\forms\datetime_picker{
    
    /* Prevent direct access */
    defined('ADAPT_STARTED') or die;
    
    class view extends \adapt\forms\view_field_input{
        
        public function __construct($form_data, $data_type, $user_data){
            parent::__construct($form_data, $data_type, $user_data);
            $this->add_class('form-datetime-picker');
        }
        
    }

}

?>