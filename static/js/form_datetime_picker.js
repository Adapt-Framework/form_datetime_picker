(function($){
    
    $(document).ready(
        function(){
            
            /*
             * What format should our dates and times be?
             */
            
            
            /*
             * Add the pickers
             */
            $('.view.field-datetime-picker input').each(
                function(){
                    var $this = $(this);
                    var pattern = '';
                    
                    if ($this.attr('data-formatter') == 'locales_datetime') {
                        pattern = $('meta.setting[name="locales.default_datetime_pattern"]').attr('content');
                    }else if ($this.attr('data-datetime-format') != ''){
                        pattern = $this.attr('data-datetime-format');
                    }
                    
                    if (pattern != ''){
                        pattern = convert_date_format_to_moment_format(pattern);
                    }
                    
                    $this.datetimepicker({
                        format: pattern
                    });
                    
                }
            );
            
            $('.view.field-time-picker input').each(
                function(){
                    var $this = $(this);
                    var pattern = '';
                    
                    if ($this.attr('data-formatter') == 'locales_time') {
                        pattern = $('meta.setting[name="locales.default_time_pattern"]').attr('content');
                    }else if ($this.attr('data-datetime-format') != ''){
                        pattern = $this.attr('data-datetime-format');
                    }
                    
                    if (pattern != ''){
                        pattern = convert_date_format_to_moment_format(pattern);
                    }
                    
                    $this.datetimepicker({
                        format: pattern
                    });
                    
                }
            );
            
            $('.view.field-date-picker input').each(
                function(){
                    var $this = $(this);
                    var pattern = '';
                    
                    if ($this.attr('data-formatter') == 'locales_date') {
                        pattern = $('meta.setting[name="locales.default_date_pattern"]').attr('content');
                    }else if ($this.attr('data-datetime-format') != ''){
                        pattern = $this.attr('data-datetime-format');
                    }
                    
                    if (pattern != ''){
                        pattern = convert_date_format_to_moment_format(pattern);
                    }
                    
                    $this.datetimepicker({
                        format: pattern,
                        locale: 'en-gb'
                    });
                    
                }
            );
            
            $('.view.field-dob-picker input').each(
                function(){
                    var $this = $(this);
                    
                    var pattern = '';
                    if ($this.attr('data-formatter') == 'locales_date') {
                        pattern = $('meta.setting[name="locales.default_date_pattern"]').attr('content');
                    }else if ($this.attr('data-datetime-format') != ''){
                        pattern = $this.attr('data-datetime-format');
                    }
                    
                    if (pattern != ''){
                        console.log('Pattern: ' + pattern);
                        pattern = convert_date_format_to_moment_format(pattern);
                    }
                    
                    $this.datetimepicker({
                        format: pattern,
                        locale: 'en-gb',
                        viewMode: 'decades'
                    });
                    
                }
            );
            
            $('.view.field-range-date-picker input').each(
                function(){
                    var $this = $(this);
                    var pattern = '';
                    
                    if ($this.attr('data-formatter') == 'locales_date') {
                        pattern = $('meta.setting[name="locales.default_date_pattern"]').attr('content');
                    }else if ($this.attr('data-datetime-format') != ''){
                        pattern = $this.attr('data-datetime-format');
                    }
                    
                    if (pattern != ''){
                        pattern = convert_date_format_to_moment_format(pattern);
                    }
                    
                    var first_picker_id = $this.parents('.form-page-section-group').find('input[type="text"]').first().attr('id');
                    var second_picker_id = $this.attr('id');
                    
                    if ($('#' + first_picker_id).size()){
                        $this.datetimepicker({
                            format: pattern,
                            locale: 'en-gb',
                            useCurrent: false
                        });
                        
                        $('#' + first_picker_id).on(
                            'dp.change',
                            function (event){
                                $('#' + second_picker_id).data("DateTimePicker").minDate(event.date);
                            }
                        );
                        
                        $('#' + second_picker_id).on(
                            'dp.change',
                            function (event){
                                $('#' + first_picker_id).data("DateTimePicker").maxDate(event.date);
                            }
                        );
                    } 
                }
            );
            
            
            $('.view.field-range-datetime-picker input').each(
                function(){
                    var $this = $(this);
                    var pattern = '';
                    
                    if ($this.attr('data-formatter') == 'locales_datetime') {
                        pattern = $('meta.setting[name="locales.default_datetime_pattern"]').attr('content');
                    }else if ($this.attr('data-datetime-format') != ''){
                        pattern = $this.attr('data-datetime-format');
                    }
                    
                    if (pattern != ''){
                        pattern = convert_date_format_to_moment_format(pattern);
                    }
                    
                    var first_picker_id = $this.parents('.form-page-section-group').find('input[type="text"]').first().attr('id');
                    var second_picker_id = $this.attr('id');
                    
                    if ($('#' + first_picker_id).size()){
                        $this.datetimepicker({
                            format: pattern,
                            locale: 'en-gb',
                            useCurrent: false
                        });
                        
                        $('#' + first_picker_id).on(
                            'dp.change',
                            function (event){
                                $('#' + second_picker_id).data("DateTimePicker").minDate(event.date);
                            }
                        );
                        
                        $('#' + second_picker_id).on(
                            'dp.change',
                            function (event){
                                $('#' + first_picker_id).data("DateTimePicker").maxDate(event.date);
                            }
                        );
                    } 
                }
            );
            
            
            $('.view.field-range-time-picker input').each(
                function(){
                    var $this = $(this);
                    var pattern = '';
                    
                    if ($this.attr('data-formatter') == 'locales_time') {
                        pattern = $('meta.setting[name="locales.default_time_pattern"]').attr('content');
                    }else if ($this.attr('data-datetime-format') != ''){
                        pattern = $this.attr('data-datetime-format');
                    }
                    
                    if (pattern != ''){
                        pattern = convert_date_format_to_moment_format(pattern);
                    }
                    
                    var first_picker_id = $this.parents('.form-page-section-group').find('input[type="text"]').first().attr('id');
                    var second_picker_id = $this.attr('id');
                    
                    if ($('#' + first_picker_id).size()){
                        $this.datetimepicker({
                            format: pattern,
                            locale: 'en-gb',
                            useCurrent: false
                        });
                        
                        $('#' + first_picker_id).on(
                            'dp.change',
                            function (event){
                                $('#' + second_picker_id).data("DateTimePicker").minDate(event.date);
                            }
                        );
                        
                        $('#' + second_picker_id).on(
                            'dp.change',
                            function (event){
                                $('#' + first_picker_id).data("DateTimePicker").maxDate(event.date);
                            }
                        );
                    } 
                }
            );
            
            
        }
    );
    
    function convert_date_format_to_moment_format(pattern){
        var chars = pattern.split('');
        var output = '';
        
        for (var i = 0; i < chars.length; i++){
            var chr = chars[i];
            
            switch(chr){
            case 'Y':
                output = output + 'YYYY';
                break;
            case 'y':
                output = output + 'YY';
                break;
            case 'm':
                output = output + 'MM';
                break;
            case 'n':
                output = output + 'MMM';
                break;
            case 'F':
                output = output + 'MMMM';
                break;
            case 'j':
                output = output + 'D';
                break;
            case 'd':
                output = output + 'DD';
                break;
            case 'G':
                output = output + 'H';
                break;
            case 'H':
                output = output + 'HH';
                break;
            case 'g':
                output = output + 'h';
                break;
            case 'h':
                output = output + 'hh';
                break;
            case 'i':
                output = output + 'mm';
                break;
            case 's':
                output = output + 'ss';
                break;
            case 'a':
                output = output + 'a';
                break;
            case 'A':
                output = output + 'A';
                break;
            default:
                output = output + chr;
            }
        }
        
        return output;
    }
    
})(jQuery);