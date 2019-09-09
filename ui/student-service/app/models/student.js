import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    //id: DS.attr('string'),
    name: DS.attr('string'),
    sclass: DS.attr('string'),
    address: DS.attr('string'),
});
