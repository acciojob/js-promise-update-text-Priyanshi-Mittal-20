//your JS code here. If required.
let item= document.getElementById("output")
function updateItem()
{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})
}
updateItem().then((data)=>{
	item.innerText=data
})