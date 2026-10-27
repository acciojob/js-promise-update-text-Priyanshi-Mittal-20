//your JS code here. If required.
let item= document.getElementById("output")
function update()
{
	return new Promise((resolve,reject)=>{
		setTimeout((resolve,reject)=>{
			Promise.resolve("Hello, world!")
		},1000)
	})
}
update().then((data)=>{
	item.innerText=data
})