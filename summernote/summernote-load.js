$(document).ready(function() {
  $('#editor_area').summernote({
    height: 420,
    tabsize: 4,
    inputStyle: 'textarea',
    autofocus: true,
    dialogsInBody: true,
	dialogsFade: true,
    //toolbarContainer: '#editor_panel',
    codemirror: {
          theme: 'monokai',
          lineWrapping: true,
          lineNumbers: true,
          mode: 'text/html',
          htmlMode: true
    },

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
            'Pricing-Table',
            'Triptych'
        ]
    },
    addclass: {
        debug: false,
        classTags: [
	        {title:"Text Center",value:"text-center"},
	        {title:"Image Rounded",value:"img-rounded"},
        	{title:"Image in Circle",value:"img-circle"},
	        {title:"Image Responsive",value:"img-responsive"},
	        {title:"Lead Text",value:"lead"},
	        {title:"Lead Text",value:"lead"},
	        {title:"Lead Text",value:"lead"},
	        {title:"Button Primary",value:"btn btn-primary"},
        	{title:"Button Success",value:"btn btn-success"},
        	{title:"Button Danger",value:"btn btn-danger"},
        	{title:"Button Info",value:"btn btn-info"},
        	{title:"Button Primary LG",value:"btn btn-primary btn-lg"},
        	{title:"Button Success LG",value:"btn btn-success btn-lg"},
        	{title:"Button Danger LG",value:"btn btn-danger btn-lg"},
        	{title:"Button Info LG",value:"btn btn-info btn-lg"},
        	{title:"BG Primary",value:"bg-primary"},
        	{title:"BG Info",value:"bg-info"},
        	{title:"BG Success",value:"bg-success"},
        	{title:"BG Warning",value:"bg-warning"},
        	{title:"Lead Text",value:"lead"},
        	{title:"Text Muted",value:"text-muted"},
        	{title:"Text Danger",value:"text-danger"},

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
	  ],
	  air: [
	    ['font', ['bold', 'underline', 'clear']],
	    ['para', ['ul', 'paragraph']],
	    ['insert', ['link', 'picture']]
	  ]
	}

	
  });
});
