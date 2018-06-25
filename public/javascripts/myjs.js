$('#dataType').change(function(){
    opt = $(this).val();
    switch(opt) {
      case 'name':
      $('#data').html('<label for="dataType">Name</label>');
      $('#data').append('<input type="text" name="pname" id="userData" placeholder="Enter name" class="form-control">');
      $('#data').css({'display':'block'});
      // alert($('#data').html);
      break;
      case 'age':
      $('#data').html('<label for="dataType">Age</label>');
      $('#data').append('<input type="text" name="age" placeholder="Enter age" id="userData" class="form-control">');
      $('#data').css({'display':'block'});
      break;
      case 'date':
      $('#data').html('<label for="dataType">DOB</label>');
      $('#data').append('<input type="date" name="dob" id="userData" class="form-control">');
      $('#data').css({'display':'block'});
      break;
      case 'address':
      $('#data').html('<label for="dataType">Address</label>');
      $('#data').append('<textarea row="3" name="address" col="10" placeholder="Enter address" id="userData" class="form-control"></textarea>');
      $('#data').css({'display':'block'});
      break;
      case 'general':
      $('#data').html('<label for="dataType">General information</label>');
      $('#data').append('<textarea row="3" col="10" name="generalinfo" placeholder="Enter general information" id="userData" class="form-control"></textarea>');
      $('#data').css({'display':'block'});
      break;
      default:
      $('#data').css({'display':'none'});
      break;
    }
  });

  $('#role').change(function(){
    opt = $(this).val();
    switch(opt) {
      case 'viewData':
      $('#dataField').css({'display':'block'});
      break;
      case 'all':
      $('#dataField').css({'display':'block'});
      break;
      default:
      $('#dataField').css({'display':'none'});
      break;
    }
  });

//   $(document).ready(function() {
// $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
//     e.preventDefault();
//     $(this).siblings('a.active').removeClass("active");
//     $(this).addClass("active");
//     var index = $(this).index();
//     $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
//     $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
// });
// });

$(document).ready(function(){
    $("#hidePass").click(function(){
      $("#editPass").hide();
    });
    $("#showPass").click(function(){
      $("#editPass").show();
    });
   });