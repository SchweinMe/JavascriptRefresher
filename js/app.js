let contentData;

/* เริ่มทำงานหลังจากทุกอย่างบนหน้าเว็บไซต์โหลดเสร็จแล้ว จึงเริ่มใช้งานฟังก์ชั่น */
window.onload = async () => {
    /* ดึงข้อมูลมาเก็บไว้ที่ตัวแปร */
    contentData = await onFetchData()
    /* เรียกใช้งานฟังก์ชั่ง */
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
            if(_data.name.match(regex)){
                return true
            }
            return false
        }) 

        if(dataFiltered) {
            /* ประกาศ DOC ที่ต้องการเข้าถึง */
            let bodyTarget = document.querySelector('.table-body')
            if(bodyTarget) {
                /* เคลียร์ข้อมูลเก่าก่อน */
                bodyTarget.innerHTML = ""
                /* การใช้งาน map จะ loop ข้อมูล แล้วสามารถเลือกคืนข้อมูลย้อนกลับไป array ได้*/
                const someData = await dataFiltered.map ( (item, index) => {
                    return {
                        no: index + 1,
                        name: item.name,
                        email: item.email,
                        phone: item.phone,
                    }
                })

                for(let item of someData) {
                    bodyTarget.insertAdjacentHTML('beforeend', `
                    <div class="row-data flex mb-4">
                        <div class="table-body-col text-sm w-16">${item.no}</div>
                        <div class="table-body-col text-sm w-1/4 pr-3">${item.name}</div>
                        <div class="table-body-col text-sm w-1/4 text-gray-400">${item.email}</div>
                        <div class="table-body-col text-sm w-1/4 text-gray-400">${item.phone}</div>
                    </div>`)
                }
                document.querySelector('.totalAmount').textContent = dataFiltered.length
            }
        }
    }
}

const onFetchData = async () => {
    let url = "https://jsonplaceholder.typicode.com/users"
    return fetch(url, {
        method:"GET",
    })
    .then( response => response.json())
    .then( jsonData => jsonData ) 
}