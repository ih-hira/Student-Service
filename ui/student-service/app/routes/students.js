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
        addnew() {
            var resp = this.get('ajax').request('http://localhost:8080/students', {
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
        },
        updateinfo() {
            var id = document.getElementById("sid").value;
            var url = 'http://localhost:8080/students/'+id;

            var resp = this.get('ajax').request(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'PATCH',
                data: JSON.stringify(
                    {
                        "id": document.getElementById("sid").value,
                        "name": document.getElementById("sname").value,
                        "sclass": document.getElementById("sclass").value,
                        "address": document.getElementById("saddress").value
                    }
                )
            });
        }
    }

});
