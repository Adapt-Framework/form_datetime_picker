<?php

namespace extensions\form_datetime_picker{
    
    /* Prevent direct access */
    defined('ADAPT_STARTED') or die;
    
    class view_field_time_picker extends view{
        
        public function __construct($form_data, $user_data){
            parent::__construct($form_data, $user_data);
        }
        
    }

}

?>