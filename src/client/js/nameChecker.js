function checkUrl(inputUrl) {
    const httpUrlExpression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    var regex = new RegExp(httpUrlExpression);

    if (!inputUrl.match(regex)) {
      alert("Please enter URL starting with http or https");
      return false;
    } else {
        return true;
    }
}

export { checkUrl }
