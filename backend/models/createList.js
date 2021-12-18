export function CreateList(user) {
  console.log(user)

  var element = `<tr>  <th >#</th>  <td>${user.id}</td>  <td>${user.email}</td> <td>${user.password}</td>  <td>${user.checkbox}</td> <td>${user.range}</td>  </tr>`

  $("#tbody").append(element)
}