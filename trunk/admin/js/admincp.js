jQuery(function() {
    if (jQuery('#fullcsspages').length > 0) {
        jQuery('#fullcsspages').selectize({
            persist         : true,
            placeholder     : "Select a page...",
            plugins         : ['remove_button']
        });
    }
});