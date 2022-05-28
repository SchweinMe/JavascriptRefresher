let contentData;
window.onload = async () => {
    console.log('web loaded')
    contentData = await onFetchData()
    onFilters()
}

const onFilters = async (e) => {
    if(contentData.length > 0) {
        let textFilter = (e)?e.value:""
        let regex = new RegExp(textFilter, 'g')
        /* การใช้งาน filter เมื่อเป็นจริงจะ return _data คืน array */
        const dataFiltered = await contentData.filter( _data =>  {
            if(_data.id == textFilter){
                return true
            }
            if(_data.title.match(regex)){
                return true
            }
            return false
        }) 

        if(dataFiltered) {
            let bodyTarget = document.querySelector('.table-body')
            /* เคลียร์ข้อมูลเก่าก่อน */
            bodyTarget.innerHTML = ""
            /* การใช้งาน map  จะ loop ข้อมูล แล้วสามารถเลือกคืนข้อมูลย้อนกลับไป array ได้*/
            const someData = await dataFiltered.map (item => {
                return {
                    id: parseInt(item.id),
                    title: item.title,
                    body: item.body
                }
            })

            for(let item of someData) {
                bodyTarget.insertAdjacentHTML('beforeend', `
                <div class="row-data flex mb-4">
                    <div class="table-body-col text-sm w-16">${item.id}</div>
                    <div class="table-body-col text-sm w-2/4 pr-3">${item.title}</div>
                    <div class="table-body-col text-sm w-full text-gray-400">${item.body}</div>
                </div>`)
            }
            document.querySelector('.totalAmount').textContent = dataFiltered.length
        }
    }
}

function passwordValidate(_el){
    let validate = true;
    let letters = /[a-z]/g;

    let characterEl = _el.closest('.v-format').querySelector('#v-character')
    if(_el.value.match(letters)) {  
        characterEl.classList.remove("invalid");
        characterEl.classList.add("valid");
    } else {
        validate = !validate;
        characterEl.classList.remove("valid");
        characterEl.classList.add("invalid");
    }

    let numbers = /[0-9]/g;
    let numberEl = _el.closest('.group').querySelector('#v-number')
    if(_el.value.match(numbers)) {  
        numberEl.classList.remove("invalid");
        numberEl.classList.add("valid");
    } else {
        validate = !validate;
        numberEl.classList.remove("valid");
        numberEl.classList.add("invalid");
    }

    let lengthEl = _el.closest('.group').querySelector('#v-length')
    if(_el.value.length > 7){
        lengthEl.classList.remove("invalid");
        lengthEl.classList.add("valid");
    } else {
        validate = !validate;
        lengthEl.classList.remove("valid");
        lengthEl.classList.add("invalid");
    } 
 
    if (/\s/.test(_el.value)) {
        console.log('whitespace')
        validate = !validate;
    }
    return validate;
}

const onFetchData = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts"
    return fetch(url, {
        method:"GET",
    })
    .then( response => response.json())
    .then( jsonData => jsonData ) 
}