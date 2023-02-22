let message;

message = (login == 'Сотрудник') ? 'Привет' : '';
message = (login == 'Директор') ? 'Здравствуйте' : message;
message = (login == '') ? 'Нет логина' : message;