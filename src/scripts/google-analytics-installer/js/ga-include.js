
(function ($){
  $(document).ready(function() {

    if($('a:contains("Global API/SIF Settings")').length){
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
    }

    if($('#copy-to-all').length){
      $('#copy-to-all').on('click', function(event) {
        event.preventDefault();
        var nonAdminTextareas = $('.non-admin');
        var adminTextareaVal = $('#ga-admin').val();
        $.each(nonAdminTextareas, (index,textarea) => {
            $(textarea).val(adminTextareaVal);
        });
      });
    }

  });
})($j);
