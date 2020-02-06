$(".eat-burger").on("click", function (event) {
    event.preventDefault();
    let newBurger = {
        burger_type: $("#burger").val().trim(),
        devoured: false
    }
    $.ajax("/api/burger",{
        type: "POST",
        data: newBurger,
    }).then(function () {
        location.reload();
    })
});

$(".devoured-list").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    let eaten = {
        devoured:true
    }
        $.ajax("api/burger/" + id, {
            type:"PUT",
            data: eaten,
        }).then(function(){
            location.reload();
        })
})