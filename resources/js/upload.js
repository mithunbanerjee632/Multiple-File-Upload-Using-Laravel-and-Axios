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

      //Remove Row
    $('.CancelBtn').on('click',function (){
        $(this).parents('tr').remove();
    });

    $('.InputFile').on('change',function(){
        let myFile = $(this).prop('files');
        let myFileSize = ((myFile[0].size)/(1024*1024)).toFixed(2);
        $(this).closest('tr').find('.fileSize').html(myFileSize+ "MB");
    });



})
