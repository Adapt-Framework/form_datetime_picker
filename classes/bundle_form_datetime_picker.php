<?php

namespace adapt\forms\datetime_picker{
    
    /* Prevent Direct Access */
    defined('ADAPT_STARTED') or die;
    
    class bundle_form_datetime_picker extends \adapt\bundle{
        
        public function __construct($data){
            parent::__construct('form_datetime_picker', $data);
        }
        
        public function boot(){
            if (parent::boot()){
                
                $this->dom->head->add(new html_script(array('type' => 'text/javascript', 'src' => "/adapt/form_datetime_picker/form_datetime_picker-{$this->version}/static/js/form_datetime_picker.js")));
                return true;
            }
            
            return false;
        }
        
    }
    
    
}

?>