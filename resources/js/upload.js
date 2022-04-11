$('.adBtn').on('click',function(){

   let tableRow =
      "<tr>"+
           "<td><input type='file' class='InputFile form-control'></td>"+
           "<td class='fileSize'>File Size</td>"+
           "<td><button class='btn CancelBtn btn-danger btn-sm'>Cancel</button></td>"+
           "<td><button class='btn UpBtn btn-primary btn-sm'>Upload</button></td>"+
           "<td class='fileUpMB'>Uploaded(MB)</td>"+
           "<td class='fileUpPercentage'>Uploaded(%)</td>"+
           "<td class='fileStatus'>Status</td>"+
       "</tr>";

      $('.fileList').append(tableRow);



    $('.InputFile').on('change',function(){
        let myFile = $(this).prop('files');
        let myFileSize = ((myFile[0].size)/(1024*1024)).toFixed(2);
        $(this).closest('tr').find('.fileSize').html(myFileSize+ "MB");
    });

    //Upload button click
    $('.UpBtn').on('click',function(event){
        let myFile = $(this).closest('tr').find('.InputFile').prop('files');
        let FileUpMb = $(this).closest('tr').find('.fileUpMB');
        let FileUpPercent = $(this).closest('tr').find('.fileUpPercentage');
        let FileStatus = $(this).closest('tr').find('.fileStatus');
        let upBtn = $(this);
        let formData = new FormData();
        formData.append('fileKey',myFile[0]);

        onFileUpload(formData,FileUpMb,FileUpPercent,FileStatus,upBtn);
        event.preventDefault();  //bar bar excution off kora hoice...ekbar hobe
        event.stopImmediatePropagation(); //j button e click kora hobe sudhu oitai run hobe baki gula off thakbe


    });

    //Remove Row
    $('.CancelBtn').on('click',function (){
        $(this).parents('tr').remove();
    });



})

function onFileUpload(formData,FileUpMb,FileUpPercent,FileStatus,upBtn){
    FileStatus.html('Loading...');
    upBtn.prop('disabled',true);
  let url = "/fileUpload";
  let config = {
      headers:{'content-type':'multipart/form-data'},
      onUploadProgress:function (progressEvent){
         let UpMb = (progressEvent.loaded/(1024*1024)).toFixed(2)+" MB";
         let upPercent = ((progressEvent.loaded*100)/progressEvent.total).toFixed(2)+" %";
          FileUpMb.html(UpMb);
          FileUpPercent.html(upPercent);

      }
  }

  axios.post(url,formData,config)
      .then(function(response){
         if(response.status==200){
             FileStatus.html("Upload Success");
             upBtn.prop('disabled',false);
         }else{
             FileStatus.html("Upload Failed!");
             upBtn.prop('disabled',false);
         }
  }).catch(function(error){
      FileStatus.html("Upload Failed!");
      upBtn.prop('disabled',false);
  });
}
