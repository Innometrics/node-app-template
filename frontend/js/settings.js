/* global makeSettingsEditor */

(function () {
    makeSettingsEditor({
        form: $('#form-setting')[0],
        submit: $('#submit-setting')
    }, {
        schemaPath: 'js/settings.schema.json',
        title: 'App settings stored in Innometrics Cloud'
    }, {
        callbackGetSettings: function (helper, form) {
            helper.getProperties(function (status, data) {
                if (status) {
                    form.setValue(data);
                } else {
                    console.log('Error: unable to get Settings from Profile Cloud');
                }
                helper.hideLoader();
            });
        },
        callbackSetSettings: function (helper, form) {
            helper.showLoader('Saving...');
            helper.setProperties(form.getValue(), function (status) {
                helper.hideLoader();
                if (status) {
                    console.log('Settings were saved.');
                }
            });
        }
    });

})();
