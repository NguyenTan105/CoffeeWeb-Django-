let updateBtns = document.getElementsByClassName('update-cart')
let addQuantity = document.getElementById('add-quantity')
for (i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function () {
        let productId = this.dataset.product
        let action = this.dataset.action
        // console.log('product', productId)
        // console.log('action', action)
        // console.log('user', user)
        if (user === "AnonymousUser"){
            window.location.href = '/login/';
        }
        else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action) {
    console.log('user logged successfully')
    let url = '/update_item/'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'productId':productId,'action':action})
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log('data', data)
        location.reload()
    })
}
