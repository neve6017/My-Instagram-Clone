const loadFollowButton = () => {
    $("#follow-button").click(function () {
        console.log(123)
      if ($("#follow-button").text() == "Follow") {
        // *** State Change: To Following ***
        // We want the button to squish (or shrink) by 10px as a reaction to the click and for it to last 100ms
        $("#follow-button").animate(
          { width: "-=10px" },
          100,
          "easeInCubic",
          function () {}
        );
  
        // then now we want the button to expand out to it's full state
        // The left translation is to keep the button centred with it's longer width
        $("#follow-button").animate(
          { width: "+=45px" },
          600,
          "easeInOutBack",
          function () {
            $("#follow-button").css("color", "#fff");
            $("#follow-button").text("Following");
            /*$("#follow-button").hover(function(){
                $(this).text("Unfollow");
            }, function(){
                $(this).text("Following");
            });*/
  
            // Animate the background transition from white to green. Using JQuery Color
            $("#follow-button").animate(
              {
                backgroundColor: "#2EB82E",
                borderColor: "#2EB82E"
              },
              1000
            );
          }
        );
      } else {
        // *** State Change: Unfollow ***
        // Change the button back to it's original state
        $("#follow-button").animate(
          { width: "-=35px" },
          600,
          "easeInOutBack",
          function () {
            $("#follow-button").text("Follow");
            $("#follow-button").css("color", "#3399FF");
            $("#follow-button").css("background-color", "#ffffff");
            $("#follow-button").css("border-color", "#3399FF");
          }
        );
      }
    });
}

export default loadFollowButton