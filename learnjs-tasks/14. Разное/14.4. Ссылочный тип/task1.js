let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)() 

// Ответ: JS объединяет (user.go)() с блоком let user. 
// Необходимо добавить точку с запятой, чтобы этого не происходило