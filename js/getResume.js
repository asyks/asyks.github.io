'use strict'

function getRequest (method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(
          Error('Request failed with status: ' +
            xhr.status + 'statusText: ' + xhr.statusText
          )
        )
      }
    }

    xhr.onerror = function () {
      reject(
        Error(
          'Request failed with status: ' +
          xhr.status + 'statusText: ' + xhr.statusText
        )
      )
    }

    xhr.send()
  })
}

function parseJson (jsonStr) {
  var parsedJson = JSON.parse(jsonStr)

  return parsedJson
}

getRequest('GET', 'json/resume.json')
  .then(function (result) {
    console.log(result)
    console.log(parseJson(result))
  })
  .catch(function (err) {
    console.error(err.statusText)
  })
