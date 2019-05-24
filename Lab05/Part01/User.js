const User = function (pFirstName, pLastName, pBDay, pId) {
    this.firstName = pFirstName;
    this.lastName = pLastName;
    this.birthDay = pBDay;
    this.id = pId;
}

models.exports(User);