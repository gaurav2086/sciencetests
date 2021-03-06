/**
* @license Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function (config) {


    config.filebrowserBrowseUrl = 'http://localhost:7908/UploadImage';
   
//    config.extraPlugins = 'uploadimage';
//    config.extraPlugins = 'uploadwidget';
//    config.extraPlugins = 'widget';
//    config.extraPlugins = 'lineutils';
//    config.filebrowserBrowseUrl = '/browser';
//    config.filebrowserUploadUrl = '/browser';
    // Define changes to default configuration here.
    // For the complete reference:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // The toolbar groups arrangement, optimized for two toolbar rows.

    //    config.toolbar_Basic =
    //[
    //	['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
    //];


    config.toolbarGroups = [
    		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
    		{ name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
    		{ name: 'links' },
    		{ name: 'insert' },
    		{ name: 'forms' },
    		{ name: 'tools' },
    		{ name: 'document', groups: ['mode', 'document', 'doctools'] },
    		{ name: 'others' },
    		'/',
    		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
    		{ name: 'styles' },
    		{ name: 'colors' },
    		{ name: 'about' }
    	];

    //	// Remove some buttons, provided by the standard plugins, which we don't
    // need to have in the Standard(s) toolbar.
    //config.removeButtons = 'Underline,Subscript,Superscript';
    config.startupFocus = true;
    config.height = 500;
    config.height = '25em';
    config.height = '50px'
};
