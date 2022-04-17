export default analyticsFetch = () => {
  return fetch('/.netlify/functions/analytics')
  .then(res => res.json())
  .then(data => {
    const stats = data.totalsForAllResults
    const target = document.querySelector('#analytics');

    target.innerHTML = `
              <div class="flex justify-between items-center">
              <span class="font-bold text-gray-600">Total views</span>
                <span class="font-bold text-pejGreen">${stats['ga:pageviews']}</span>
                </div>
              <div class="flex justify-between items-center">
              <span class="font-bold text-gray-600">Unique</span>
                <span class="font-bold text-pejGreen">${stats['ga:sessions']}</span>
                </div>
                  `
              ;
  })
}
