<?php

/**
 *	Summernote plugin
 *
 *	@package Monstra
 *  @subpackage Plugins
 *	@author MonstraHost
 *	@version 0.8.1
 *
 */

// Register plugin
Plugin::register( __FILE__,
                __('Summernote', 'summernote'),
                __('Summernote for Monstra', 'summernote'),
                '0.8.1',
                '@MonstraHost',
                'http://monstrahost.com/');

// Add JS & CSS



// Add hooks
Action::add('admin_header', 'Summernote::headers');

/**
 * Summernote Class
 */
class Summernote
{
    /**
     * Set editor headers
     */
    public static function headers()
    {
        echo ('
			

            <!-- add summernote -->
            <link href="'.Option::get('siteurl').'/plugins/summernote/summernote/dist/summernote.css" rel="stylesheet">
            <link href="'.Option::get('siteurl').'/plugins/summernote/summernote/summernote-custom.css" rel="stylesheet">
			<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.min.css" />
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/theme/monokai.min.css">
			<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.js"></script>
			<script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/xml/xml.min.js"></script>
			<script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/2.36.0/formatting.min.js"></script>
            <script src="'.Option::get('siteurl').'/plugins/summernote/summernote/dist/summernote.min.js"></script>
            <script src="'.Option::get('siteurl').'/plugins/summernote/summernote/dist/plugin/template/summernote-ext-template.js"></script>
            <script src="'.Option::get('siteurl').'/plugins/summernote/summernote/dist/plugin/addclass/summernote-ext-addclass.js"></script>
            <script src="'.Option::get('siteurl').'/plugins/summernote/summernote/summernote-load.js"></script>
            
        ');
    }

}
