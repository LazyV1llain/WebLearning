let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
      for (let prop in obj) {
          if (typeof(obj[prop]) == "number") obj[prop] *= 2;
      }
  }

  document.write(`${menu.width}, ${menu.height}, ${menu.title}` + "<br/>");
  multiplyNumeric(menu);
  document.write(`${menu.width}, ${menu.height}, ${menu.title}`);