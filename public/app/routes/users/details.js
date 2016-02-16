;(function (ng) {
  "use strict";

  ng.module('app').controller('UserDetailsCtrl', UserDetailsCtrl);

  UserDetailsCtrl.$inject = ['$injector', 'user'];
  function UserDetailsCtrl($injector, user) {
    this._injectDependencies($injector);
    this._init(user);
  }

  UserDetailsCtrl.prototype._injectDependencies = function ($injector) {
    this.API = $injector.get('API');
      this.Noty = $injector.get('Noty');
  };

  UserDetailsCtrl.prototype._init = function (user) {
    this.user = user;
  };

    UserDetailsCtrl.prototype.save = function ($ev) {
        $ev.preventDefault();
        if (this.form.$invalid) {
            this.form.$setDirty();
            return;
        }

        this.user.$put().then(() => {
            console.log('data loaded');
            this.Noty.show({
                title: 'Success!',
                text: 'Data loaded.',
                type: 'success'
            })
        }).catch(err => {
            console.log(err);
        });
    }

}(window.angular));
