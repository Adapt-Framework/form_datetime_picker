<?php

namespace adapt\forms\datetime_picker{
    
    /* Prevent direct access */
    defined('ADAPT_STARTED') or die;
    
    class view_field_range_time_picker extends view{
        
        public function __construct($form_data, $data_type, $user_data){
            parent::__construct($form_data, $data_type, $user_data);
        }
        
    }

}

?>