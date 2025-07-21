/*
Purpose
Act as API developer and web developer
1 Parameter for the Promise constrcutpr function call is CALLBACK FUNCTION
** params for the CALLBACK FUNCTION of the promise constructor
- resolve , reject this is vairable params then contain function definitions
 */
// Creat a API - the fetch always return promise
function fetchCustom() {
    const promiseObject = new Promise((resolve, reject) => {
        let URLString = "https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg"
        if (URLString) {
            resolve(URLString); // function call have () bracket
        } else {
            reject(new Error("Cat Picture doesn't exist")) // funciton call have ()
        }
    })
    return promiseObject
}

// Create a Web Server to request data from APIs
fetchCustom()
    .then((response) => {console.log(response)})
  //  .then((data)=> {
  //      console.log(data)
  //  })
    .catch(Error => console.log(Error));