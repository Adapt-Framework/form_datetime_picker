(function($){
    
    $(document).ready(
        function(){
            
            /*
             * We need to attach events and config to the datetime pickers, the problem
             * being is that they may not be on the page when the page loads, so...
             * to get around this we can monitor events from a higher point
             * and check for focus events occuring and trigger the configuration
             * and attach the events if we haven't already done so.
             */
            
            
            $('body').on(
                'focus',
                '.view.field-datetime-picker input,' +
                '.view.field-date-picker input,' +
                '.view.field-time-picker input,' +
                '.view.field-range-datetime-picker input,' +
                '.view.field-range-date-picker input,' +
                '.view.field-range-time-picker input,' +
                '.view.field-dob-picker input,' +
                '.view.field-future-datetime-picker input,' +
                '.view.field-future-date-picker input,' +
                '.view.field-future-time-picker input,' +
                '.view.field-past-datetime-picker input,' +
                '.view.field-past-date-picker input,' +
                '.view.field-past-time-picker input',
                function (e) {
                    var $input = $(this);
                    if ($input.attr('data-configured') != 'yes') {
                        var $field = $input.parents('.view.field');
                        var formatter = $input.attr('data-formatter');
                        
                        if (formatter == 'locales_datetime') {
                            formatter = $('meta.setting[name="locales.default_datetime_pattern"]').attr('content');
                        } else if (formatter == 'locales_time') {
                            formatter = $('meta.setting[name="locales.default_time_pattern"]').attr('content');
                        } else if (formatter == 'locales_date') {
                            formatter = $('meta.setting[name="locales.default_date_pattern"]').attr('content');
                        }
                        
                        $input.attr('data-configured', 'yes');
                        
                        if ($field.hasClass('field-dob-picker')) {
                            $input.datetimepicker({
                                format: convert_date_format_to_moment_format(formatter),
                                locale: 'en-gb', // @TODO: Pull from meta setting
                                viewMode: 'decades'
                            });
                        }else if (
                            $field.hasClass('field-range-datetime-picker') ||
                            $field.hasClass('field-range-date-picker') ||
                            $field.hasClass('field-range-time-picker')
                        ) {
                            // We have a range picker so we need to configure it
                            // accordingly
                            var $group = $field.parents('.view.form-page-section-group');

                            var $picker1 = $group.find('.form-datetime-picker input').first();
                            var $picker2 = $group.find('.form-datetime-picker input').last();
                            
                            if ($picker1.attr('data-configured') != 'yes') {
                                // We need to configure this one before the second one
                                // Check the type of picker we have
                            }
                            
                            $picker2.datetimepicker({
                                format: convert_date_format_to_moment_format(formatter),
                                locale: 'en-gb', // @TODO: Pull from meta setting
                                useCurrent: false
                            });
                            
                            // Append events to deal with the link
                            $picker1.on(
                                'dp.change',
                                function (e) {
                                    $(e.target).first().blur();
                                    var minPicker = $picker2.data('DateTimePicker');
                                    if(minPicker){
                                        minPicker.minDate(e.date);
                                    }
                                }
                            );
                            
                            $picker2.on(
                                'dp.change',
                                function (e) {
                                    $(e.target).first().blur();
                                    var maxPicker = $picker1.data('DateTimePicker');
                                    if(maxPicker){
                                        maxPicker.maxDate(e.date);
                                    }
                                }
                            );
                            
                        } else {
                            $input.datetimepicker({
                                format: convert_date_format_to_moment_format(formatter),
                                locale: 'en-gb'
                            });
                        }
                    }
                }
            );
            
            
            function configure_datetime_picker(picker) {
                
            }
            
            
            
            //window.testFoo = testFoo;
            function testFoo() {
                //console.log('we have been called');
                
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
                            //console.log('Pattern: ' + pattern);
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