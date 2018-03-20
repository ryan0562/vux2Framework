import Mock from 'mockjs';

let mockData = JSON.parse(localStorage.getItem('mock'));
  let mockUse = function () {
    if (!mockData.checked) {
      return false
    }
    for (let name in mockData.main) {
      let obj = mockData.main[name];
      if (!obj.checked) {
        break;
      }
      try {
        let template = obj.template.trim();
        Mock.mock(name, eval(`(${template})`));//JS解析()会把里面当成JS表达式运算得到的结果就是字符串本身的代码含义
      } catch (err) {
        console.error('伪数据拦截模板格式错误=>' + err);
      }
      console.info(`Mocked:`, name);
    }
  };
  mockUse();





