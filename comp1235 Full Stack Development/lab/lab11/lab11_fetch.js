/*
purpose :
Get some information that store on an API to display on
our own webpage
- fetch ()
- then ()
- catch ()
fetch().then(() => {}).then(() => {}).catch(() => {})
fetch function always return a Promise (it mean that will not send immediately
promises to send response data type when APIs ready)
 */

fetch("https://dog.ceo/api/breeds/image/random")
    //unpackaging from with fetch and open with response to repsonse json object
    .then(response => response.json())// remove const () and {} + return shortform
    .then((data) =>{
        console.log(data.message)
    })//not specified to use var = data but it's good standard
    .catch(error=>{console.log(error)})