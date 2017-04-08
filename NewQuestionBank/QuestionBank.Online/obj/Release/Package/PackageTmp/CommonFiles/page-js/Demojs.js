$(document).ready(function () {

    $("#divckeditor").hide();
    var Imgid = 'txtdemo';

    CKEDITOR.replace(Imgid, { filebrowserImageUploadUrl: '../Handler/ImgUpload.ashx' }); //path to “Upload.ashx”
    $("#btndemo").click(function () {

          $("#divckeditor").show();
      


        
        
    });
});