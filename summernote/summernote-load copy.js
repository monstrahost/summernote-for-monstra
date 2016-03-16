$(document).ready(function() {
  $('#editor_area').summernote({
    height: 420,
    tabsize: 2,

	toolbar: [
		//[groupName, [list of button]]
		['insert', ['template', 'addclass']],
		['style', ['bold', 'italic', 'underline', 'clear']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['para', ['ul', 'ol', 'paragraph']],
		['insert', ['picture', 'link', 'video']],
		['misc', ['undo','redo','codeview','help','fullscreen']]
	],
	template: {
        path: '../plugins/summernote/templates',
        list: [ // list of your template (without the .html extension)
            'Wells',
            'Panel',
            'Banner',
            'Jumbotron',
            'price',
            'Triptych'
        ]
    },
    addclass: {
        debug: true,
        classTags: [
	        {title:"Button Primary",value:"btn btn-primary"},
        	{title:"Button Success",value:"btn btn-success"},
        	{title:"Button Danger",value:"btn btn-danger"},
        	{title:"Button Info",value:"btn btn-info"},
        	"lead",
        	"img-rounded",
        	"img-circle", 
        	"img-responsive",
        	"btn btn-success",
        	"btn btn-danger",
        	"text-muted",
        	"text-primary",
        	"text-warning",
        	"text-danger",
        	"text-success",
        	"visible-sm",
        	"hidden-xs", 
        	"hidden-md",
        	"hidden-lg",
        	"hidden-print"
        ]
    },
    popover: {
	  image: [
	    ['float', ['floatLeft', 'floatRight', 'floatNone']],
	    ['remove', ['removeMedia']]
	  ],
	  link: [
	    ['link', ['linkDialogShow', 'unlink']]
	  ]
	}

	
  });
});
