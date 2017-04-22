$(function() {


    $('#editor').froalaEditor({
      //fullPage: true,
      //useClasses: false,
      emoticonsUseImage: false,
      entities: '&cent;&pound;&curren;&yen;&brvbar;&dollar;&lbrace;&rbrace;',
      emoticonsStep: 4,
    	height: 300,
    	imageUploadURL: '<?php echo base_url();?>appUser/uploadEditorImage',
    	imageUploadParams: {
            id: 'my_editor'
          },
          key: 'VB-16cejA-8C-7I2C-21r==',
          width: '520',
          imageManagerPageSize: 20,
          imageManagerScrollOffset: 10,
          imageManagerLoadURL: "<?php echo base_url()?>appUser/loadEditorImages",
          imageManagerLoadMethod: "GET",
          imageManagerDeleteURL: '<?php echo base_url()?>appUser/deleteEditorImage'
        })

     // Catch image removal from the editor.
        .on('froalaEditor.image.removed', function (e, editor, $img) {
          $.ajax({
            // Request method.
            method: "POST",

            // Request URL.
            url: "<?php echo base_url()?>appUser/deleteEditorImage",

            // Request params.
            data: {
              src: $img.attr('src')
            }
          })
          .done (function (data) {
            console.log ('image was deleted');
          })
          .fail (function () {
            console.log ('image delete problem');
          })
        });
});