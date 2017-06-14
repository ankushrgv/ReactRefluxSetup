import Reflux from "reflux";
import LoginAction from './LoginAction.jsx';

let LoginStore = Reflux.createStore({
    init: function() {
        this.listenTo(LoginAction.CREDENTIALS_VERIFICATION, this.onCredentialsVerification);
    },

    onCredentialsVerification: function(username, password) {
        console.log('Store username = ', username);
        console.log('Store password = ', password);

        this.trigger({
            type: 'credentialVerification',
            value: 'success'
        });
    },
});

module.exports = LoginStore;
