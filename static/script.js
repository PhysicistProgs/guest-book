let submitButton = document.querySelector(".submit-btn")
console.log(submitButton)

submitButton.onclick = function() {
    console.log("submit button clicked")
    // console.log($('#review-form').serialize())
    sendRequest()
}

function sendRequest() {
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
            // modalBody.append(jqXHR.responseText)
        }
        myModal.show()
    }
    
}