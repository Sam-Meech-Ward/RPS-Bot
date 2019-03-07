(function() {

  function postMessage(message) {
    $.ajax({
      type: "POST",
      url: 'http://localhost:8008',
      data: { message: message },
    })
    .then((data) => console.log(data))
  }

    let old = $(".c-message__body").last().text();
    setInterval(() => {
        const current = $(".c-message__body").last().text();
        if (old !== current) {
            old = current;
            postMessage(current);
		}
  }, 500);
})()