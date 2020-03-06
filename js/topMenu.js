// $(".dropdown li").on("mouseenter", function() {
//   //   $(".dropdown-content").css("display", "block");
//   $(this)
//     .find(".dropdown-content")
//     .animate({ opacity: 1, "margin-top": 20 });
// });

// $(".dropdown-content").on("mouseleave", function() {
//   console.log("out");
//   $(".dropdown-content").css({ opacity: 0, "margin-top": 50 });
// });

// $(" li").hover(function() {
//   //   $(".dropdown-content").css("display", "block");
//   $(this)
//     .find("ul > li")

//     .fadeToggle(200);
// });

// //   function() {
// //     $(this)
// //       .find("div")
// //       .css({ opacity: 0, "margin-top": 50 });
// //   }
// // );
$(" li").hover(function() {
  //   $(".dropdown-content").css("display", "block");
  $(this)
    .find("ul>li")
    .stop()
    .fadeToggle(200);
});
