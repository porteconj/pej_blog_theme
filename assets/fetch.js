export default analyticsFetch = () => {
  return fetch('/.netlify/functions/analytics')
  .then(res => res.json())
  .then(data => {
    const stats = data.totalsForAllResults
    const target = document.querySelector('#analytics');

    target.innerHTML = `
        <div class="analytics-item">
            <span class="title">Total views</span>
              <span class="value">${stats['ga:pageviews']}</span>
              </div>
              <div class="analytics-item">
              <span class="title">Unique</span>
                <span class="value">${stats['ga:sessions']}</span>
                </div>
                  `
              ;
  })
}
