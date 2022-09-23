const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <div style="text-align: center;">
        <h3>We would like to provide you feedback!</h3>
        <p>Please answer the following question:</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
        </div>
      </div>
    </html>
  `;
}