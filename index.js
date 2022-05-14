/**
 * @param {String} word 说话内容
 */
function say(word) {
  console.log(word);
}

function* fn1() {
  yield say('hi');
  yield say('my name is yield');
  yield say('count down for 5 start!');
  for (let i = 1; i >= 5; i++) {
    yield say(i);
  }
  yield say('ok! say over');
}

const Sandy = fn1();

Sandy.next();
Sandy.next();
