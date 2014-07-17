/*global $j,_*/

require(['underscore'], function(_) {
    $j(document).ready(function() {
        'use strict';
        $j('#copy-to-all').on('click', function(event) {
            event.preventDefault();
            var nonAdminTextareas = $j('#copy-to-all').parent().parent().parent().find('textarea').not(':eq(0)');
            var adminTextareaVal = document.getElementById('ga-admin').value;
            _.each(nonAdminTextareas, function(textarea) {
                textarea.value = adminTextareaVal;
            });
        });
    });
});
