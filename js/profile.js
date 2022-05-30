let telNumber = document.querySelector('.form-control .inp-tel')
if(telNumber) {
    var reg = new RegExp('^[0-9]$');
    telNumber.addEventListener('keypress', function(e){
        if(!reg.test(e.key) || e.target.value.length > 9) {
            e.preventDefault();
        } 
    })
}

const onSubmitData = async (e) => {
    let isFiltered = true;
    let _data = {
        image: document.querySelector('.inp-image'),
        jobTitle: document.querySelector('.inp-job-title'),
        jobPosition: document.querySelector('.inp-position-title'),
        jobDescription: document.querySelector('.inp-description-title'),
    }

    if(_data.jobTitle.value != "") {
        isFiltered = false;
        _data.jobTitle.classList.add('error')
    } else {
        _data.jobTitle.classList.remove('error')
    }

    if(_data.jobPosition.value.length > 0) {
        isFiltered = false;
        _data.jobPosition.classList.add('error')
    } else {
        _data.jobPosition.classList.remove('error')
    }

    if(isFiltered){
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update your infomation!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2dd4bf',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then( (result) => {
            if (!result.isConfirmed) {
                location.reload()
            }
        })
    }
    
   
}


const fetchDataUpdate = async (_data)=> {
    let url = "https://jsonplaceholder.typicode.com/posts"
    return fetch(url, {
        method:"POST",
    })
    .then( response => response.json())
    .then( jsonData => jsonData ) 
}

const OnUploadImageProfile = (e) => {
    let file = e.files;
    let preview = document.querySelector("#imageProfilePreview")
    if(file.length > 0) {
        preview.src = URL.createObjectURL(file[0]);  
    }
}

const emailValidator = (_value) => {
    const rgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return (rgx.test(_value))? true: false;
}

