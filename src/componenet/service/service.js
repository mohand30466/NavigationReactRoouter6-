export class Api {
    static GetUser() {
      return fetch(`https://mohanproject.herokuapp.com/api/users/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
       
      }).then((res) => res.json());
    }
    static GetComents() {
      return fetch(`https://mohanproject.herokuapp.com/api/comments/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
       
      }).then((res) => res.json());
    }
}