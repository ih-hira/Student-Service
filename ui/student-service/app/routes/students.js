import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({
    // model() {
    //     return this.store.findAll('student');
    // },
    ajax: Ember.inject.service(),
    model() {
        return this.get('ajax').request('http://localhost:8080/students');
    },
    actions: {
        submission() {
            console.log(this.controller.get('model.id'));
            console.log(this.controller.get('model.name'));
            console.log(this.controller.get('model.sclass'));
            console.log(this.controller.get('model.address'));
            let params = {
                id: this.controller.get('model.id'),
                name: this.controller.get('model.name'),
                sclass: this.controller.get('model.sclass'),
                address: this.controller.get('model.address')
            };

            var resp =  this.get('ajax').request('http://localhost:8080/students', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                data: JSON.stringify(
                    {
                        "id": this.controller.get('model.id'),
                        "name": this.controller.get('model.name'),
                        "sclass": this.controller.get('model.sclass'),
                        "address": this.controller.get('model.address')
                    }
                )
            });
            this.refresh();
        }
    }
});
