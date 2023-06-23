// JavaScriptコード
function calculate() {
    var result = document.getElementById('result');
    var expression = result.value;
  
    try {
      var answer = eval(expression);
      result.value = answer;
    } catch (error) {
      result.value = 'エラー';
    }
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function appendNumber(number) {
    var result = document.getElementById('result');
    result.value += number;
  }
  