const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const submit = document.getElementById("submit")

function getFormvalue() {
    //Write your code here
	alert(fname.value + " " +lname.value)

}
submit.addEventListener("click",()=>{
	getFormvalue()
})
