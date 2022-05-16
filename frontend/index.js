let firstName=document.getElementById("firstName")
let lastName=document.getElementById("lastName")
let passv=document.getElementById("pass")
let btn=document.getElementById("register")
let listBtn=document.getElementById("list")
let testBtn=document.getElementById("test")

btn.onclick= async ()=>{
    if (firstName.value.length<1 || lastName.value.length<1 || passv.value.length<1) {
       document.getElementById("result").innerText="complete data"
       console.log(firstName.value.length)
    } else {
        let first_name=firstName.value
        let last_name=lastName.value
        let pass=passv.value
        
        await fetch("http://fullstackali20-env.eba-3bvdm9bk.us-east-1.elasticbeanstalk.com/api/users/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        // mode:"CORS",
        
        
        body:JSON.stringify({first_name,last_name,pass})
        
    },
    
    
    ).then(res=>{
        return res.json()
    }).then(data=>{
       if (data.massage="User Added") {
           document.getElementById("result").innerText=JSON.stringify(data.massage)
           
       } else {
        document.getElementById("result").innerText="user not added"
       }
    }).catch(err=>console.log(err))
    }
   
}

listBtn.onclick=async()=>{
    await fetch("http://fullstackali20-env.eba-3bvdm9bk.us-east-1.elasticbeanstalk.com/api/users",{
        method:"GET"
    })
    .then((res)=>{
        return res.json()
    })
    .then((listed)=>{
        document.getElementById("usersList").innerText=JSON.stringify(listed.userslist)
        console.log(listed.userslist)
    })
    .catch(erro=>{
        console.log(erro)
    })
}

testBtn.onclick=async()=>{
    await fetch("http://fullstackali20-env.eba-3bvdm9bk.us-east-1.elasticbeanstalk.com/test",{
        method:"GET"
    })
    .then((res)=>{
        return res.text()
    })
    .then((testR)=>{
        document.getElementById("testResult").innerText=testR+" Server online"
        console.log(testR)
    })
    .catch(erro=>{
        console.log(erro)
    })
}