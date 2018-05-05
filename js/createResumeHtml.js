'use strict'

var resume

function resumeJsontoHtml (resumeObj) {
  resume = resumeObj
  var email = resumeObj.contactInfo.email

  var resumeHtml = ''
  resumeHtml += '<div>'

  resumeHtml += '<ul class="contact-info"> '
  resumeHtml += '<li>' + resumeObj.name + '</li>'
  resumeHtml += '<li>' + resumeObj.contactInfo.address + '</li>'
  resumeHtml += '<li>' + resumeObj.contactInfo.phoneNumber + '</li>'
  resumeHtml += '<li><a href="mailto:' + email + '">' + email + '</a></li>'
  resumeHtml += '</ul> '

  resumeHtml += '<h2>SKILLS</h2>'
  resumeHtml += '<p>' + resumeObj.skills.join(', ') + '</p>'

  resumeHtml += '<h2>EXPERIENCE</h2>'
  resumeObj.experience.forEach( function (expObj) {
    resumeHtml += '<h2>' 
    resumeHtml += [
      expObj.jobTitle, expObj.company, expObj.location
    ].join(', ')
    resumeHtml += ' - ' + expObj.startDate + ' to ' + expObj.endDate
    resumeHtml += '</h2>'

    resumeHtml += '<ul class="experience">'
    expObj.accomplishments.forEach( function (accomplishment) {
      resumeHtml += '<li>' + accomplishment + '</li>'
    })
    resumeHtml += '</ul> '
  })

  resumeHtml += '<h2>EDUCATION</h2>'
  resumeHtml += '<ul class="education">'
  resumeObj.education.forEach( function (edu) {
    resumeHtml += '<li>'
    resumeHtml +=  edu.schoolName + ', '
    resumeHtml +=  edu.schoolLocation + ' '
    resumeHtml +=  '(' + edu.graduationDate + ')'
    resumeHtml += '</li>'
    resumeHtml += '<li>'
    resumeHtml +=  edu.degree.type + ', '
    resumeHtml +=  'majors: ' + edu.degree.majors.join(', ')
    resumeHtml += '</li>'
  })
  resumeHtml += '</ul> '

  resumeHtml += '<h2>ADDITIONAL INFORMATION</h2>'
  resumeHtml += '<p>' + resumeObj.additionalInfo + '</p>'


  resumeHtml += '</div>'

  return resumeHtml
}
