<?php

/*
 * Prevent direct access
 */
defined('ADAPT_STARTED') or die;

/* Lets register the field type in forms */
$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Datetime picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_datetime_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Date picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_date_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Time picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_time_picker';
$field_type->save();

/*
 * The range type produces a single picker that
 * is of a greater value than the other range picker
 * in a split field group.
 */
$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Range datetime picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_range_datetime_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Range date picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_range_date_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Range time picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_range_time_picker';
$field_type->save();

/*
 * Specialist fields (Can also be used with a range in the same group)
 */
$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Date of birth picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_dob_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Future datetime picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_future_datetime_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Future date picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_future_date_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Future time picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_future_time_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Past datetime picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_past_datetime_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Past date picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_past_date_picker';
$field_type->save();

$field_type = new model_form_field_type();
$field_type->bundle_name = 'form_datetime_picker';
$field_type->name = 'Past time picker';
$field_type->view = '\\extensions\\form_datetime_picker\\view_field_past_time_picker';
$field_type->save();



?>