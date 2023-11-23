//start image preview
document.getElementById("fimage").addEventListener("change", function (event) {
  var input = event.target;
  var imagePreview = document.getElementById("frontimageplace");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    imagePreview.src = "";
  }
});



document.getElementById("bimage").addEventListener("change", function (event) {
  var input = event.target;
  var imagePreview = document.getElementById("backimageplace");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    imagePreview.src = "";
  }
});



document.getElementById("dflimage").addEventListener("change", function (event) {
  var input = event.target;
  var imagePreview = document.getElementById("dflimageplace");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    imagePreview.src = "";
  }
});


document.getElementById("drlimage").addEventListener("change", function (event) {
  var input = event.target;
  var imagePreview = document.getElementById("drlimageplace");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    imagePreview.src = "";
  }
});
//end image preview

//start data handaling
var vehicleBaseUrl="http://localhost:8003/api/v1/vehicles";

$("#vsave-btn").click(() => {
 saveVehicle();
});
//end data handaling


//start create crud logic
 function saveVehicle(){
    let brand =$("#vbrand").val();
    let category=$("#vcategory").val();
    let fuelType=$("#ftype").val();
    let isHybrid=$("#isHybrid").val();
    let fuelConsumption=$("#fusage").val();
   
    let vehicleFontImg=$("#fimage")[0].files[0];
   
    let vehicleRearImg=$("#bimage")[0].files[0];
    let seatCapacity=$("#seat").val();
    let vehicleType=$("#vehiType").val();
    let transmissionMedium=$("#ttype").val();
    let qty=$("#qty").val();
    let feeFor1km=$("#fee").val();
    let driverName=$("#dname").val();
    let driverContactNo=$("#dnumber").val();
    let driverLicenseFontImg=$("#dflimage")[0].files[0];
    let driverLicenseRearImg=$("#drlimage")[0].files[0];
    let remarks=$("#remarks").val();
   
    const formData=new FormData();
    formData.append("brand",brand);
     formData.append("category",category);
      formData.append("fuelType",fuelType);
       formData.append("isHybrid",isHybrid);
        formData.append("fuelConsumption",fuelConsumption);
         formData.append("vehicleFontImg",vehicleFontImg);
          formData.append("vehicleRearImg",vehicleRearImg);
           formData.append("seatCapacity",seatCapacity);
            formData.append("vehicleType",vehicleType);
             formData.append("transmissionMedium",transmissionMedium);
              formData.append("qty",qty);
               formData.append("feeFor1km",feeFor1km);
                formData.append("driverName",driverName);
                 formData.append("driverContactNo",driverContactNo);
                  formData.append("driverLicenseFontImg",driverLicenseFontImg);
                   formData.append("driverLicenseRearImg",driverLicenseRearImg);
                    formData.append("remarks",remarks);

                     $.ajax({
    url: vehicleBaseUrl,
    processData: false,
    contentType: false,
    cache: false,
    method: "POST",
    data: formData,
    success: function (res) {
      if (res.code == 200) {
        alert(res.message);
        loadAllVehicle();
         clearAll();
        
      }
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    },
  });
                     
    
}


//end create crud logic

/*start common features */
function loadAllVehicle(){
  $("#allVehicle-tbl").empty();

  $.ajax({
    url: vehicleBaseUrl,
    processData: false,
    contentType: false,
    cache: false,
    method: "GET",
    success: function (res) {
      console.log(res);

        for (const vehicle of res.data) {
         console.log(res.data);
          
       
      let row = `<tr>
        <td class="px-4 text-center">${vehicle.id}</td>
        <td class="px-4 text-center">${vehicle.brand}</td>
        <td class="px-4 text-center">${vehicle.category}</td>
        <td class="px-4 text-center">${vehicle.fuelType}</td>
        <td class="px-4 text-center">${vehicle.isHybrid}</td>
        <td class="px-4 text-center">${vehicle.fuelConsumption}</td>
       <td><img src="data:guideImg/png;base64,${vehicle.vehicleFontImg}" width="150"/></td>
       <td><img src="data:guideImg/png;base64,${vehicle.vehicleRearImg}" width="150"/></td>
        <td class="px-4 text-center">${vehicle.seatCapacity}</td>
         <td class="px-4 text-center">${vehicle.vehicleType}</td>
          <td class="px-4 text-center">${vehicle.transmissionMedium}</td>
          <td class="px-4 text-center">${vehicle.qty}</td>
          <td class="px-4 text-center">${vehicle.feeFor1km}</td>
          <td class="px-4 text-center">${vehicle.driverName}</td>
          <td class="px-4 text-center">${vehicle.driverContactNo}</td>
         <td><img src="data:guideImg/png;base64,${vehicle.driverLicenseFontImg}" width="150"/></td>
           <td><img src="data:guideImg/png;base64,${vehicle.driverLicenseRearImg}" width="150"/></td>    
           <td class="px-4 text-center">${vehicle.remarks}</td>
         </tr>`;
             
      
       

        $("#allVehicle-tbl").append(row);
      }
      bindClickEventAll();
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    },
  });
 
}

function clearAll(){
  $("#vId").val("");
  $("#vbrand").val("");
  $("#vcategory").val("");
  $("#ftype").val("");
  $("#isHybrid").val("");
  $("#fusage").val("");
  $("#frontimageplace").attr("Src","");
  $("#backimageplace").attr("Src","");
  $("#seat").val("");
  $("#vehiType").val("");
  $("#ttype").val("");
  $("#qty").val("");
  $("#fee").val("");
  $("#dname").val("");
  $("#dnumber").val("");
  $("#dflimageplace").attr("Src","");
  $("#drlimageplace").attr("Src","");
  $("#remarks").val("");
}

function bindClickEventAll() {
  $("#allVehicle-tbl > tr").click(function () {
    let id = $(this).children().eq(0).text();
    let brand = $(this).children().eq(1).text();
    let category = $(this).children().eq(2).text();
    let ftype = $(this).children().eq(4).text();
    let isHybrid = $(this).children().eq(3).text();
    let fuelConsumption = $(this).children().eq(5).text();
    
    

    let vehicleFontImg = $(this).children().eq(6).find("img").attr("src");
    let vehicleRearImg = $(this).children().eq(7).find("img").attr("src");
   

    let seatCapacity = $(this).children().eq(8).text();
    let vehicleType = $(this).children().eq(9).text();
    let transmissionMedium = $(this).children().eq(10).text();
    let qty = $(this).children().eq(11).text();
     let feeFor1km = $(this).children().eq(12).text();
      let driverName = $(this).children().eq(13).text();
       let driverContactNo = $(this).children().eq(14).text();
       let driverLicenseFontImg = $(this).children().eq(15).text();
  let driverLicenseRearImg = $(this).children().eq(16).text();
  let remarks = $(this).children().eq(17).text();
    

    $("#vId").val(id);
    $("#vbrand").val(brand);
    $("#vcategory").val(category);
    $("#ftype").val(ftype);
    $("#isHybrid").val(isHybrid);
    $("#fusage").val(fuelConsumption);
    $("#seat").val(seatCapacity);
     $("#vehiType").val(vehicleType);
      $("#qty").val(qty);
       $("#fee").val(feeFor1km);
         $("#ttype").val(transmissionMedium);
           

    $("#frontimageplace").attr("src", vehicleFontImg);
    $("#backimageplace").attr("src", vehicleRearImg);
   

    $("#dname").val(driverName);
    $("#dnumber").val(driverContactNo);
    $("#dflimageplace").attr("src", driverLicenseFontImg);
    $("#drlimageplace").attr("src", driverLicenseRearImg);
     $("#remarks").val(remarks);
  });
}

/*end common features */