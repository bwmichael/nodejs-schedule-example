var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.seconds = 5;

console.log('Started up Scehduler');
var j = schedule.scheduleJob(rule, function(){
  console.log('The answer to life, the universe, and everything!');
});
