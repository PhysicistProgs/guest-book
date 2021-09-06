/*Implement sending request with jQuery.ajax`*/

let submitButton = document.querySelector(".submit-btn")
console.log(submitButton)

submitButton.onclick = function() {
    console.log("submit button clicked")
    sendRequest()
}

function sendRequest() {
    /*Sends requests with data from form. Shows modal with request's result*/
    var request = $.ajax({
        url: '/comments',
        dataType: 'text',
        method: 'POST',
        data: $("#review-form").serialize()
    });

    request.done(function(data, textStatus, jqXHR){
        console.log("data:", data)
        console.log("textStatus:", textStatus)
        console.log("jqXHR:", jqXHR)
        showModal(true, jqXHR)
    })

    request.fail(function(jqXHR, textStatus, errorThrown){
        console.log("errorThrown:", errorThrown)
        console.log("textStatus:", textStatus)
        console.log("jqXHR:", jqXHR)
        showModal(false, jqXHR)
    })
    console.log(myModal)
    

    function showModal(isSuccessed, jqXHR) {
        /*Shows modal with information about request was send`*/
        var myModal = new bootstrap.Modal(
                      document.querySelector('#exampleModal'))
        let modalTitle = document.querySelector("#exampleModalLabel")
        let modalBody = document.querySelector(".modal-body")              
        if (isSuccessed) {
            modalTitle.textContent = "Успешно!"
            modalBody.textContent = "Ваш отзыв отправлен."
        } else {
            modalTitle.textContent = "Неудача!"
            modalBody.textContent = jqXHR.responseText
        }
        myModal.show()
    }
    
}