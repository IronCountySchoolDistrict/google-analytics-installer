
(function ($){
  $(document).ready(function() {

    var globalAPISettingsTr = $('a:contains("Global API/SIF Settings")').closest("tr");

    fetch('/scripts/google-analytics-installer/html/analytics_table_fragment.html')
      .then(response => response.text())
      .then(body => {
        globalAPISettingsTr.after(body);

        var table = $('table').eq(0);
        var nonHeaderTrs = table.find('tr:not(".headerrow")');
        nonHeaderTrs.removeClass('evenRow').removeClass('oddRow');
        nonHeaderTrs.filter(':even').addClass('oddRow');
      })


    $('#copy-to-all').on('click', function(event) {
      event.preventDefault();
      var nonAdminTextareas = $('textarea').find('.non-admin');
      var adminTextareaVal = $('#ga-admin').val();
      forEach(nonAdminTextareas, function(textarea) {
          textarea.value = adminTextareaVal;
      });
    });
  });
})($j);
