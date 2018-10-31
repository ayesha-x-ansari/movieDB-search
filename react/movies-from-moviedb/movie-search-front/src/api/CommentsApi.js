class CommentsApi {

    // Add new comment in Database
    static addComment(comment) {
      const request = new Request(`http://localhost:3001/api/v1/comments`, {
        method: 'POST',
        headers: new Headers({
        'Content-Type': 'application/json'
        }),
        body: JSON.stringify(comment)
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch((error) => {
        return error;
      });
    }
  
    // Fetch all comments from Database  
    static fetchComments() {
      return fetch(`http://localhost:3001/api/v1/comments`)
      .then((response) => response.json())
      .catch((error) => error)
    }
    
    //  Fetch a single comment from Database based on comment id
    static fetchComment(id) {
      return fetch(`http://localhost:3001/api/v1/comments/${id}`)
      .then((response) => response.json())
      .catch((error) => error)
    }
    
    //  Delete a comment from Database based on comment id
    static deleteComment(id) {
      const request = new  Request(`http://localhost:3001/api/v1/comments/${id}`, {
        method: 'DELETE'
        });
    
        return fetch(request).then(response => {
          return response.json();
        }).catch((error) => {
          return error;
        });
      };   
    }
  
    export default CommentsApi;
  