// import { response } from "express"






const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()


  const location = search.value


  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data.location)
        console.log(data.forecast)

      }

      document.querySelector("#location").innerHTML = data.location
      document.querySelector("#forecast").innerHTML = data.forecast

    })
  })





  (/e/Development/Back-end/node.js/Udemy course/Web-server/.ssh/id_rsa)


  console.log(location)
}) 