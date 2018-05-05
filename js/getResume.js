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
  return JSON.parse(jsonStr)
}

function writeResume (resumeJson) {
  var resumeObj = parseJson(resumeJson)
  var resumeHtml = resumeJsontoHtml(resumeObj)

  document.getElementById('resume').innerHTML = resumeHtml
}

getRequest('GET', 'json/resume.json')
  .then(function (result) {
    writeResume(result)
  })
  .catch(function (err) {
    console.error(err)
  })
