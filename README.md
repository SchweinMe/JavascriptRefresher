# JavascriptRefresher
สำหรับผู้เริ่มต้น - HTML Javascript Tailwindcss

# ตัวอย่างหลังบ้าน ADMINLTE 3
https://adminlte.io/themes/v3/index.html#

# Declaration
การประกาศตัวแปร
- Const , Let , Var 
- String, Nummeric, Boolean, null = ค่าว่างหรือไม่มีค่า , undefined ไม่สามารถระบุค่าได้
- console.log() ใช้ในการปัญหา , เช็คข้อมูล
- Array คืออะไร? [1,2,3,4]
- Object คืออะไร? {type:"Fiat", model:"500", color:"white"}
- การรวม string เข้ากับตัวแปร ` string : ${params} `
- typeof ตรวจสอบประเภทของตัวแปร
- การประกาศ Function, Arrow Function
- Event onclick , onkeypress, onkeyup, onload, onchange 
- รู้จักการใช้ event.key  
    e.keyCode : ASCII(American Standard Code for Information Interchange)
    เป็นการแทนข้อมูลด้วยเลขฐานสองจำนวน 8 บิต หรือเท่ากับ 1 ไบต์ แทนอักขระหรือสัญลักษณ์แต่ละตัว 
    ตัวอย่าง :  https://www.toptal.com/developers/keycode/for/1

- addEventListener การติดตามแอคชั่นต่าง ๆ
- Loop 
    For
    For-Of  
    For-In
    Map
    Filter
- switch Case ใช้งานคู่กับ function

- การเข้าถึง DOM 
    getElementById , getElementByClassName  
    querySelector, querySelectorAll  
    innerHTML, innerText
    classList .add, .remove, .contains

- การจัดการกับ Attribute  
    getAttribute
    setAttribute
    removeAttribute

- การแทรก DOM ด้วย insertAdjacent("position", _value ) องค์ประกอบ [beforebegin, afterbegin, beforeend, afterend]
    insertAdjacentHTML
    insertAdjacentElement  
    insertAdjacentText
 
- RegExp 
- async await 

ด้วยเหตุที่ Javascript ทำงานในรูปแบบ non-blocking คือสามารถทำส่วนต่างๆ พร้อมกันได้
จึงต้องใช้ async await เพื่อให้การทำงานเรียงลำดับตามที่เราต้องการได้

<!-- รู้จักกับ TailwindCss -->
https://tailwindcss.com/docs/installation
CSS framework ติดตั้งง่าย เรียนรู้การใช้ Resposive Design

<!-- รู้จักกับ Sweetalert2 Modal -->
แจ้งเตือน : https://sweetalert2.github.io/
ทำ modal สวยง่ายๆ แจ้งเตือนแบบมีไตล์ด้วย Swal.fire()

<!-- รู้จักกับ SwiperJs ทำแบนเนอร์ สไลด์ --> 
https://swiperjs.com/get-started#use-swiper-from-cdn

<!-- MomentJs -->
จัดการข้อมูลเวลาด้วย : https://momentjs.com/
CDN : https://cdnjs.com/libraries/moment.js
