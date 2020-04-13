$("form :button").on("click", function(){
    let task = $('.js-shopping-list-entry').val();
    let check = "check";
    let deleted = "delete";
    if(task.length > 0) {
      $(".shopping-list").append('<li><span class="shopping-item">' + task + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">' + check + '</span></button><button class="shopping-item-delete"><span class="button-label">' + deleted + '</span></button></div></li>');
    }
    else {
      return;
    }
  });

$("#js-shopping-list-form").on('submit',function(e){                 
  //Add stuff to database if necessary
     e.preventDefault();
     return false;
  });

  //This checks your list item
    $("ul").on("click", ".shopping-item-toggle", function() {
      $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
  });

//This deletes your list item
  $("ul").on("click", ".shopping-item-delete", function() {
      event.preventDefault();
    $(event.target).closest("li").remove();
  });

 //Original code, delegation wasn't picking up appended list items within the HTML
  // $('.shopping-item-toggle').on("click", function(e) {
  //   $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
  // });

  // $('.shopping-item-delete').on("click", function(event) {
  //   event.preventDefault();
  //   $(event.target).closest("li").remove();
  // });