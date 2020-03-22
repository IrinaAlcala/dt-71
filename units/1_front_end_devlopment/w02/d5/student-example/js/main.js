

$(document).ready(function() {
  const newHomes = [
      {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
      {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
      {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
      {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];


  let removedHomes = [];

  $('#addHome').removeClass('btn-danger').addClass('btn-success');
  $('h1').addClass('text-center');

 let newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
  $('body').append(newLink);
  $('#zillowLink').attr( "target", "_blank" );

  $('#homes tbody').on('click', 'button', function() {
    let row = $(this).closest('tr');
    removedHomes.push(row[0].outerHTML);
    row.fadeOut(500, function() {
      row.remove();
    });
    $('#restoreHomes').removeAttr('disabled');
  });

  $('#addHome').click(function(event){
      if (!newHomes.length) return;
      let newHome = newHomes.pop();
      let newRow = `<tr>
          <td>${newHome.address}</td><td>${newHome.sf}</td><td>${newHome.bedrooms}</td>
          <td>${newHome.baths}</td><td>${newHome.price}</td>
          <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>`;
      $('#homes tbody').append(newRow);
      if (!newHomes.length) $('#addHome').attr('disabled', true);
  });

});