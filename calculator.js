// JavaScriptコード
function calculate() {
    const result = document.getElementById('result');
    const expression = result.value;
  
    try {
      const answer = eval(expression);
      result.value = answer;
    } catch (error) {
      result.value = 'エラー';
    }
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function appendNumber(number) {
    const result = document.getElementById('result');
    result.value += number;
  }
  