const endtime = "01 january 2024 10:00 pm"

document.getElementById("endtime").innerText = endtime;

const inputs= document.querySelectorAll("input")


const timer =()=>{

    const end = new Date(endtime)
    console.log(end)
    const curr = new Date()
    console.log(curr)
    const diff = (end - curr)/1000
    console.log(diff)     // the ans is mini second

     inputs[0].value = Math.floor(diff / 3600 / 24)
     console.log(inputs[0])

     inputs[1].value = Math.floor((diff / 3600)%24)
     console.log(inputs[1])

     inputs[2].value = Math.floor((diff / 60) % 60)
     console.log(inputs[2])

     inputs[3].value = Math.floor((diff / 3600)%60 )
     console.log(inputs[3])

    //  inputs[0].value = Math.floor(diff / 3600 / 24)
    //  console.log(inputs[0])


}

timer()