$(".new-burger").on("click", function (event) {
    event.preventDefault();
    let newBurger = {
        burger_type: $("#burg").val().trim(),
        devoured: false
    }
    console.log(newBurger);
    $.ajax("/api/burger",{
        type: "POST",
        data: newBurger,
    }).then(function () {
        location.reload();
    })
});

$(".eat-burger").on("click", function (event) {
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